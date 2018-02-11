import React, { Fragment} from 'react';
import Form from './Form';

const Create = (props) => (
  <Fragment>
    <h2 className="text--uppercase">Create New Font</h2>
    <Form action="/admin/fonts" buttonText="Create Font" listener={props.onCreate} />
  </Fragment>
)

export default Create;