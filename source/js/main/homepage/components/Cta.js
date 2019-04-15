import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../../utilities/analytics';

const Cta = (props) => {
  return(
    <section className="well u--center hero__cta">
      <h3 className="text--uppercase">
        New font!<br/>
        {props.font.name}
      </h3>

      <Link className="button button--cta-primary" to={`/fonts/${props.font.slug}`} title={props.font.name} onClick={sendEvent} data-ga-category="Homepage Cta" data-ga-action="click" data-ga-label="Check it out">
        Check it out
      </Link>
    </section>
  );
};

Cta.propTypes = {
  font: PropTypes.object
};

export default Cta;