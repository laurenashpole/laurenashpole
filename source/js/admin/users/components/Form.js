import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRequest } from '../../../utilities/fetchRequest';

const Form = ({ endpoint, buttonText }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      username: username,
      password: password
    });

    fetchRequest('post', body, endpoint, (response) => {
      if (response.user) {
        location.reload();
      } else {
        if (response.err) {
          setError(response.err);
        }
      }
    });
  };

  return(
    <Fragment>
      {error &&
        <div className="well__row auth__row">
          {error}
        </div>
      }

      <form className="well__row">
        <div className="form__row">
          <input className="input input--label-inset" type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form__row">
          <input className="input input--label-inset" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="form__row">
          <button className="button button--cta-primary" onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  endpoint: PropTypes.string,
  buttonText: PropTypes.string
};

export default Form;