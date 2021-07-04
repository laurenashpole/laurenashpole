import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.js';

const Button = forwardRef(({ children, type, attributes }, ref) => {
  return (
    <button className={[styles.btn, styles[type]]} ref={ref} {...attributes}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  attributes: PropTypes.object
};

Button.displayName = 'Button';

export default Button;