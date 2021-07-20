import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import ActiveLink from './ActiveLink';
import styles from '../styles/Header.styles.js';

const Header = ({ home, links, enableAnalytics }) => {
 const { ref, inView } = useInView();

  return (
    <>
      <span ref={ref} />
      <header className="header">
        <div className={`header__content ${inView ? '' : 'header__content--bg'}`}>
          {home.external ? (
            <a className="header__logo" href={`https://${home.external.host}${home.path}`} data-ga-click={enableAnalytics} data-ga-category="nav">
              <span>{home.label}</span>
            </a>
          ) : (
            <ActiveLink href={home.path} isExact={true}>
              <a className="header__logo" data-ga-click={enableAnalytics} data-ga-category="nav">
                <span>{home.label}</span>
              </a>
            </ActiveLink>
          )}

          <nav>
            <ul className="header__list">
              {links.map((link, i) => {
                return (
                  <li key={i} className="header__item">
                    {link.external ? (
                      <a className="header__link" href={`https://${link.external.host}${link.path}`} data-ga-click={enableAnalytics} data-ga-category="nav" aria-current={link.external.isActive ? 'page' : null}>{link.label}</a>
                    ) : (
                      <ActiveLink href={link.path} isExact={link.isExact}>
                        <a className="header__link" data-ga-click={enableAnalytics} data-ga-category="nav">{link.label}</a>
                      </ActiveLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

Header.propTypes = {
  home: PropTypes.object,
  links: PropTypes.array,
  enableAnalytics: PropTypes.bool
};

export default Header;