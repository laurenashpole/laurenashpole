import React from 'react';

const Distributors = () => {
  return(
    <section className="container container--large dist">
      <h3 className="text--uppercase u--center">Fonts also available at</h3>

      <ul className="list--unstyled dist__list">
        <li className="dist__item">
          <a href="http://creativemarket.com/laurenashpole?u=laurenashpole" className="link--no-underline dist__link">
            <img src="/images/creativemarket.png" alt="Creative Market" className="img--responsive" data-pin-nopin="true" />
          </a>
        </li>
        <li className="dist__item">
          <a href="https://www.myfonts.com/foundry/Lauren_Ashpole/" className="link--no-underline dist__link">
            <img src="/images/myfonts.svg" alt="MyFonts" className="img--responsive" data-pin-nopin="true" />
          </a>
        </li>
        <li className="dist__item">
          <a href="http://www.fonts.com/font/lauren-ashpole" className="link--no-underline dist__link">
            <img src="/images/fontscom-logo.svg" alt="Fonts.com" className="img--responsive" data-pin-nopin="true" />
          </a>
        </li>
        <li className="dist__item">
          <a href="https://www.etsy.com/shop/laurenashpole" className="link--no-underline dist__link">
            <img src="/images/etsy.png" alt="Etsy" className="img--responsive" data-pin-nopin="true" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Distributors;