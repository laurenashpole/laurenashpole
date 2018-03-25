import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { sendEvent } from '../../utilities/analytics';

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showNav: false
    };
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown, false);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown, false);
  }

  handleKeydown = (e) => {
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === this.firstElement) {
          e.preventDefault();
          this.lastElement.focus();
        }
      } else {
        if (document.activeElement === this.lastElement) {
          e.preventDefault();
          this.firstElement.focus();
        }
      }
    }

    if (e.keyCode === 27) {
      this.setState({
        showNav: false
      });
    }
  }

  handleNavToggle = () => {
    this.setState(prevState => ({
      showNav: !prevState.showNav
    }));
  }

  handleLinkNavToggle = () => {
    if (!window.matchMedia('(min-width: 768px)').matches) {
      this.handleNavToggle();
    }
  }

  handleLinkClick = (e) => {
    sendEvent(e);
  }

  render () {
    return (
      <header className="header">
        <NavLink
          to="/"
          exact={true}
          className="header__logo"
          onClick={this.handleLinkClick}
          aria-label="Home"
          data-ga-category="Nav Links"
          data-ga-action="click"
          data-ga-label="Home"
        >
          <svg className="header__logo-svg" viewBox="0 0 106 49"><path d="M56.35 1.5c-1.7.7-4.6 3.15-6.4 5.4-4.15 5.15-9 6.75-15.8 5.1-10.6-2.6-10.8-2.6-9 .1 1.85 2.85 6.8 4.75 12.3 4.85l4 .05-5.95 6-5.95 6h-6.3C12.55 29 1 36.25 1 42.95c0 7.95 9.7 6.95 21.9-2.35 2.95-2.25 5.95-4.55 6.7-5.05 2.1-1.55 22.65 4.9 28.6 9 7.3 5 17.7 4.45 24-1.25 1.65-1.5 1.95-1.45 3.9.3 3.25 2.95 15 2.75 18.1-.35 3-3 1.2-5.2-2.7-3.4-6.3 2.85-14.5.35-14.5-4.4 0-3.85-2.7-3-7.85 2.55-5.85 6.3-9.4 7.45-15.05 4.95-5.4-2.45-5.25-2.85 2.65-6.95C73.95 32.3 85 22.45 85 19.75c0-1.75-4.15-5.05-7.8-6.2-5.2-1.6-21.1 9.45-24.7 17.2-1 2.05-1.9 3.9-2.05 4.1C50 35.35 36 30.7 36 30.05c0-.7 12.35-12.9 19.75-19.6 7.1-6.35 7.45-11.85.6-8.95zm21.5 16.8c2.8 3.4-9.05 13.9-19 16.75-4.25 1.2-3.65-.9 1.9-7.1 7.5-8.35 14.75-12.45 17.1-9.65zm-53.9 15.45c0 .9-7.05 6.25-12.2 9.25-6.25 3.65-6.5-.1-.35-5.7 4.5-4 12.7-6.35 12.55-3.55z" fill="currentColor"/></svg>
        </NavLink>

        <nav className="header__nav">
          <button
            className="header__icon u--mobile"
            onClick={this.handleNavToggle}
            ref={(el) => { this.firstElement = el; }}
            aria-expanded={this.state.showNav}
            aria-controls="nav"
            aria-label="Toggle Nav"
          >
            <span className="header__icon-line"></span>
            <span className="header__icon-line"></span>
            <span className="header__icon-line"></span>
            <span className="header__icon-line"></span>
          </button>

          <ul id="nav" className="header__links list--unstyled text--uppercase text--extra-bold">
            <li className="header__link">
              <NavLink
                to="/fonts"
                activeClassName="is-active"
                onClick={(e) => { this.handleLinkNavToggle(); this.handleLinkClick(e); }}
                title="Fonts"
                data-ga-category="Nav Links"
                data-ga-action="click"
                data-ga-label="Fonts"
              >
                Fonts
              </NavLink>
            </li>
            <li className="header__link">
              <a
                href="http://blog.laurenashpole.com"
                title="Blog"
                onClick={this.handleLinkClick}
                data-ga-category="Nav Links"
                data-ga-action="click"
                data-ga-label="Blog"
              >
                Blog
              </a>
            </li>
            <li className="header__link">
              <NavLink
                to="/contact"
                exact={true}
                activeClassName="is-active"
                onClick={(e) => { this.handleLinkNavToggle(); this.handleLinkClick(e); }}
                title="Contact"
                data-ga-category="Nav Links"
                data-ga-action="click"
                data-ga-label="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;