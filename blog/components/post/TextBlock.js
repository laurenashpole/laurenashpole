import 'prismjs/themes/prism.css';

import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './TextBlock.module.css';

const TextBlock = ({ post }) => {
  return (
    <div className={styles.text}>
      <h2>{post.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: post.preview || post.html }} />

      {post.preview && (
        <p className={styles.more}>
          <Link
            href={post.pathname}
            data-ga-category="blog post"
            data-ga-click="true"
          >
            Continue Reading
          </Link>
        </p>
      )}
    </div>
  );
};

TextBlock.propTypes = {
  post: PropTypes.object,
};

export default TextBlock;
