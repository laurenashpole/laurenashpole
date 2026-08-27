import styles from './Select.module.css';

const Select = ({ children, label, hideLabel, selectProps }) => {
  return (
    <div className={styles.container}>
      <label
        className={`${styles.label} ${hideLabel ? styles.labelHidden : ''}`}
        htmlFor={label.replace(/ /g, '')}
      >
        {label}
      </label>

      <select
        className={styles.select}
        id={label.replace(/ /g, '')}
        {...selectProps}
      >
        {children}
      </select>

      <span className={styles.caret} />
    </div>
  );
};

export default Select;
