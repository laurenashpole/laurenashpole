import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div
      className={styles.container}
      aria-live="polite"
      aria-busy="true"
      role="status"
    />
  );
};

export default Loader;
