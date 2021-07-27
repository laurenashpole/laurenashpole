import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../styles/Tags.styles.js';

const Tags = ({ tags, path, source }) => {
  return (
    <ul className="tags">
      {tags.map((tag) => {
        return (
          <li key={tag._id || tag.slug}>
            <Link href={`${path || ''}/${tag.slug}`}>
              <a className="tags__tag" data-ga-click={!!source} data-ga-category={source}>{tag.name}</a>
            </Link>
          </li>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
  path: PropTypes.string,
  source: PropTypes.string
};

export default Tags;