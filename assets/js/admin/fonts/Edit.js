import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from './components/Form';

class Edit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      font: this.props.fonts.find((font) => font._id === this.props.match.params.id)
    };
  }

  render () {
    return (
      <Fragment>
        {this.state.font ? (
          <Fragment>
            <h2 className="text--uppercase">Edit {this.state.font.name}</h2>
            <Form action={`/admin/fonts/${this.state.font._id}?_method=PUT`} buttonText="Edit Font" listener={this.props.onEdit} font={this.state.font} />
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="text--uppercase">No font found.</h2>
            <p>Want to <Link to="/admin/fonts/create">create it</Link>?</p>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Edit;