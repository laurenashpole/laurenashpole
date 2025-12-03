import Image from 'next/image';
import Container from '../../shared/components/Container.js';
import styles from './About.styles.js';

const About = () => {
  return(
    <>
      <div className="about">
        <Container>
          <div className="about__content">
            <div className="about__desc">
              <p>
                I&apos;ve been designing fonts and dingbats in my spare time for years and you can find them all here. When I&apos;m not working on my side projects, I&apos;m a software engineer (check out my <a href="https://www.linkedin.com/in/laurenashpole/" target="_blank" rel="noopener noreferrer">LinkedIn</a> if you really want to know more about that) and occasionally post <a href="http://blog.laurenashpole.com/tagged/themes" data-ga-click={true} data-ga-category="home" data-ga-text="themes">themes</a> and <a href="http://blog.laurenashpole.com/tagged/code" data-ga-click={true} data-ga-category="home" data-ga-text="code snippets">code snippets</a> on my blog.
              </p>
            </div>

            <div className="about__upcoming">
              <p>Here&apos;s a sneak peek of my next font. Sign up for updates in the footer and I&apos;ll let you know when it&apos;s done.</p>
    
              <div className="about__img">
                <Image src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}misc/next-font-leaves.png`} alt="A preview of my next font!" width={400} height={210} />
              </div>
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

export default About;
