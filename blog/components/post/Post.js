import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Container from '../../../shared/components/Container.js';
import Affiliate from '../affiliate/Affiliate';
import AnswerBlock from './AnswerBlock';
import Comments from './Comments';
import Details from './Details';
import LinkBlock from './LinkBlock';
import MediaBlock from './MediaBlock';
import styles from './Post.styles.js';
import PublishDate from './PublishDate';
import TextBlock from './TextBlock';

const Post = ({ post, isPermalink, affiliate }) => {
  const [isMounted, setIsMounted] = useState(false);

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <article className={`post ${isPermalink ? 'post--permalink' : ''}`}>
      <Container>
        <div className="post__container">
          <div className="post__details">
            {isMounted && isTablet && (
              <>
                <PublishDate date={post.date} />
                <Details post={post} />
              </>
            )}
          </div>

          <div className="post__content">
            {isMounted && !isTablet && <PublishDate date={post.date} />}

            <div className="post__body">
              {post.type === 'text' && <TextBlock post={post} />}
              {post.type === 'photo' && <MediaBlock post={post} />}
              {post.type === 'video' && <MediaBlock post={post} />}
              {post.type === 'link' && <LinkBlock post={post} />}
              {post.type === 'answer' && <AnswerBlock post={post} />}
            </div>

            {isMounted && !isTablet && <Details post={post} />}

            {!isPermalink && (
              <footer className="post__footer" aria-label="Post footer">
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
          <Comments />
        </>
      )}
      <style jsx global>
        {styles}
      </style>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  isPermalink: PropTypes.bool,
  affiliate: PropTypes.object,
};

export default Post;
