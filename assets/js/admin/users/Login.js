import React from 'react';
import { Link } from 'react-router-dom';
import Form from './components/Form';

const Login = () => (
  <main className="main main--bg-fixed container container--narrow">
    <h2 className="text--uppercase u--center">Login</h2>

    <Form buttonText="Login" action="/admin/login" />

    <div className="login-link text--uppercase text--extra-bold u--center">
      <Link className="link--secondary" to='/admin/signup'>Signup</Link>
    </div>
  </main>
);

export default Login;