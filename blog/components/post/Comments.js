import { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Container from '../../../shared/components/Container';
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = ({ id }) => {
  const [comments, setComments] = useState({});
  const [error, setError] = useState('');
  const href = `https://bsky.app/profile/did:${process.env.NEXT_PUBLIC_BLUESKY_DID}/post/${id}`;
  const hasComments = !!((comments.thread || []).replies || []).length;

  const handleInView = async (inView) => {
    if (!inView) {
      return;
    }

    const uri = `at://did:${process.env.NEXT_PUBLIC_BLUESKY_DID}/app.bsky.feed.post/${id}`;

    try {
      const response = await fetch(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`,
        {
          cache: 'no-store',
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch post thread');
      }

      setComments(await response.json());
    } catch (error) {
      setError(error);
    }
  };

  console.log(comments.thread);
  console.log(error);

  if (!id) {
    return null;
  }

  return (
    <InView threshold={1} triggerOnce={true} onChange={handleInView}>
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <div className={styles.aside} />

            <div className={styles.main}>
              <h2 className={styles.heading}>Comments</h2>

              <p className={styles.text}>
                {hasComments ? 'Join' : 'No comments yet! Start'} the
                conversation on{' '}
                <a href={href} target="_blank" rel="noreferrer noopener">
                  Bluesky
                </a>
                .
              </p>

              {hasComments && (
                <ol className={styles.list}>
                  {comments.thread.replies.map((reply) => (
                    <Comment key={reply.post.uri} comment={reply} />
                  ))}
                </ol>
              )}
            </div>
          </div>
        </Container>
      </div>
    </InView>
  );
};

export default Comments;
