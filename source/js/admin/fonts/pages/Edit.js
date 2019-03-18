import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Edit = (props) => {
  return(
    <Fragment>
      {props.font ? (
        <Fragment>
          <h2 className="text--uppercase">Edit {props.font.name}</h2>
          <Form action={`/admin/fonts/${props.font._id}?_method=PUT`} buttonText="Edit Font" onSuccess={props.onEdit} font={props.font} />
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

export default Edit;