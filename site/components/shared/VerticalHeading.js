import styles from './VerticalHeading.styles.js';

const VerticalHeading = ({ heading }) => {
  return (
    <>
      <h3 className="vertical-heading">
        <span className="label vertical-heading__text">{heading}</span>
      </h3>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default VerticalHeading;
