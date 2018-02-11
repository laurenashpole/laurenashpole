import React, { Component } from 'react';
import { request } from '../../../utilities/request';

class Delete extends Component {
  handleClick = (e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete this font?')) {
      request(this.props.action, null, (response) => {
        if (response.success) {
          this.props.onDelete(response.data);
        }
      });
    }
  }

  render () {
    return(
      <button className="button button--inline button--small" onClick={this.handleClick}>
        Delete
      </button>
    )
  }
};

export default Delete;