import styles from './loader.styles.js';

const Loader = () => {
  return (
    <div className="loader" aria-live="polite" aria-busy="true" role="status">
      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Loader;