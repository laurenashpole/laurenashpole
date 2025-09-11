import PropTypes from 'prop-types';
import Input from '../../../shared/components/Input';
import styles from './Form.styles.js';

const FormImages = ({ font }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">Images</h5>
        <Input label={`Main ${(font.images || {}).main ? `<span>(${font.images.main})</span>` : ''}`} attributes={{ type: 'file', name: 'main' }} />
        <Input label={`Grid ${(font.images || {}).grid ? `<span>(${font.images.grid})</span>` : ''}`} attributes={{ type: 'file', name: 'grid' }} />
        <Input label={`List ${(font.images || {}).list ? `<span>(${font.images.list})</span>` : ''}`} attributes={{ type: 'file', name: 'list' }} />
        <Input label={`Mobile List ${(font.images || {}).list_mobile ? `<span>(${font.images.list_mobile})</span>` : ''}`} attributes={{ type: 'file', name: 'list_mobile' }} />
        <Input label="Gallery" attributes={{ type: 'file', name: 'gallery', multiple: true }} />

        {((font.images || {}).gallery || []).length > 0 &&
          <div className="form__images">
            {font.images.gallery.map((image) => (
              <img key={image} alt="" className="form__image" src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${image}`} />
            ))}
          </div>
        }

        <Input label={`Pinterest Image ${(font.images || {}).pinterest ? `<span>(${font.images.pinterest})</span>` : ''}`} attributes={{ type: 'file', name: 'pinterest' }} />
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormImages.propTypes = {
  font: PropTypes.object
};

export default FormImages;
