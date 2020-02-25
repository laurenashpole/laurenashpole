import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.pinterestBuild) {
      window.pinterestBuild();
    }
  }, []);

  return(
    <section className="font__section font__gallery">
      <div className="font__section-scroll" id="gallery"></div>
      <h3 className="text--uppercase u--center-mobile">Gallery</h3>

      <div className="font__gallery-main">
        <span className="font__gallery-pin"><a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonPin" data-pin-media={`/uploads/images/${font.image_collection[activeIndex]}`}></a></span>
        <img src={`/uploads/images/${font.image_collection[activeIndex]}`} alt={font.name} />
      </div>

      {font.image_collection_thumbnails.length > 1 &&
        <div className="font__gallery-thumbnails">
          {font.image_collection_thumbnails.map((image, i) => {
            return(
              <div className="font__gallery-thumbnail" key={image}>
                <img src={`/uploads/images/${image}`} alt={`${font.name} Thumbnail`} onClick={() => setActiveIndex(i)} />
              </div>
            );
          })}
        </div>
      }
    </section>
  );
};

Gallery.propTypes = {
  font: PropTypes.object
};

export default Gallery;