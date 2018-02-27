import React, { Component } from 'react';
import Mailing from './mailing';

const Footer = () => (
  <footer className="footer bg-solid--white">
    <div className="footer__content">
      <ul className="list--unstyled footer__social">
        <li className="social">
          <a href="https://twitter.com/laurenashpole" className="social__link">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="social">
          <a href="https://www.pinterest.com/laurenashpole/" className="social__link">
            <i className="fa fa-pinterest"></i>
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/laurenashpole" className="social__link">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className="social">
          <a href="http://codepen.io/laurenashpole/" className="social__link">
            <i className="fa fa-codepen"></i>
          </a>
        </li>
      </ul>

      <Mailing />
    </div>
  </footer>
);

export default Footer;