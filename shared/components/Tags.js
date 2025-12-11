import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from '../styles/Tags.module.css';

const Tags = ({ tags, path, source }) => {
  return (
    <ul className={styles.container}>
      {tags.map((tag) => {
        return (
          <li key={tag._id || tag.slug}>
            <Link
              href={`${path || ''}/${tag.slug}`}
              className={styles.tag}
              data-ga-click={!!source}
              data-ga-category={source}
            >
              {tag.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
  path: PropTypes.string,
  source: PropTypes.string,
};

export default Tags;
