import Link from 'next/link';

import styles from './Details.module.css';

const Details = ({ post }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.itemEm} ${styles.itemType}`}>
          <Link
            href={post.pathname}
            data-ga-category="blog details"
            data-ga-click="true"
          >
            {post.type}
          </Link>
        </li>

        {(post.tags || []).map((tag, i) => {
          return (
            <li key={i} className={styles.item}>
              <Link
                href={`/tagged/${tag.replace(/ /g, '-')}`}
                data-ga-category="blog details"
                data-ga-click="true"
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>

      {post.reblogged_from_name && post.reblogged_from_url && (
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href={post.reblogged_from_url}>
              Reblogged from {post.reblogged_from_name}
            </a>
          </li>
        </ul>
      )}

      <ul className={styles.list}>
        {post.note_count > 0 && (
          <li className={`${styles.item} ${styles.itemEm}`}>
            <Link
              href={post.pathname}
              data-ga-category="blog details"
              data-ga-click="true"
            >
              {post.note_count}Note{post.note_count !== 1 ? 's' : ''}
            </Link>
          </li>
        )}

        <li className={styles.item}>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}${post.pathname}#disqus_thread`}
            className="dsq-comment-count disqus-comment-count"
            data-disqus-url={`${process.env.NEXT_PUBLIC_BASE_URL}${post.pathname}`}
            data-ga-category="blog details"
            data-ga-click="true"
          >
            Comments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Details;
