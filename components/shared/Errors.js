import PropTypes from 'prop-types';
import styles from './Errors.styles.js';

const Errors = ({ errors }) => {
  if (!errors.length) {
    return '';
  }

  return (
    <ul className="errors">
      {errors.map((error, i) => <li key={i}>{error}</li>)}

      <style jsx global>
        {styles}
      </style>
    </ul>
  );
};

Errors.propTypes = {
  errors: PropTypes.array
};

export default Errors;
