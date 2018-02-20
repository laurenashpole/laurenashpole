import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';

const Login = () => (
  <Fragment>
    <Header />
    <main>
      <Route exact path="/" render={(props) => {
        return <h2>Homepage</h2>
      }}/>
      <Route path="/fonts" render={(props) => {
        return <h2>Fonts</h2>
      }}/>
      <Route path="/contact" render={(props) => {
        return <h2>Contact</h2>
      }}/>
    </main>
  </Fragment>
);

export default Login;