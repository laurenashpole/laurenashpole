import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Delete from './components/Delete';

class List extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fonts: this.props.fonts
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      fonts: nextProps.fonts
    });
  }

  render () {
    return (
      <Fragment>
        <h2 className="text--uppercase">Fonts</h2>
        <Link className="button button--cta-primary button--inline button--small button--add" to="/admin/fonts/create">
          Create new font
        </Link>
        <ul className="list--unstyled">
          {this.state.fonts.map((font) => {
            return (
              <li className="well" key={font._id}>
                <h3>{font.name}</h3>
                <div className="buttons">
                  <Link className="button button--inline button--small" to={`/admin/fonts/${font._id}`}>Edit</Link>
                  <Delete action={`/admin/fonts/${font._id}?_method=DELETE`} onDelete={this.props.onDelete} />
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default List;