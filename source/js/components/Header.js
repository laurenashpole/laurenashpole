import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getActiveLink } from '../utilities/getActiveLink';
import { sendEvent } from '../utilities/analytics';

const Header = ({ navLinks, enableAnalytics }) => {
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState(getActiveLink(navLinks, window.location.pathname));
  const firstEl = useRef(null);
  const lastEl = useRef(null);

  useEffect(() => {
    if (showNav) {
      window.addEventListener('keydown', handleKeydown);
    } else {
      window.removeEventListener('keydown', handleKeydown);
    }

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [showNav]);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  const handleKeydown = useCallback(() => {
    if (event.keyCode === 9) {
      handleTabKeydown(event);
    }

    if (event.keyCode === 27) {
      setShowNav(false);
    }
  }, [setShowNav])

  const handleTabKeydown = (e) => {
    if (e.shiftKey) {
      if (document.activeElement === firstEl.current) {
        e.preventDefault();
        lastEl.current.focus();
      }
    } else {
      if (document.activeElement === lastEl.current) {
        e.preventDefault();
        firstEl.current.focus();
      }
    }
  };

  const handleLinkClick = (e, link) => {
    setActiveLink(link);

    if (enableAnalytics) {
      sendEvent(e);
    }
  };

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo"
        onClick={(e) => handleLinkClick(e, '')}
        aria-label="Home"
        data-ga-category="Nav Links"
        data-ga-action="click"
        data-ga-label="Home"
      >
        <svg className="header__logo-svg" viewBox="0 0 106 49"><path d="M56.35 1.5c-1.7.7-4.6 3.15-6.4 5.4-4.15 5.15-9 6.75-15.8 5.1-10.6-2.6-10.8-2.6-9 .1 1.85 2.85 6.8 4.75 12.3 4.85l4 .05-5.95 6-5.95 6h-6.3C12.55 29 1 36.25 1 42.95c0 7.95 9.7 6.95 21.9-2.35 2.95-2.25 5.95-4.55 6.7-5.05 2.1-1.55 22.65 4.9 28.6 9 7.3 5 17.7 4.45 24-1.25 1.65-1.5 1.95-1.45 3.9.3 3.25 2.95 15 2.75 18.1-.35 3-3 1.2-5.2-2.7-3.4-6.3 2.85-14.5.35-14.5-4.4 0-3.85-2.7-3-7.85 2.55-5.85 6.3-9.4 7.45-15.05 4.95-5.4-2.45-5.25-2.85 2.65-6.95C73.95 32.3 85 22.45 85 19.75c0-1.75-4.15-5.05-7.8-6.2-5.2-1.6-21.1 9.45-24.7 17.2-1 2.05-1.9 3.9-2.05 4.1C50 35.35 36 30.7 36 30.05c0-.7 12.35-12.9 19.75-19.6 7.1-6.35 7.45-11.85.6-8.95zm21.5 16.8c2.8 3.4-9.05 13.9-19 16.75-4.25 1.2-3.65-.9 1.9-7.1 7.5-8.35 14.75-12.45 17.1-9.65zm-53.9 15.45c0 .9-7.05 6.25-12.2 9.25-6.25 3.65-6.5-.1-.35-5.7 4.5-4 12.7-6.35 12.55-3.55z" fill="currentColor"/></svg>
      </Link>

      <nav className="header__nav">
        <button
          className="header__icon u--mobile"
          onClick={handleNavToggle}
          ref={firstEl}
          aria-expanded={showNav}
          aria-controls="nav"
          aria-label="Toggle Nav"
        >
          <span className="header__icon-line"></span>
          <span className="header__icon-line"></span>
          <span className="header__icon-line"></span>
          <span className="header__icon-line"></span>
        </button>

        <ul id="nav" className="header__list list--unstyled text--uppercase text--extra-bold">
          {navLinks.map((link, i) => {
            const baseAttributes = {
              className: `header__link ${activeLink === link.url ? 'header__link--active' : ''}`,
              onClick: (e) => {
                handleNavToggle();
                handleLinkClick(e, link.url);
              },
              'data-ga-category': 'Nav Links',
              'data-ga-action': 'click',
              'data-ga-label': link.label
            };

            return (
              <li key={i} className="header__item">
                {link.isExternal ? (
                  <a
                    href={link.url}
                    ref={i === navLinks.length - 1 ? lastEl : null}
                    {...baseAttributes}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.url}
                    innerRef={i === navLinks.length - 1 ? lastEl : null}
                    {...baseAttributes}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  navLinks: PropTypes.array,
  enableAnalytics: PropTypes.bool
};

export default Header;