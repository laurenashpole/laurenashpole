import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Cta = (props) => {
  return(
    <section className="well column--fixed column--absolute u--center">
      <h3 className="text--uppercase">
        New font!<br/>
        {props.font.name}
      </h3>

      <Link className="button button--cta-primary" to={`/fonts/${props.font.slug}`} title={props.font.name}>
        Check it out
      </Link>
    </section>
  );
};

export default Cta;