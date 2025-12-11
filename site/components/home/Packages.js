import { FaGithub } from 'react-icons/fa6';
import { GrLink } from 'react-icons/gr';

import Container from '../../../shared/components/Container.js';
import { PACKAGES } from '../../constants/packages';
import VerticalHeading from '../shared/VerticalHeading.js';
import styles from './Packages.module.css';

const Packages = () => {
  return (
    <div className={styles.container}>
      <Container>
        <VerticalHeading heading="Want code?" />

        <ul className={styles.list}>
          {PACKAGES.map((link, i) => {
            return (
              <li key={i} className={styles.item}>
                <h4 className={styles.name}>{link.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: link.desc }} />

                <ul className={styles.icons}>
                  <li>
                    <a
                      href={link.urls.gh}
                      data-ga-click={true}
                      data-ga-category="home"
                      data-ga-text={`${link.name.toLowerCase()} github`}
                      aria-label={`${link.name} on Github`}
                    >
                      <FaGithub />
                    </a>
                  </li>

                  <li>
                    <a
                      href={link.urls.demo}
                      data-ga-click={true}
                      data-ga-category="home"
                      data-ga-text={`${link.name.toLowerCase()} npm`}
                      aria-label={`${link.name} Demo Site`}
                    >
                      <GrLink />
                    </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Packages;
