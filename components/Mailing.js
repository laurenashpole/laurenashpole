import { useState } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../utils/request';
import Input from './Input';
import Button from './Button';
import styles from '../styles/Mailing.module.scss';

const Mailing = ({ location, isInline, onSignup }) => {
  const [email, setEmail] = useState('');
  const [hidden, setHidden] = useState('');
  const [buttonText, setButtonText] = useState('Sign<br /> me up!');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setButtonText('Sign<br /> me up!');
  };

  const handleSubmit = async (e) => {
    if (!email || !(/\S+@\S+\.\S+/.test(email))) {
      return setButtonText('Invalid email');
    }

    setButtonText('Sending');

    try {
      await request({
        endpoint: 'https://laurenashpole.com/api/mailing',
        body: JSON.stringify({
          email,
          b_5e9c643a20b49926773037101_a878f779fc: hidden
        })
      });

      setButtonText('Success!');
      onSignup && onSignup instanceof Function && onSignup(e);
    } catch (err) {
      setButtonText('Error! Try again.');
    }
  };

  return (
    <form className={`${isInline ? styles.containerInline : ''}`}>
      <div className={styles.input}>
        <Input label="Mailing List Email" hideLabel={true} inputProps={{ type: 'email', placeholder: isInline ? 'Want email updates?' : 'yes@please.com', value: email, onChange: handleChange }} />
      </div>

      <input className={styles.hidden} type="text" tabIndex="-1" onChange={(e) => setHidden(e.target.value)} value={hidden} aria-hidden="true" />

      <div className={styles.button}>
        <Button type="secondary" onClick={handleSubmit} attributes={{ type: 'button', disabled: buttonText === 'Sending' || buttonText === 'Success!', 'data-ga-click': true, 'data-ga-category': location }}>
          <span dangerouslySetInnerHTML={{ __html: buttonText }} />
        </Button>
      </div>
    </form>
  );
};

Mailing.propTypes = {
  location: PropTypes.string,
  isInline: PropTypes.bool,
  onSignup: PropTypes.func
};

export default Mailing;