import Link from 'next/link';

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

export default Tags;
