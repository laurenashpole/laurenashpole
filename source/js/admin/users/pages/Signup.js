import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Signup = () => {
  return(
    <Fragment>
      <div className="well">
        <div className="well__row auth__row">
          <h3 className="well__heading text--uppercase">Signup</h3>
        </div>

        <Form endpoint="/admin/signup" buttonText="Signup" />
      </div>

      <div className="auth__link text--uppercase text--extra-bold">
        <Link className="link--secondary" to='/admin'>Login</Link>
      </div>
    </Fragment>
  );
};

export default Signup;