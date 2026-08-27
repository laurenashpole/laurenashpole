import styles from './Textarea.module.css';

const Textarea = ({ label, hasError, textareaProps }) => {
  return (
    <div className={`${styles.container} ${hasError ? styles.error : ''}`}>
      <label
        className={styles.label}
        htmlFor={label.replace(/ /g, '')}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <textarea
        className={styles.textarea}
        id={label.replace(/ /g, '')}
        {...textareaProps}
      />
    </div>
  );
};

export default Textarea;
