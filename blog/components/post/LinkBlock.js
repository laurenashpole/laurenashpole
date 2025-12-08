import PropTypes from 'prop-types';
import { FaHeadphones } from 'react-icons/fa6';
import { GrLink } from 'react-icons/gr';

import styles from './LinkBlock.styles.js';

const LinkBlock = ({ post }) => {
  const podcast = (post.tags || []).includes('what i listen to at work');

  return (
    <div className="link">
      <h2>
        <a
          className={`link__link ${podcast ? 'link__link--podcast' : ''}`}
          href={post.url}
        >
          <span className="link__link-icon">
            {podcast ? <FaHeadphones /> : <GrLink />}
          </span>

          {post.title}
        </a>
      </h2>

      {post.excerpt && <blockquote>{post.excerpt}...</blockquote>}
      {post.description && (
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      )}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

LinkBlock.propTypes = {
  post: PropTypes.object,
};

export default LinkBlock;
