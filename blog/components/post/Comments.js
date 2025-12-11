import { InView } from 'react-intersection-observer';

import Container from '../../../shared/components/Container.js';
import styles from './Comments.module.css';

const Comments = () => {
  const handleInView = (inView) => {
    if (inView) {
      const script = document.createElement('script');
      script.src = '//laurenashpole.disqus.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  };

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.content}>
          <div className={styles.aside} />

          <div className={styles.main}>
            <InView threshold={1} triggerOnce={true} onChange={handleInView}>
              <h2>Comments</h2>
            </InView>

            <>
              <div id="disqus_thread" />

              <noscript>
                Please enable JavaScript to view the{' '}
                <a href="//disqus.com/?ref_noscript">
                  comments powered by Disqus.
                </a>
              </noscript>
            </>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
