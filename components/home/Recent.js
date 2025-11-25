import Container from '../../shared/components/Container.js';
import Grid from '../fonts/Grid.js';
import VerticalHeading from '../shared/VerticalHeading.js';
import styles from './Recent.styles.js';

const Recent = ({ fonts }) => {
  return(
    <>
      <div className="recent">
        <Container>
          <VerticalHeading heading="Recent" />
          <Grid fonts={fonts} gaCategory="Recent Fonts" />
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Recent;