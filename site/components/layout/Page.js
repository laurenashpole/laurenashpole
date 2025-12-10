import Container from '../../../shared/components/Container.js';
import styles from './Page.module.css';

const Page = ({ children }) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.aside} />
        <div className={styles.main}>{children}</div>
      </div>
    </Container>
  );
};

export default Page;
