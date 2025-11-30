import PropTypes from 'prop-types';
import styles from '../styles/Container.styles.js';

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
