import styles from '../styles/SrOnly.module.css';

const SrOnly = ({ children }) => {
  return <span className={styles.container}>{children}</span>;
};

export default SrOnly;
