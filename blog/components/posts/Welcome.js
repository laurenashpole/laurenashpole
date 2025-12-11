import Container from '../../../shared/components/Container';
import Tags from '../../../shared/components/Tags';
import { FEATURED_TAGS } from '../../constants/featuredTags';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.heading}>Welcome to the blog!</h1>

          <p className={styles.desc}>
            It&apos;s basically a reverse chronological record of my bookmarks
            with the occasional release announcement. Not sure where to start?
            Here are some of my most active tags:
          </p>

          <div className={styles.tags}>
            <Tags
              path={`${process.env.NEXT_PUBLIC_BASE_URL}/tagged`}
              source="blog header"
              tags={FEATURED_TAGS}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
