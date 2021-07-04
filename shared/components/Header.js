import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import ActiveLink from './Activelink';
import styles from '../styles/Header.module.scss';

const Header = ({ links, enableAnalytics }) => {
 const { ref, inView } = useInView();

  return (
    <>
      <span ref={ref} />
      <header className={styles.container}>
        <div className={`${styles.content} ${inView ? '' : styles.contentBg}`}>
          <ActiveLink href="/" isExact={true}>
            <a className={styles.logo} data-ga-click={enableAnalytics} data-ga-category="nav">
              <span>Fonts by Lauren Ashpole</span>
            </a>
          </ActiveLink>

          <nav>
            <ul className={styles.list}>
              {links.map((link, i) => {
                const anchor = <a href={link.url} className={styles.link} data-ga-click={enableAnalytics} data-ga-category="nav">{link.label}</a>;

                return (
                  <li key={i} className={styles.item}>
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
    </>
  );
};

Header.propTypes = {
  links: PropTypes.array,
  enableAnalytics: PropTypes.bool
};

export default Header;