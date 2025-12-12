import { Fragment } from 'react';

import Container from '../../../shared/components/Container.js';
import AbstractLineRule from '../../../shared/components/svgs/AbstractLineRule.js';
import Affiliate from '../affiliate/Affiliate';
import Post from '../post/Post';
import Pagination from './Pagination';
import styles from './Posts.module.css';

const Posts = ({ posts, pagination, paginationPath, heading, affiliate }) => {
  return (
    <>
      <div>
        {heading && (
          <div className={styles.header}>
            <Container>
              <div className={styles.heading}>
                <h1 dangerouslySetInnerHTML={{ __html: heading }} />
                <AbstractLineRule />
              </div>
            </Container>
          </div>
        )}

        {posts.map((post, i) => (
          <Fragment key={post._id}>
            <Post post={post} />
            {i === 4 && <Affiliate affiliate={affiliate} />}
          </Fragment>
        ))}
      </div>

      {pagination && (
        <Pagination pagination={pagination} paginationPath={paginationPath} />
      )}
    </>
  );
};

export default Posts;
