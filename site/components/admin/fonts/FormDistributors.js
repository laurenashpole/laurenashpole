import PropTypes from 'prop-types';

import Input from '../../../../shared/components/Input';
import { FONT_OPTIONS } from '../../../constants/fontOptions';
import styles from './Form.styles.js';

const FormDistributors = ({ font }) => {
  return (
    <>
      <section className="form__section">
        <h5 className="form__subheading">Distributors</h5>

        {FONT_OPTIONS.distributors.map((option) => (
          <Input
            key={option.key}
            label={`${option.label} URL`}
            attributes={{
              type: 'text',
              name: `distributors[${option.key}][url]`,
              defaultValue: font.distributors
                ? font.distributors[option.key].url
                : '',
            }}
          />
        ))}
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormDistributors.propTypes = {
  font: PropTypes.object,
};

export default FormDistributors;
