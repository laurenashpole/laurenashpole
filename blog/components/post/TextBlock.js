import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './TextBlock.styles.js';
import 'prismjs/themes/prism.css';

const TextBlock = ({ post }) => {
  return (
    <div className="text">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.preview || post.html }} />

      {post.preview &&
        <p className="text__more">
          <Link href={post.pathname}>
            <a data-ga-category="blog post" data-ga-click="true">Continue Reading</a>
          </Link>
        </p>
      }

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

TextBlock.propTypes = {
  post: PropTypes.object
};

export default TextBlock;
