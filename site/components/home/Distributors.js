import Image from 'next/image';

import Container from '../../../shared/components/Container.js';
import { DIST_LINKS } from '../../constants/distLinks';
import styles from './Distributors.module.css';

const Distributors = () => {
  return (
    <div className={styles.container}>
      <Container>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.itemHeading}`}>
            <h3 className={`${styles.heading} label`}>
              Fonts also
              <br />
              available at
            </h3>
          </li>

          {DIST_LINKS.map((link, i) => {
            return (
              <li className={styles.item} key={i}>
                <a
                  className={styles.link}
                  href={link.url}
                  data-ga-click={true}
                  data-ga-category="home"
                  data-ga-text={link.alt.toLowerCase()}
                >
                  <div className={styles.img}>
                    <Image
                      src={link.imgSrc}
                      alt={link.alt}
                      width={link.imgWidth}
                      height={link.imgHeight}
                      data-pin-nopin="true"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Distributors;
