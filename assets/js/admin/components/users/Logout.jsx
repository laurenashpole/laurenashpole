import React, { Component } from 'react';
import { request } from '../../../utilities/request';

class Logout extends Component {
  handleClick = (e) => {
    e.preventDefault();

    request('/admin/logout', null, function (response) {
      if (response.success) {
        location.reload();
      }
    });
  }

  render () {
    return(
      <a href="javascript:void(0);" onClick={this.handleClick} ref={this.props.inputRef}>
        Logout
      </a>
    )
  }
};

export default Logout;