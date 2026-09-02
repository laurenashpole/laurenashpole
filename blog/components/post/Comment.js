import { isRecord, isThreadViewPost } from '../../utils/bluesky';
import styles from './Comment.module.css';

const Comment = ({ comment }) => {
  const author = comment.post.author;

  if (!isThreadViewPost(comment) || !isRecord(comment.post.record)) {
    return null;
  }

  return (
    <li>
      <article className={styles.article}>
        <header className={styles.header}>
          <a
            href={`https://bsky.app/profile/${author.did}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {author.avatar && (
              <img src={author.avatar} className={styles.avatar} alt="" />
            )}

            <span className={styles.name}>
              {author.displayName || author.handle} @{author.handle}
            </span>
          </a>
        </header>

        <p className={styles.text}>{comment.post.record.text}</p>

        <footer className={styles.footer}>
          <span className={styles.date}>
            {new Date(comment.post.indexedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>

          <a
            href={`https://bsky.app/profile/${author.did}/post/${comment.post.uri.split('/').pop()}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Reply
          </a>
        </footer>

        {comment.replies && comment.replies.length > 0 && (
          <ol className={styles.list}>
            {comment.replies.map((reply) => (
              <Comment key={reply.post.uri} comment={reply} />
            ))}
          </ol>
        )}
      </article>
    </li>
  );
};

export default Comment;
