import React, { Component } from 'react';
import { request } from '../../../utilities/request';

class Logout extends Component {
  componentDidMount () {
    request('/admin/logout', {}, function (response) {
      if (response.success) {
        location.reload();
      }
    });
  }

  render () {
    return(
      <div className="container container--narrow">
        <div className="well">Logging out...</div>
      </div>
    );
  }
}

export default Logout;