import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import Container from '../../../shared/components/Container.js';
import { ga4Event } from '../../utils/ga4.js';
import styles from './Grid.module.css';

const Grid = ({ fonts, gaCategory, showDetails }) => {
  useEffect(() => {
    ga4Event('view_item_list', fonts, `${gaCategory} List`);
  }, [fonts, gaCategory]);

  const handleClick = (font) => {
    ga4Event('select_item', [font], `${gaCategory} List`);
  };

  return (
    <div className={styles.container}>
      <Container>
        <ul className={styles.list}>
          {fonts.map((font, i) => {
            return (
              <li key={i} className={styles.item}>
                <Link
                  href={`/fonts/${font.slug}`}
                  className={styles.link}
                  data-ga-click={true}
                  data-ga-category={`${gaCategory.toLowerCase()} list`}
                  data-ga-text={`${font.name} details`}
                  onClick={handleClick}
                >
                  <span className={styles.img}>
                    <Image
                      src={font.images.gallery[0].url}
                      alt={font.name}
                      width={640}
                      height={427}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </span>

                  {font.images.gallery[1] && (
                    <span className={styles.img}>
                      <Image
                        src={font.images.gallery[1].url}
                        alt=""
                        width={640}
                        height={427}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </span>
                  )}
                </Link>

                {showDetails && (
                  <div className={`${styles.details} label`}>
                    <h3 className={styles.name}>{font.name}</h3>

                    <div className={styles.actions}>
                      <button className={styles.try}>Try</button>
                      <button className={styles.buy}>Buy</button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Grid;
