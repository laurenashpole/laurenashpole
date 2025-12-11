import Container from '../../../shared/components/Container.js';
import Grid from '../fonts/Grid.js';
import VerticalHeading from '../shared/VerticalHeading.js';
import styles from './Recent.module.css';

const Recent = ({ fonts }) => {
  return (
    <div className={styles.container}>
      <Container>
        <VerticalHeading heading="Recent" />
        <Grid fonts={fonts} gaCategory="Recent Fonts" />
      </Container>
    </div>
  );
};

export default Recent;
