import PropTypes from 'prop-types';
import { FaHeadphones } from 'react-icons/fa6';
import { GrLink } from 'react-icons/gr';

import styles from './LinkBlock.module.css';

const LinkBlock = ({ post }) => {
  const podcast = (post.tags || []).includes('what i listen to at work');

  return (
    <div>
      <h2>
        <a className={styles.link} href={post.url}>
          <span className={styles.icon}>
            {podcast ? <FaHeadphones /> : <GrLink />}
          </span>

          {post.title}
        </a>
      </h2>

      {post.excerpt && <blockquote>{post.excerpt}...</blockquote>}

      {post.description && (
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      )}
    </div>
  );
};

LinkBlock.propTypes = {
  post: PropTypes.object,
};

export default LinkBlock;
