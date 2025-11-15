import Grid from '../fonts/Grid.js';
import styles from './Recent.styles.js';

const Recent = ({ fonts }) => {
  return(
    <>
      <div className="recent">
        <Grid fonts={fonts} heading="Recent releases" gaCategory="Recent Fonts" />
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Recent;