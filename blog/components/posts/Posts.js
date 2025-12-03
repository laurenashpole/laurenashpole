import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import Pagination from './Pagination';
import Affiliate from '../affiliate/Affiliate';
import styles from './Posts.styles.js';
import Container from '../../shared/components/Container.js';

const Posts = ({ posts, pagination, paginationPath, heading, affiliate }) => {
  return (
    <>
      <div>
        {heading && (
          <div className="posts__heading">
            <Container>
              <h1 className="posts__heading-text" dangerouslySetInnerHTML={{ __html: heading}} />
            </Container>
          </div>
        )}

        {posts.map((post, i) => (
          <Fragment key={post._id}>
            <Post post={post} />
            {i === 4 && <Affiliate affiliate={affiliate} /> }
          </Fragment>
        ))}
      </div>

      {pagination &&
        <Pagination pagination={pagination} paginationPath={paginationPath} />
      }

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
  paginationPath: PropTypes.string,
  affiliate: PropTypes.object
};

export default Posts;
