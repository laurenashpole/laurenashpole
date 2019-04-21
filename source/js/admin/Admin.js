import React from 'react';
import PropTypes from 'prop-types';
import Users from './users/Users';
import Fonts from './fonts/Fonts';
import '../../sass/admin.scss';

const Admin = (props) => {
  if (props.isAuthenticated) {
    return <Fonts />;
  } else {
    return <Users />;
  }
};

Admin.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Admin;