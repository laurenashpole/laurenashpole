import React, { Component } from 'react';
import 'whatwg-fetch';

class Logout extends Component {
  componentDidMount () {
    window.fetch('/admin/logout', {
      credentials: 'include',
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((response) => {
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