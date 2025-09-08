import PropTypes from 'prop-types';
import styles from './Box.styles.js';

const Box = ({ children }) => {
  return (
    <div className="box">
      {children}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.any,
};

export default Box;