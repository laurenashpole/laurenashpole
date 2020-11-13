import PropTypes from 'prop-types';
import styles from './checkbox.styles.js';

const Checkbox = ({ label, inputProps }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" {...inputProps} />
        {label}
      </label>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.object
};

export default Checkbox;
