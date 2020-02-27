import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const Create = (props) => {
  return(
    <div className="well">
      <div className="well__row">
        <h2 className="well__heading">Create New Font</h2>
      </div>

      <Form endpoint="/admin/fonts" buttonText="Create Font" onSuccess={props.onCreate} font={{}} />
    </div>
  );
};

Create.propTypes = {
  onCreate: PropTypes.func
};

export default Create;