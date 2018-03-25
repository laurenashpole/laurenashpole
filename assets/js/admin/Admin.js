import React from 'react';
import Users from './users/Users';
import Fonts from './fonts/Fonts';

function Admin (props) {
  let isAuthenticated = props.isAuthenticated;

  if (isAuthenticated) {
    return <Fonts />;
  } else {
    return <Users />;
  }
}

export default Admin;