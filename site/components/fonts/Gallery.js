import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../../../shared/components/Button';
import styles from './Gallery.styles.js';

const Gallery = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!font.images || !(font.images.gallery || []).length) {
    return null;
  }

  return (
    <div className="gallery">
      <div className="gallery__main">
        <span className="gallery__pin">
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
          src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.gallery[activeIndex]}`}
          alt={`${font.name} Poster Image`}
          width={1500}
          height={1000}
        />
      </div>

      <ul className="gallery__thumbs">
        {font.images.gallery.map((image, i) => {
          return (
            <li key={i} className="gallery__thumb">
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
                  src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${image}`}
                  alt={`View poster image ${i + 1}`}
                  width={360}
                  height={240}
                />
              </Button>
            </li>
          );
        })}
      </ul>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Gallery.propTypes = {
  font: PropTypes.object,
};

export default Gallery;
