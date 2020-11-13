import PropTypes from 'prop-types';
import styles from './errors.styles.js';

const Errors = ({ errors }) => {
  if (!errors.length) {
    return '';
  }

  return (
    <ul className="errors">
      {errors.map((error, i) => {
        return <li key={i}>{error}</li>;
      })}

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
