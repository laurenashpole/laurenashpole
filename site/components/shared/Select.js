import PropTypes from 'prop-types';

import styles from './Select.module.css';

const Select = ({ children, label, hideLabel, selectProps }) => {
  return (
    <div className={styles.container}>
      <label
        className={`${styles.label} ${hideLabel ? styles.labelHidden : ''}`}
        htmlFor={label.replace(/ /g, '')}
      >
        {label}
      </label>

      <select
        className={styles.select}
        id={label.replace(/ /g, '')}
        {...selectProps}
      >
        {children}
      </select>

      <span className={styles.caret} />
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  selectProps: PropTypes.object,
};

export default Select;
