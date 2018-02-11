import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Users = () => (
  <Switch>
    <Route exact path='/admin' component={Login} />
    <Route path='/admin/signup' component={Signup} />
    <Redirect to="/admin" />
  </Switch>
)

export default Users;