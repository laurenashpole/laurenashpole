import PropTypes from 'prop-types';
import styles from './select.styles.js';

const Select = ({ children, label, hideLabel, selectProps }) => {
  return (
    <div className="select">
      <label className={`select__label ${hideLabel ? 'select__label--hidden' : ''}`} htmlFor={label.replace(/ /g, '')}>{label}</label>
      <select className="select__select" id={label.replace(/ /g, '')} {...selectProps}>
        {children}
      </select>
      <span className="select__caret" />

      <style jsx global>
        {styles}
      </style>
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