import PropTypes from 'prop-types';

import styles from '../styles/SrOnly.module.css';

const SrOnly = ({ children }) => {
  return <span className={styles.container}>{children}</span>;
};

SrOnly.propTypes = {
  children: PropTypes.any,
};

export default SrOnly;
