import React from 'react';
import Mailing from './Mailing';

const Footer = () => (
  <footer className="footer bg-solid--white">
    <div className="footer__content">
      <ul className="list--unstyled footer__social">
        <li className="social">
          <a href="https://twitter.com/laurenashpole" className="social__link">
            <span className="social__icon social__icon--twitter" aria-label="Twitter"></span>
          </a>
        </li>
        <li className="social">
          <a href="https://www.pinterest.com/laurenashpole/" className="social__link">
            <span className="social__icon social__icon--pinterest" aria-label="Pinterest"></span>
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/laurenashpole" className="social__link">
            <span className="social__icon social__icon--github" aria-label="Github"></span>
          </a>
        </li>
        <li className="social">
          <a href="http://codepen.io/laurenashpole/" className="social__link">
            <span className="social__icon social__icon--codepen" aria-label="CodePen"></span>
          </a>
        </li>
      </ul>

      <div className="footer__form-section">
        <Mailing customClasses="mailing--inline" />
      </div>
    </div>
  </footer>
);

export default Footer;