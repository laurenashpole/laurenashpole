import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import ActiveLink from './Activelink';
import styles from '../styles/Header.styles.js';

const Header = ({ links, enableAnalytics }) => {
 const { ref, inView } = useInView();

  return (
    <>
      <span ref={ref} />
      <header className="header">
        <div className={`header__content ${inView ? '' : 'header__content--bg'}`}>
          <ActiveLink href="/" isExact={true}>
            <a className="header__logo" data-ga-click={enableAnalytics} data-ga-category="nav">
              <span>Fonts by Lauren Ashpole</span>
            </a>
          </ActiveLink>

          <nav>
            <ul className="header__list">
              {links.map((link, i) => {
                const anchor = <a href={link.url} className="header__link" data-ga-click={enableAnalytics} data-ga-category="nav">{link.label}</a>;

                return (
                  <li key={i} className="header__item">
                    {link.isExternal ? anchor : (
                      <ActiveLink href={link.url} isExact={link.isExact}>
                        {anchor}
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
  links: PropTypes.array,
  enableAnalytics: PropTypes.bool
};

export default Header;