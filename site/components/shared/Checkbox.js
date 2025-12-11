import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  label: PropTypes.string,
  attributes: PropTypes.object,
};

export default Checkbox;
