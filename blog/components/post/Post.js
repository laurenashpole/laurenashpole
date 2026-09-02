import Link from 'next/link';

import Container from '../../../shared/components/Container.js';
import Affiliate from '../affiliate/Affiliate';
import AnswerBlock from './AnswerBlock';
import Comments from './Comments';
import Details from './Details';
import LinkBlock from './LinkBlock';
import MediaBlock from './MediaBlock';
import styles from './Post.module.css';
import PublishDate from './PublishDate';
import TextBlock from './TextBlock';

const Post = ({ post, isPermalink, affiliate }) => {
  return (
    <article
      className={`${styles.container} ${isPermalink ? styles.permalink : ''}`}
    >
      <Container>
        <div className={styles.content}>
          <div className={`${styles.details} ${styles.tablet}`}>
            <PublishDate date={post.date} />
            <Details post={post} />
          </div>

          <div className={styles.main}>
            <div className={styles.mobile}>
              <PublishDate date={post.date} />
            </div>

            <div className={styles.body}>
              {post.type === 'text' && (
                <TextBlock post={post} isPermalink={isPermalink} />
              )}
              {post.type === 'photo' && <MediaBlock post={post} />}
              {post.type === 'video' && <MediaBlock post={post} />}
              {post.type === 'link' && <LinkBlock post={post} />}
              {post.type === 'answer' && <AnswerBlock post={post} />}
            </div>

            <div className={styles.mobile}>
              <Details post={post} />
            </div>

            {!isPermalink && (
              <footer className={styles.footer} aria-label="Post footer">
                <Link
                  href={post.pathname}
                  data-ga-category="blog footer"
                  data-ga-click="true"
                >
                  Permalink
                </Link>
              </footer>
            )}
          </div>
        </div>
      </Container>

      {isPermalink && (
        <>
          <Affiliate affiliate={affiliate} isPermalink />
          <Comments id={post.bluesky_id} />
        </>
      )}
    </article>
  );
};

export default Post;
