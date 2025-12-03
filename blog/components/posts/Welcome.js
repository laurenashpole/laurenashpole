import Container from '../../shared/components/Container';
import Tags from '../../shared/components/Tags';
import { FEATURED_TAGS } from '../../constants/featuredTags';
import styles from './Welcome.styles.js';

const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <div className="welcome__container">
          <h1 className="welcome__heading">Welcome to the blog!</h1>
          <p className="welcome__text">It&apos;s basically a reverse chronological record of my bookmarks with the occasional release announcement. Not sure where to start? Here are some of my most active tags:</p>
          <Tags path={`${process.env.NEXT_PUBLIC_BASE_URL}/tagged`} source="blog header" tags={FEATURED_TAGS} />
        </div>
      </Container>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Welcome;
