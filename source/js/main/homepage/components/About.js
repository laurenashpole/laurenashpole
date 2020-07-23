import React from 'react';
import { sendEvent } from '../../../utilities/analytics';

const About = () => {
  return(
    <section className="well about u--center">
      <div className="well__row well__row--px-lg well__row--py-lg">
        <div className="about__upcoming">
          <p className="text--medium">Here&apos;s a sneak peek of my next font. Sign up at the bottom of the page to find out when it&apos;s done.</p>
          <img className="img--responsive" src="/images/next-font-stars.png" alt="A preview of my next font!" />
        </div>

        <div className="about__description">
          <h3 className="text--uppercase u--center">About me</h3>

          <p>I&apos;ve been designing fonts and dingbats in my spare time for years and you can find them all here. When I&apos;m not working on my side projects, I&apos;m a web developer (check out my <a href="https://www.linkedin.com/in/laurenashpole/" target="_blank" rel="noopener noreferrer">LinkedIn</a> if you really want to know more about that) and occasionally post <a href="http://blog.laurenashpole.com/tagged/themes" onClick={() => sendEvent('Homepage About', 'click', 'Themes')}>themes</a> and <a href="http://blog.laurenashpole.com/tagged/code" onClick={() => sendEvent('Homepage About', 'click', 'Code Snippets')}>code snippets</a> on my blog.</p>
        </div>
      </div>
    </section>
  );
};

export default About;