import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../../shared/components/Button';
import styles from './Gallery.styles.js';

const Gallery = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <section className="gallery">
      <h3>Gallery</h3>

      <div className="gallery__main">
        <span className="gallery__pin">
          <a data-pin-do="buttonPin" data-pin-tall="true" data-pin-round="true" href={`https://www.pinterest.com/pin/create/button/?url=https://laurenashpole.com/fonts/${font.slug}&media=https://laurenashpole.com${activeIndex === 0 && font.image_pinterest ? `/uploads/images/${font.image_pinterest}` : `/uploads/images/${font.image_collection[activeIndex]}`}&description=Next%20stop%3A%20Pinterest`}>
            <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" alt="Pin it" />
          </a>
        </span>
        <Image key={`image${activeIndex}`} src={`/uploads/images/${font.image_collection[activeIndex]}`} alt={`${font.name} Poster Image`} width={1500} height={1000} />
      </div>

      {font.image_collection_thumbnails.length > 1 &&
        <ul className="gallery__thumbs">
          {font.image_collection_thumbnails.map((image, i) => {
            return(
              <li key={i} className="gallery__thumb">
                <Button style="link" onClick={() => setActiveIndex(i)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'font page', 'data-ga-text': `View poster image ${i + 1}` }}>
                  <Image src={`/uploads/images/${image}`} alt={`View poster image ${i + 1}`} width={360} height={240} />
                </Button>
              </li>
            );
          })}
        </ul>
      }

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Gallery.propTypes = {
  font: PropTypes.object
};

export default Gallery;