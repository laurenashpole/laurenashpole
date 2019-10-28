import React from 'react';
import PropTypes from 'prop-types';
import { fetchRequest } from '../../../utilities/fetchRequest';

const Delete = ({ endpoint, onDelete }) => {
  const handleClick = () => {
    if (confirm('Are you sure you want to delete this font?')) {
      handleDelete();
    }
  };

  const handleDelete = () => {
    fetchRequest('post', null, endpoint, (response) => {
      if (response.font) {
        onDelete(response.font);
      }
    });
  };

  return(
    <button className="button button--inline button--small" onClick={handleClick}>
      Delete
    </button>
  );
};

Delete.propTypes = {
  endpoint: PropTypes.string,
  onDelete: PropTypes.func
};

export default Delete;