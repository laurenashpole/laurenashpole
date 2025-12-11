import PropTypes from 'prop-types';

import styles from './Errors.module.css';

const Errors = ({ errors }) => {
  if (!errors.length) {
    return '';
  }

  return (
    <ul className={styles.container}>
      {errors.map((error, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: error }} />
      ))}
    </ul>
  );
};

Errors.propTypes = {
  errors: PropTypes.array,
};

export default Errors;
