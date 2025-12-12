import styles from '../styles/Header.module.css';
import ActiveLink from './ActiveLink';
import Logo from './svgs/Logo.js';

const Header = ({ home, links, cart }) => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        {home.external ? (
          <a
            className={styles.logo}
            href={`https://${home.external.host}${home.path}`}
            data-ga-click="true"
            data-ga-category="nav"
            aria-label={home.label}
          >
            <Logo />
          </a>
        ) : (
          <ActiveLink
            href={home.path}
            className={styles.logo}
            data-ga-click="true"
            data-ga-category="nav"
            isExact={true}
            aria-label={home.label}
          >
            <Logo />
          </ActiveLink>
        )}

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {links.map((link, i) => {
              return (
                <li key={i} className={styles.item}>
                  {link.external ? (
                    <a
                      className={styles.link}
                      href={`https://${link.external.host}${link.path}`}
                      data-ga-click="true"
                      data-ga-category="nav"
                      aria-current={link.external.isActive ? 'page' : null}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <ActiveLink
                      href={link.path}
                      className={styles.link}
                      data-ga-click="true"
                      data-ga-category="nav"
                      isExact={link.isExact}
                    >
                      {link.label}
                    </ActiveLink>
                  )}
                </li>
              );
            })}
          </ul>

          {cart}
        </nav>
      </div>
    </header>
  );
};

export default Header;
