import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Users = () => {
  return(
    <main className="main main--bg-fixed container container--narrow">
      <Switch>
        <Route exact path="/admin" component={Login} />
        <Route path="/admin/signup" component={Signup} />
        <Redirect to="/admin" />
      </Switch>
    </main>
  );
};

export default Users;