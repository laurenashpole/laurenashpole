import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './button.styles.js';

const Button = forwardRef(({ children, type, onClick, attributes }, ref) => {
  return (
    <button className={`btn btn--${type}`} onClick={onClick} {...attributes} ref={ref}>
      {children}

      <style jsx global>
        {styles}
      </style>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func,
  attributes: PropTypes.object
};

Button.displayName = 'Button';

export default Button;