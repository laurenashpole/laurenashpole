import PropTypes from 'prop-types';
import HeaderLink from './HeaderLink';
import styles from './header.styles.js';

const Header = ({ navLinks, enableAnalytics }) => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLink href="/" isExact={true} activeClassName="">
          <a className="header__logo" data-ga-click={enableAnalytics} data-ga-category="nav">
            <span>Fonts by Lauren Ashpole</span>
          </a>
        </HeaderLink>

        <nav>
          <ul className="header__list">
            {navLinks.map((link, i) => {
              const anchor = <a href={link.url} className="header__link" data-ga-click={enableAnalytics} data-ga-category="nav">{link.label}</a>;

              return (
                <li key={i} className="header__item">
                  {link.isExternal ? anchor : (
                    <HeaderLink href={link.url} isExact={link.isExact} activeClassName="header__link--active">
                      {anchor}
                    </HeaderLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <style jsx global>
        {styles}
      </style>
    </header>
  );
};

Header.propTypes = {
  navLinks: PropTypes.array,
  enableAnalytics: PropTypes.bool
};

export default Header;