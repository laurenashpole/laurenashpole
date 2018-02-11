import React from 'react';
import Users from './components/users/Users';
import Fonts from './components/fonts/Fonts';

function Admin (props) {
  let isAuthenticated = props.isAuthenticated;

  if (isAuthenticated) {
    return <Fonts />;
  } else {
    return <Users />;
  }
}

export default Admin;