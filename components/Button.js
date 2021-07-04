import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.styles.js';

const Button = forwardRef(({ children, style, attributes }, ref) => {
  return (
    <button className={`btn btn--${style}`} ref={ref} {...attributes}>
      {children}

      <style jsx global>
        {styles}
      </style>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.any,
  style: PropTypes.string,
  attributes: PropTypes.object
};

Button.displayName = 'Button';

export default Button;