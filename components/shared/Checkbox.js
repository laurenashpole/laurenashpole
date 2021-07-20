import PropTypes from 'prop-types';
import styles from './checkbox.styles.js';

const Checkbox = ({ label, attributes }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" {...attributes} />
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
  attributes: PropTypes.object
};

export default Checkbox;
