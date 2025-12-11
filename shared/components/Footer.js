import PropTypes from 'prop-types';
import { FaBluesky, FaCodepen, FaGithub, FaPinterestP } from 'react-icons/fa6';

import styles from '../styles/Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.social}>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://bsky.app/profile/did:plc:7sd5siamdxbuyxvd75ewumuf"
              data-ga-click={true}
              data-ga-category="footer"
              data-ga-text="Bluesky"
              aria-label="Bluesky"
            >
              <FaBluesky />
            </a>
          </li>

          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://github.com/laurenashpole"
              data-ga-click={true}
              data-ga-category="footer"
              data-ga-text="Github"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </li>

          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://codepen.io/laurenashpole/"
              data-ga-click={true}
              data-ga-category="footer"
              data-ga-text="CodePen"
              aria-label="CodePen"
            >
              <FaCodepen />
            </a>
          </li>

          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
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
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
