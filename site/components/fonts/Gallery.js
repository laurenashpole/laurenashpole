import Image from 'next/image';
import { useState } from 'react';

import Button from '../../../shared/components/Button';
import styles from './Gallery.module.css';

const Gallery = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!font.images || !(font.images.gallery || []).length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span className={styles.pin}>
          <a
            data-pin-do="buttonPin"
            data-pin-tall="true"
            data-pin-round="true"
            href={`https://www.pinterest.com/pin/create/button/?url=https://laurenashpole.com/fonts/${font.slug}&media=${activeIndex === 0 && font.images.pinterest ? `${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.pinterest}` : `${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.gallery[activeIndex]}`}&description=${font.name}%20font%20poster`}
          >
            <img
              src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png"
              alt="Pin it"
            />
          </a>
        </span>

        <Image
          key={`image${activeIndex}`}
          src={font.images.gallery[activeIndex].url}
          alt={
            font.images.gallery[activeIndex].alt || `${font.name} Poster Image`
          }
          width={1500}
          height={1000}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>

      <ul className={styles.thumbs}>
        {font.images.gallery.map((image, i) => {
          return (
            <li key={i} className={styles.thumb}>
              <Button
                style="unstyled"
                onClick={() => setActiveIndex(i)}
                attributes={{
                  type: 'button',
                  'data-ga-click': true,
                  'data-ga-category': 'font page',
                  'data-ga-text': `View poster image ${i + 1}`,
                }}
              >
                <Image
                  src={image.url}
                  alt={`View poster image ${i + 1}`}
                  width={360}
                  height={240}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
