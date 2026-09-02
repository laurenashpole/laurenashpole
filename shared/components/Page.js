import styles from '../styles/Page.module.css';
import Container from './Container.js';

const Page = ({ children, hasAside }) => {
  return (
    <Container>
      <div className={styles.container}>
        {hasAside && <div className={styles.aside} />}
        <div className={styles.main}>{children}</div>
      </div>
    </Container>
  );
};

export default Page;
