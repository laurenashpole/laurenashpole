import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {
  return(
    <section className="font__section">
      <div className="container container--large">
        <div className="column--static">
          <h2 className="font__heading text--uppercase u--center-mobile">About {props.font.name}</h2>

          <ul className="text--uppercase text--medium text--extra-bold list--unstyled u--center-mobile">
            <li className="font__heading-link">
              <Link to="/fonts/licensing" title="Licensing">Licensing Info</Link>
            </li>
            <li className="font__heading-link">
              <Link to="/fonts/eula" title="EULA">View EULA</Link>
            </li>
          </ul>

          <div className="well well--no-padding">
            <div className="well__row">
              <div className="well__column">
                <div className="font-details__date">
                  Created: {props.font.date_created}
                  {props.font.date_modifed &&
                    <span> / Modified: {props.font.date_modified}</span>
                  }
                </div>

                {props.font.description &&
                  <div className="font-details__description" dangerouslySetInnerHTML={{ __html: props.font.description }}>
                  </div>
                }
              </div>
            </div>

            <div className="well__row font-details__lists">
              {props.font.commercial_font_file &&
                <ul className="list--unstyled well__column font-details__list">
                  <li className="font-details__list-heading text--uppercase text--extra-bold">Commercial Use Details</li>

                  {Object.keys(props.font.commercial_file).map((detail) => {
                    return (
                      <Fragment key={props.font.commercial_file[detail].name}>
                        {props.font.commercial_file[detail].is_included &&
                          <li>{props.font.commercial_file[detail].name}</li>
                        }
                      </Fragment>
                    )
                  })}
                </ul>
              }

              {props.font.personal_font_file &&
                <ul className="list--unstyled well__column font-details__list">
                  <li className="font-details__list-heading text--uppercase text--extra-bold">Personal Use Details</li>

                  {Object.keys(props.font.personal_file).map((detail) => {
                    return (
                      <Fragment key={props.font.personal_file[detail].name}>
                        {props.font.personal_file[detail].is_included &&
                          <li>{props.font.personal_file[detail].name}</li>
                        }
                      </Fragment>
                    )
                  })}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;