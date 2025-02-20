import PropTypes from 'prop-types';
import { FONT_OPTIONS } from '../../../constants/fontOptions';
import Input from '../../../shared/components/Input';
import Checkbox from '../../../components/shared/Checkbox';
import styles from './Form.styles.js';

const FormDownloads = ({ font }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">Downloads</h5>
        <Input label={`Personal Font File ${(font.font_files || {}).personal ? `<span>(${font.font_files.personal})</span>` : ''}`} attributes={{ type: 'file', name: 'personal' }} />
        <Input label={`Legacy Personal Font File ${font['personal_font_file'] ? `<span>(${font['personal_font_file']})</span>` : ''}`} attributes={{ type: 'file', name: 'personal_font_file' }} />

        <div className="form__options">
          {FONT_OPTIONS.personal_file.map((option) => (
            <Checkbox key={`personal${option.key}`} label={option.label} attributes={{ name: `personal_file[${option.key}][is_included]`, defaultChecked: font.personal_file ? font.personal_file[option.key].is_included : false, value: true }} />
          ))}
        </div>

        <Input label={`Commercial Font File ${(font.font_files || {}).commercial ? `<span>(${font.font_files.commercial})</span>` : ''}`} attributes={{ type: 'file', name: 'commercial' }} />
        <Input label={`Legacy Commercial Font File ${font['commercial_font_file'] ? `<span>(${font['commercial_font_file']})</span>` : ''}`} attributes={{ type: 'file', name: 'commercial_font_file' }} />

        <div className="form__options">
          {FONT_OPTIONS.commercial_file.map((option) => (
            <Checkbox key={`commercial${option.key}`} label={option.label} attributes={{ name: `commercial_file[${option.key}][is_included]`, defaultChecked: font.commercial_file ? font.commercial_file[option.key].is_included : false, value: true }} />
          ))}
        </div>
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormDownloads.propTypes = {
  font: PropTypes.object,
  suffix: PropTypes.string
};

export default FormDownloads;
