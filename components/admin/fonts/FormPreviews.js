import PropTypes from 'prop-types';
import Input from '../../../shared/components/Input';
import Textarea from '../../../components/shared/Textarea';
import styles from './Form.styles.js';

const FormPreviews = ({ font, suffix = '' }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">{suffix === '_vercel' ? 'Vercel ' : ''}Previews</h5>
        <Input label={`Preview Files ${(font[`preview_files${suffix}`] || []).length ? `<span>(${font[`preview_files${suffix}`].join(', ')})</span>` : ''}`} attributes={{ type: 'file', name: `preview_files${suffix}`, multiple: true }} />
        <Input label="Alternate Style Classes" attributes={{ type: 'text', name: 'alternate_style', defaultValue: font.alternate_style }} />
        <Textarea label="Preview CSS" textareaProps={{ rows: '5', name: 'preview_css', placeholder: 'Preview CSS', defaultValue: font.preview_css }} />
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormPreviews.propTypes = {
  font: PropTypes.object,
  suffix: PropTypes.string
};

export default FormPreviews;
