import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Signup = () => {
  return(
    <Fragment>
      <h2 className="text--uppercase u--center">Signup</h2>

      <Form buttonText="Sign Up" action="/admin/signup" />

      <div className="login-link text--uppercase text--extra-bold u--center">
        <Link className="link--secondary" to='/admin'>Login</Link>
      </div>
    </Fragment>
  );
};

export default Signup;