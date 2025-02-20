import PropTypes from 'prop-types';
import Input from '../../../shared/components/Input';
import styles from './Form.styles.js';

const FormImages = ({ font, suffix = '' }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">Legacy Images</h5>
        <Input label={`Image ${font[`image${suffix}`] ? `<span>(${font[`image${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `image${suffix}` }} />
        <Input label={`Horizontal Image ${font[`image_horizontal${suffix}`] ? `<span>(${font[`image_horizontal${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `image_horizontal${suffix}` }} />
        <Input label={`Mobile Horizontal Image ${font[`image_horizontal_mobile${suffix}`] ? `<span>(${font[`image_horizontal_mobile${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `image_horizontal_mobile${suffix}` }} />
        <Input label="Image Collection" attributes={{ type: 'file', name: `image_collection${suffix}`, multiple: true }} />

        {(font[`image_collection${suffix}`] || []).length > 0 &&
          <div className="form__images">
            {font[`image_collection${suffix}`].map((image) => (
              <img key={image} alt="" className="form__image" src={suffix === '_vercel' ? image : `/uploads/images/${image}`} />
            ))}
          </div>
        }

        <Input label={`Pinterest Image ${font[`image_pinterest${suffix}`] ? `<span>(${font[`image_pinterest${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `image_pinterest${suffix}` }} />
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormImages.propTypes = {
  font: PropTypes.object,
  suffix: PropTypes.string
};

export default FormImages;
