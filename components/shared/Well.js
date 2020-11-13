import { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './well.styles.js';

const Well = ({ children, size, stickyChild }) => {
  return (
    <section className={`well well--${size || 'medium'}`}>
      {Children.map(children, (child, i) => {
        return (
          <div key={i} className={`well__section ${stickyChild === i ? 'well__section--sticky' : ''}`}>{child}</div>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Well.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  stickyChild: PropTypes.number
};

export default Well;
