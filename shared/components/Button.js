import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.styles.js';

const Button = forwardRef(({ children, style, onClick, attributes }, ref) => {
  return (
    <button className={`btn btn--${style}`} onClick={onClick} {...attributes} ref={ref}>
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
  onClick: PropTypes.func,
  attributes: PropTypes.object
};

Button.displayName = 'Button';

export default Button;