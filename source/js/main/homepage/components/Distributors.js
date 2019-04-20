import React from 'react';
import { DIST_LINKS } from '../../constants/distLinks';

const Distributors = () => {
  return(
    <section className="container container--large dist">
      <h3 className="text--uppercase u--center">Fonts also available at</h3>

      <ul className="list--unstyled dist__list">
        {DIST_LINKS.map((link, i) => {
          return (
            <li className="dist__item" key={i}>
              <a className="dist__link" href={link.url}>
                <img className="img--responsive" src={link.imgSrc} alt={link.alt} data-pin-nopin="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Distributors;