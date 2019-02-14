import React from 'react';
import { Link } from 'react-router-dom';
import Form from './components/Form';

const Signup = () => (
  <main className="main main--bg-fixed container container--narrow">
    <h2 className="text--uppercase u--center">Signup</h2>

    <Form buttonText="Sign Up" action="/admin/signup" />

    <div className="login-link text--uppercase text--extra-bold u--center">
      <Link className="link--secondary" to='/admin'>Login</Link>
    </div>
  </main>
);

export default Signup;