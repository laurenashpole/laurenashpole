import PropTypes from 'prop-types';
import styles from './input.styles.js';

const Input = ({ label, hideLabel, hasError, inputProps }) => {
  return (
    <div className={`input ${hasError ? 'input--error' : ''}`}>
      <label className={`input__label ${hideLabel ? 'input__label--hidden' : ''}`} htmlFor={label.replace(/ /g, '')} dangerouslySetInnerHTML={{ __html: label }} />
      <input className="input__input" id={label.replace(/ /g, '')} {...inputProps} />

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  inputProps: PropTypes.object
};

export default Input;
