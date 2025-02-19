import PropTypes from 'prop-types';
import { FONT_OPTIONS } from '../../../constants/fontOptions';
import Input from '../../../shared/components/Input';
import Checkbox from '../../../components/shared/Checkbox';
import styles from './Form.styles.js';

const FormDownloads = ({ font, suffix = '' }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">{suffix === '_vercel' ? 'Vercel ' : ''}Downloads</h5>
        <Input label={`Personal Font File ${font[`personal_font_file${suffix}`] ? `<span>(${font[`personal_font_file${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `personal_font_file${suffix}` }} />

        <div className="form__options">
          {FONT_OPTIONS.personal_file.map((option) => (
            <Checkbox key={`personal${option.key}`} label={option.label} attributes={{ name: `personal_file[${option.key}][is_included]`, defaultChecked: font.personal_file ? font.personal_file[option.key].is_included : false, value: true }} />
          ))}
        </div>

        <Input label={`Commercial Font File ${font[`commercial_font_file${suffix}`] ? `<span>(${font[`commercial_font_file${suffix}`]})</span>` : ''}`} attributes={{ type: 'file', name: `commercial_font_file${suffix}` }} />

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
