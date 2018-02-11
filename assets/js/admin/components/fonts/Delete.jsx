import React, { Component } from 'react';
import { request } from '../../../utilities/request';

class Delete extends Component {
  constructor (props) {
    super(props);
  }

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
      <a className="button button--inline button--small text--uppercase text--extra-bold" href="javascript:void(0);" onClick={this.handleClick}>
        Delete
      </a>
    )
  }
};

export default Delete;