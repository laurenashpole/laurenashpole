import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  return(
    <Fragment>
      <h2 className="text--uppercase">Login</h2>

      <Form endpoint="/admin/login" buttonText="Login" />

      <div className="auth__link text--uppercase text--extra-bold">
        <Link className="link--secondary" to='/admin/signup'>Signup</Link>
      </div>
    </Fragment>
  );
};

export default Login;