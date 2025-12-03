import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import PublishDate from './PublishDate';
import Details from './Details';
import TextBlock from './TextBlock';
import MediaBlock from './MediaBlock';
import LinkBlock from './LinkBlock';
import AnswerBlock from './AnswerBlock';
import Affiliate from '../affiliate/Affiliate';
import Comments from './Comments';
import styles from './Post.styles.js';
import Container from '../../shared/components/Container.js';

const Post = ({ post, isPermalink, affiliate }) => {
  const [isMounted, setIsMounted] = useState(false);

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)'
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <article className={`post ${isPermalink ? 'post--permalink' : ''}`}>
      <Container>
        <div className="post__container">
          <div className="post__details">
            {isMounted && isTablet &&
              <>
                <PublishDate date={post.date} />
                <Details post={post} />
              </>
            }
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

            {!isPermalink &&
              <footer className="post__footer" aria-label="Post footer">
                <Link href={post.pathname}>
                  <a data-ga-category="blog footer" data-ga-click="true">Permalink</a>
                </Link>
              </footer>
            }
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
  affiliate: PropTypes.object
};

export default Post;
