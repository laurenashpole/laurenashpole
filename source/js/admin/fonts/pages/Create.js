import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const Create = (props) => {
  return(
    <Fragment>
      <h2 className="text--uppercase">Create New Font</h2>
      <Form action="/admin/fonts" buttonText="Create Font" onSuccess={props.onCreate} font={{}} />
    </Fragment>
  );
};

Create.propTypes = {
  onCreate: PropTypes.func
};

export default Create;