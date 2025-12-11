import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from '../styles/Button.module.css';

const Button = forwardRef(({ children, style, onClick, attributes }, ref) => {
  return (
    <button
      className={`${styles.button} ${style === 'unstyled' ? '' : `${styles.default} ${styles[style]}`}`}
      onClick={onClick}
      {...attributes}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.any,
  style: PropTypes.string,
  onClick: PropTypes.func,
  attributes: PropTypes.object,
};

Button.displayName = 'Button';

export default Button;
