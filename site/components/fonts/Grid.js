import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import Container from '../../../shared/components/Container.js';
import { ga4Event } from '../../utils/ga4.js';
import styles from './Grid.styles.js';

const Grid = ({ fonts, gaCategory, showDetails }) => {
  useEffect(() => {
    ga4Event('view_item_list', fonts, `${gaCategory} List`);
  }, [fonts, gaCategory]);

  const handleClick = (font) => {
    ga4Event('select_item', [font], `${gaCategory} List`);
  };

  return (
    <>
      <div className="grid">
        <Container>
          <ul className="grid__list">
            {fonts.map((font, i) => {
              return (
                <li key={i} className="grid__item">
                  <Link
                    href={`/fonts/${font.slug}`}
                    className="grid__link"
                    data-ga-click={true}
                    data-ga-category={`${gaCategory.toLowerCase()} list`}
                    data-ga-text={`${font.name} details`}
                    onClick={handleClick}
                  >
                    <span className="grid__img">
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
                      <span className="grid__img">
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
                    <div className="label grid__details">
                      <h3 className="grid__name">{font.name}</h3>

                      <div className="grid__actions">
                        <button className="grid__try">Try</button>
                        <button className="grid__buy">Buy</button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Grid;
