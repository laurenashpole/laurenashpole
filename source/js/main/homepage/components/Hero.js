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
    <section className="hero hero--bg-repeat">
      <div className="container container--large hero__container">
        <div className="hero__img">
          <img src={`/images/fonts/${image}`} alt={`A sample of my newest font ${name}!`} />
        </div>

        <div className="well u--center hero__cta">
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