import PropTypes from 'prop-types';
import { FaBluesky, FaCodepen, FaGithub, FaPinterestP } from 'react-icons/fa6';

import styles from '../styles/Footer.styles.js';
import Container from './Container.js';

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://bsky.app/profile/did:plc:7sd5siamdxbuyxvd75ewumuf"
                data-ga-click={true}
                data-ga-category="footer"
                data-ga-text="Bluesky"
                aria-label="Bluesky"
              >
                <FaBluesky />
              </a>
            </li>

            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://github.com/laurenashpole"
                data-ga-click={true}
                data-ga-category="footer"
                data-ga-text="Github"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </li>

            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://codepen.io/laurenashpole/"
                data-ga-click={true}
                data-ga-category="footer"
                data-ga-text="CodePen"
                aria-label="CodePen"
              >
                <FaCodepen />
              </a>
            </li>

            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://www.pinterest.com/laurenashpole/"
                data-ga-click={true}
                data-ga-category="footer"
                data-ga-text="Pinterest"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
            </li>
          </ul>

          {children}
        </div>
      </Container>

      <style jsx global>
        {styles}
      </style>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
