import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const Edit = (props) => {
  return(
    <Fragment>
      {props.font ? (
        <Fragment>
          <h2 className="text--uppercase">Edit {props.font.name}</h2>
          <Form endpoint={`/admin/fonts/${props.font._id}?_method=PUT`} buttonText="Edit Font" onSuccess={props.onEdit} font={props.font} />
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="text--uppercase">No font found.</h2>
          <p>Want to <Link to="/admin/fonts/create">create it</Link>?</p>
        </Fragment>
      )}
    </Fragment>
  );
};

Edit.propTypes = {
  font: PropTypes.obect,
  onEdit: PropTypes.func
};

export default Edit;