import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class Delete extends Component {
  handleClick = (e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete this font?')) {
      this.handleDelete();
    }
  }

  handleDelete = () => {
    window.fetch(this.props.endpoint, {
      credentials: 'include',
      method: 'POST'
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      this.handleError(response.status);
    }).then((response) => {
      if (response.success) {
        this.props.onDelete(response.font);
      }
    });
  }

  render () {
    return(
      <button className="button button--inline button--small" onClick={this.handleClick}>
        Delete
      </button>
    );
  }
}

Delete.propTypes = {
  endpoint: PropTypes.string,
  onDelete: PropTypes.func
};

export default Delete;