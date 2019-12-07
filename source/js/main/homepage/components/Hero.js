import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../../utilities/analytics';

const Hero = (props) => {
  const {
    image,
    name,
    slug
  } = props.font;

  return(
    <section className="hero">
      <div className="hero__img">
        <img src={`/uploads/images/${image}`} alt={`A sample of my newest font ${name}!`} />
      </div>

      <div className="well u--center hero__cta">
        <div className="well__row">
          <h3 className="text--uppercase">
            New font!<br/>
            {name}
          </h3>

          <Link className="button button--cta-primary" to={`/fonts/${slug}`} title={name} onClick={() => sendEvent('Homepage Hero', 'click', 'Cta')}>
            Check it out
          </Link>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  font: PropTypes.object
};

export default Hero;