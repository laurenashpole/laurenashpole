import PropTypes from 'prop-types';
import Button from '../../shared/Button';
import styles from '../../fonts/gallery.styles.js';

const Gallery = ({ font }) => {
  return (
    <section className="gallery">
      <h3>Gallery</h3>

      <div className="gallery__main">
        <amp-carousel id="carousel-with-preview" width="768" height={font.image_collection.length === 1 ? '341' : '512'} layout="responsive" type="slides">
          {font.image_collection.map((image, i) => {
            return (
              <div key={i}>
                <span className="gallery__pin">
                  <amp-pinterest height="32" width="32" data-round="true" data-tall="true" data-do="buttonPin" data-url={`${process.env.NEXT_PUBLIC_BASE_URL}fonts/${font.slug}`} data-media={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${image}`}  data-description={`${font.name} Poster Image`} />
                </span>
                <amp-img src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${image}`} width="768" height={font.image_collection.length === 1 ? '341' : '512'} layout="responsive" alt={`${font.name} Poster Image`} />
              </div>
            );
          })}
        </amp-carousel>
      </div>

      {font.image_collection_thumbnails.length > 1 &&
        <ul className="gallery__thumbs">
          {font.image_collection_thumbnails.map((image, i) => {
            return (
              <li key={i} className="gallery__thumb">
                <Button type="link" attributes={{ type: 'button', on: `tap:carousel-with-preview.goToSlide(index=${i})` }}>
                  <amp-img src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${image}`} width="200" height="133" layout="responsive" alt={`View poster image ${i + 1}`} />
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