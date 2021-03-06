import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../shared/Button';
import styles from './gallery.styles.js';

const Gallery = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <section className="gallery">
      <h3>Gallery</h3>

      <div className="gallery__main">
        <span className="gallery__pin"><a data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/" /></span>
        <Image key={`image${activeIndex}`} src={`/uploads/images/${font.image_collection[activeIndex]}`} alt={`${font.name} Poster Image`} width={1500} height={1000} />
      </div>

      {font.image_collection_thumbnails.length > 1 &&
        <ul className="gallery__thumbs">
          {font.image_collection_thumbnails.map((image, i) => {
            return(
              <li key={i} className="gallery__thumb">
                <Button type="link" onClick={() => setActiveIndex(i)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'font page', 'data-ga-action': `View poster image ${i + 1}` }}>
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