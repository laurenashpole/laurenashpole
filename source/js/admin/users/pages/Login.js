import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  return(
    <Fragment>
      <div className="well">
        <div className="well__row well__row--py-sm">
          <h3 className="well__heading text--uppercase">Login</h3>
        </div>

        <Form endpoint="/admin/login" buttonText="Login" />
      </div>

      <div className="auth__link text--uppercase text--extra-bold">
        <Link className="link--secondary" to='/admin/signup'>Signup</Link>
      </div>
    </Fragment>
  );
};

export default Login;