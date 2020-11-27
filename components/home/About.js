import Image from 'next/image';
import Well from '../../components/shared/Well';
import styles from './about.styles.js';

const About = () => {
  return(
    <>
      <Well size="large">
        <div className="about">
          <div className="about__desc">
            <h3>About me</h3>

            <p>I&apos;ve been designing fonts and dingbats in my spare time for years and you can find them all here. When I&apos;m not working on my side projects, I&apos;m a web developer (check out my <a href="https://www.linkedin.com/in/laurenashpole/" target="_blank" rel="noopener noreferrer">LinkedIn</a> if you really want to know more about that) and occasionally post <a href="http://blog.laurenashpole.com/tagged/themes" data-ga-click={true} data-ga-category="home" data-ga-action="themes">themes</a> and <a href="http://blog.laurenashpole.com/tagged/code" data-ga-click={true} data-ga-category="home" data-ga-action="code snippets">code snippets</a> on my blog.</p>
          </div>

          <div className="about__upcoming">
            <p>Here&apos;s a sneak peek of my next font. Sign up at the bottom of the page to find out when it&apos;s done.</p>
            <div className="about__img">
              <Image src="/images/next-font-stars.png" alt="A preview of my next font!" width={400} height={210} />
            </div>
          </div>
        </div>
      </Well>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default About;