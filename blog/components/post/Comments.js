import { InView } from 'react-intersection-observer';
import styles from './Comments.styles.js';
import Container from '../../shared/components/Container.js';

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
    <>
      <div className="comments">
        <Container>
          <div className="comments__content">
            <div className="comments__aside" />

            <div className="comments__main">
              <InView threshold={1} triggerOnce={true} onChange={handleInView}>
                <h3 className="comments__heading">Comments</h3>
              </InView>

              <>
                <div id="disqus_thread" />

                <noscript>
                  Please enable JavaScript to view the <a href='//disqus.com/?ref_noscript'>comments powered by Disqus.</a>
                </noscript>
              </>
            </div>
          </div>
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Comments;