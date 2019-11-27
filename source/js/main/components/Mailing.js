import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../utilities/request';
import { sendEvent } from '../../utilities/analytics';

const Mailing = ({ customClasses, location, onSignup }) => {
  const [email, setEmail] = useState('');
  const [hidden, setHidden] = useState('');
  const [buttonText, setButtonText] = useState('Sign me up!');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !(/\S+@\S+\.\S+/.test(email))) {
      return setButtonText('Invalid email');
    }

    sendEvent(location, 'click', 'Sign me up!');
    setButtonText('Sending');

    request('/mailing/signup', {
      email: email,
      b_5e9c643a20b49926773037101_a878f779fc: hidden
    }, (response) => {
      if (response.err) {
        return setButtonText(response.err);
      }

      setButtonText('Success!');

      if (onSignup && onSignup instanceof Function) {
        onSignup(e);
      }
    });
  };

  return (
    <form className={`form__row--inline ${customClasses ? customClasses : ''}`}>
      <div className="mailing__input">
        <input className="input input--small" type="email" placeholder="Want updates by email?" onChange={(e) => { setEmail(e.target.value); setButtonText('Sign me up!'); }} value={email} />
      </div>

      <div className="form__hidden" aria-hidden="true">
        <input type="text" tabIndex="-1" onChange={(e) => setHidden(e.target.value)} value={hidden} />
      </div>

      <div className="mailing__button">
        <button className="button button--small" onClick={handleSubmit} disabled={buttonText === 'Success!'}>
          {buttonText}
        </button>
      </div>
    </form>
  );
};

Mailing.propTypes = {
  customClasses: PropTypes.string,
  location: PropTypes.string,
  onSignup: PropTypes.func
};

export default Mailing;