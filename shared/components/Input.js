import PropTypes from 'prop-types';
import styles from '../styles/Input.module.scss';

const Input = ({ label, hideLabel, hasError, attributes }) => {
  return (
    <div className={`${styles.input} ${hasError ? styles.inputError : ''}`}>
      <label className={`${styles.label} ${hideLabel ? styles.labelHidden : ''}`} htmlFor={label.replace(/ /g, '')} dangerouslySetInnerHTML={{ __html: label }} />
      <input className={styles.input} id={label.replace(/ /g, '')} aria-invalid={hasError ? true : null} aria-describedby={hasError ? `${label.replace(/ /g, '')}Error` : null} {...attributes} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  attributes: PropTypes.object
};

export default Input;
