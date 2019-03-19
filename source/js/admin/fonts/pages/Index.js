import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Delete from '../components/Delete';

const Index = (props) => {
  return(
    <Fragment>
      <h2 className="text--uppercase">Fonts</h2>

      <Link className="button button--cta-primary button--inline button--small button--add" to="/admin/fonts/create">
        Create new font
      </Link>

      <ul className="list--unstyled">
        {props.fonts.map((font) => {
          return (
            <li className="well" key={font._id}>
              <h3>{font.name}</h3>
              <div className="buttons">
                <Link className="button button--inline button--small" to={`/admin/fonts/${font._id}`}>Edit</Link>
                <Delete action={`/admin/fonts/${font._id}?_method=DELETE`} onDelete={props.onDelete} />
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

Index.propTypes = {
  fonts: PropTypes.array,
  onDelete: PropTypes.func
};

export default Index;