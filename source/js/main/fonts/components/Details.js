import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Details = (props) => {
  const {
    date_created,
    date_modified,
    description,
    commercial_font_file,
    commercial_file,
    personal_font_file,
    personal_file,
    tags
  } = props.font;

  return(
    <section className="font__section font__details">
      <div className="font__section-scroll" id="details"></div>
      <h3 className="text--uppercase u--center-mobile">Details</h3>

      <ul className="text--uppercase text--medium text--extra-bold list--unstyled u--center-mobile">
        <li className="font__heading-link">
          <Link to="/fonts/licensing" title="Licensing">Licensing Info</Link>
        </li>
        <li className="font__heading-link">
          <Link to="/fonts/eula" title="EULA">View EULA</Link>
        </li>
      </ul>

      <div className="font__details-date text--medium">
        Created: {date_created}
        {date_modified && <span> / Modified: {date_modified}</span>}
      </div>

      {description &&
        <div className="font__details-description" dangerouslySetInnerHTML={{__html: description}}>
        </div>
      }

      <div className="font__details-lists text--medium">
        {commercial_font_file &&
          <ul className="list--unstyled font__details-list">
            <li className="font__details-list-heading text--uppercase text--extra-bold">Commercial Use Details</li>

            {Object.keys(commercial_file).map((detail) => {
              return (
                <Fragment key={commercial_file[detail].name}>
                  {commercial_file[detail].is_included &&
                    <li>{commercial_file[detail].name}</li>
                  }
                </Fragment>
              )
            })}
          </ul>
        }

        {personal_font_file &&
          <ul className="list--unstyled font__details-list">
            <li className="font__details-list-heading text--uppercase text--extra-bold">Personal Use Details</li>

            {Object.keys(personal_file).map((detail) => {
              return (
                <Fragment key={personal_file[detail].name}>
                  {personal_file[detail].is_included &&
                    <li>{personal_file[detail].name}</li>
                  }
                </Fragment>
              )
            })}
          </ul>
        }
      </div>

      {tags.length > 0 &&
        <div className="font__details-tags text--medium">
          <span>Tagged:</span>

          <ul className="list--unstyled">
            {tags.map((tag) => {
              return(
                <li key={tag}>
                  <Link className="tag text--extra-small text--extra-bold text--uppercase" to={`/fonts/tagged/${tag.replace(/\s+/g, '-').toLowerCase()}`}>{tag}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </section>
  );
};

Details.propTypes = {
  font: PropTypes.object
};

export default Details;