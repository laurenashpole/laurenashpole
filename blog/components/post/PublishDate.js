import styles from './PublishDate.module.css';

const PublishDate = ({ date }) => {
  return (
    <div className={styles.container}>
      {new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </div>
  );
};

export default PublishDate;
