import PropTypes from 'prop-types';
import styles from '../styles/Footer.styles.js';

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__social">
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://bsky.app/profile/did:plc:7sd5siamdxbuyxvd75ewumuf" data-ga-click={true} data-ga-category="footer" data-ga-text="Bluesky" aria-label="Bluesky">
              <svg className="footer__social-twitter" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.1"><path d="M5.2 1.4C8 3.5 10.9 7.7 12 9.9c1.1-2.2 4-6.4 6.8-8.5 2-1.5 5.2-2.6 5.2 1s-.4 6.2-.7 7c-.9 3.1-4 3.8-6.8 3.4 4.9.8 6.1 3.6 3.4 6.3-5.1 5.2-7.3-1.3-7.8-3-.1-.3-.2-.4-.2-.3 0-.1 0 0-.2.3-.6 1.7-2.8 8.2-7.8 3-2.7-2.7-1.4-5.5 3.4-6.3-2.8.5-5.9-.3-6.8-3.4-.2-.9-.7-6.3-.7-7C0-1.2 3.2 0 5.2 1.4Z" fill="currentColor"/></svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://github.com/laurenashpole" data-ga-click={true} data-ga-category="footer" data-ga-text="Github" aria-label="Github">
              <svg className="footer__social-github" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" /></svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://codepen.io/laurenashpole/" data-ga-click={true} data-ga-category="footer" data-ga-text="CodePen" aria-label="CodePen">
              <svg className="footer__social-codepen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 2.844l-.563.375-12 8.031-.437.281v8.938l.438.281 12 8.031.562.375.563-.375 12-8.031.437-.281V11.53l-.438-.281-12-8.031zm-1 3.062v5.438l-5.156 3.469-4.031-2.72zm2 0l9.188 6.188-4.032 2.719L17 11.342zm-1 7.188L20.344 16 16 18.906 11.656 16zm-11 .844L8.063 16 5 18.063zm22 0v4.124L23.937 16zm-17.125 3.25L15 20.655v5.438l-9.188-6.188zm12.25 0l4.063 2.718L17 26.094v-5.438z" fill="currentColor" /></svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://www.pinterest.com/laurenashpole/" data-ga-click={true} data-ga-category="footer" data-ga-text="Pinterest" aria-label="Pinterest">
              <svg className="footer__social-pinterest" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.9 20.8"><path d="M16.8 6.3C16.5 3.2 13.6.4 10.1.1 4.8-.5.1 2.7 0 7.9c0 2.4.8 4 2.9 4.8 1.5-1.5-.3-2.4-.5-4C2 4.3 7.1.1 11.7 2.9c3.2 1.9 2.6 9.9-1.2 10.7-.8.1-1.8-.1-2.1-.5-1.9-1.8 1.5-4.8.4-7.3-.9-2.1-3.6-.4-3.9 1.5-.2 1 .3 2 .3 2.9 0 2.1-1.3 5-1.7 7.1-.2.9-.3 2.6-.1 3.4h1.5c1-1.6 1.6-4.1 2.1-6.3.3-.2.5.4.7.6 1.8 1.4 5 .6 6.4-.7 2.1-1.7 3-5.2 2.7-8" fill="currentColor" /></svg>
            </a>
          </li>
        </ul>

        {children}
      </div>

      <style jsx global>
        {styles}
      </style>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.any
};

export default Footer;