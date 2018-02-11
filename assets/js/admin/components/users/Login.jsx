import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Login = () => (
  <main className="main main--v-center main--narrow">
    <h2 className="text--uppercase u--center">Login</h2>
    <Form buttonText="Login" action="/admin/login" />
    <div className="login-link text--uppercase text--extra-bold">
      <Link to='/admin/signup'>Signup</Link>
    </div>
  </main>
)

export default Login;