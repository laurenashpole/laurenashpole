import styles from './VerticalHeading.module.css';

const VerticalHeading = ({ heading }) => {
  return (
    <h3 className={styles.heading}>
      <span className={`${styles.text} label`}>{heading}</span>
    </h3>
  );
};

export default VerticalHeading;
