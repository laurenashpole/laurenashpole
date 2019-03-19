import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { request } from '../../../utilities/request';

class Delete extends Component {
  handleClick = (e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete this font?')) {
      request(this.props.action, {}, (response) => {
        if (response.success) {
          this.props.onDelete(response.font);
        }
      });
    }
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
  action: PropTypes.string,
  onDelete: PropTypes.func
};

export default Delete;