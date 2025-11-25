import PropTypes from 'prop-types';
import styles from '../styles/SrOnly.styles.js';

const SrOnly = ({ children }) => {
  return (
    <span className="sr-only">
      {children}

      <style jsx global>
        {styles}
      </style>
    </span>
  );
};

SrOnly.propTypes = {
  children: PropTypes.any,
};

export default SrOnly;
