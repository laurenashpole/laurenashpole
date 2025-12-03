import Container from '../../../shared/components/Container.js';
import styles from './Page.styles.js';

const Page = ({ children }) => {
  return (
    <>
      <Container>
        <div className="page">
          <div className="page__aside" />

          <div className="page__main">{children}</div>
        </div>
      </Container>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Page;
