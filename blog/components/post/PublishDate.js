import PropTypes from 'prop-types';
import styles from './PublishDate.styles.js';

const PublishDate = ({ date }) => {
  return (
    <div className="date">
      {new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

PublishDate.propTypes = {
  date: PropTypes.string
};

export default PublishDate;
