import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const Edit = (props) => {
  return(
    <div className="well">
      {props.font ? (
        <Fragment>
          <div className="well__row">
            <h2 className="well__heading text--uppercase">Edit {props.font.name}</h2>
          </div>

          <Form endpoint={`/admin/fonts/${props.font._id}?_method=PUT`} buttonText="Edit Font" onSuccess={props.onEdit} font={props.font} />
        </Fragment>
      ) : (
        <div className="well__row well__row--px-lg well__row--py-lg">
          <h2>No font found.</h2>
          <div>Want to <Link to="/admin/fonts/create">create it</Link>?</div>
        </div>
      )}
    </div>
  );
};

Edit.propTypes = {
  font: PropTypes.object,
  onEdit: PropTypes.func
};

export default Edit;