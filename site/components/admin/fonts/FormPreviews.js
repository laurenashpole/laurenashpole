import PropTypes from 'prop-types';
import Input from '../../../shared/components/Input';
import Textarea from '../../../components/shared/Textarea';
import styles from './Form.styles.js';

const FormPreviews = ({ font }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">Previews</h5>
        <Input label={`Preview Files ${((font.previews || {}).font_files || []).length ? `<span>(${font.previews.font_files.join(', ')})</span>` : ''}`} attributes={{ type: 'file', name: 'font_files', multiple: true }} />
        <Textarea label="Preview CSS" textareaProps={{ rows: '5', name: 'previews_css', placeholder: 'Preview CSS', defaultValue: font.previews_css }} />
        <Input label="Alternate Style Classes" attributes={{ type: 'text', name: 'alternate_style', defaultValue: font.alternate_style }} />
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormPreviews.propTypes = {
  font: PropTypes.object
};

export default FormPreviews;
