import styles from './Checkbox.module.css';

const Checkbox = ({ label, attributes }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" {...attributes} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
