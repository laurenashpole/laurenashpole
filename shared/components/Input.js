import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from '../styles/Input.module.css';

const Input = forwardRef(({ label, hideLabel, hasError, attributes }, ref) => {
  return (
    <div className={`${styles.container} ${hasError ? styles.error : ''}`}>
      <label
        className={`${styles.label} ${hideLabel ? styles.labelHidden : ''}`}
        htmlFor={label.replace(/ /g, '')}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <input
        className={styles.input}
        id={label.replace(/ /g, '')}
        aria-invalid={hasError ? true : null}
        aria-describedby={hasError ? `${label.replace(/ /g, '')}Error` : null}
        {...attributes}
        ref={ref}
      />
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  attributes: PropTypes.object,
};

Input.displayName = 'Input';

export default Input;
