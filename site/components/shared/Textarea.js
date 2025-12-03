import PropTypes from 'prop-types';

import styles from './Textarea.styles.js';

const Textarea = ({ label, hasError, textareaProps }) => {
  return (
    <div className={`textarea ${hasError ? 'textarea--error' : ''}`}>
      <label
        className="textarea__label"
        htmlFor={label.replace(/ /g, '')}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <textarea
        className="textarea__textarea"
        id={label.replace(/ /g, '')}
        {...textareaProps}
      />

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  hasError: PropTypes.bool,
  textareaProps: PropTypes.object,
};

export default Textarea;
