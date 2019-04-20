import React from 'react';
import { sendEvent } from '../../../utilities/analytics';

const About = () => {
  return(
    <section className="container container--large about">
      <div className="well">
        <div className="about__upcoming">
          <p className="text--medium">Here's a sneak peek of my next font. Sign up at the bottom of the page to find out when it's done.</p>
          <img className="img--responsive" src="/images/next-font.png" alt="A preview of my next font!" />
        </div>

        <div className="about__description">
          <h3 className="text--uppercase u--center">About me</h3>

          <p>I've been designing fonts and dingbats in my spare time for years and you can find them all here. When I'm not working on my side projects, I'm a web developer (check out my <a href="https://www.linkedin.com/in/laurenashpole/" target="_blank">LinkedIn</a> if you really want to know more about that) and occasionally post <a href="http://blog.laurenashpole.com/tagged/themes" onClick={sendEvent} data-ga-category="Homepage About" data-ga-action="click" data-ga-label="Themes">themes</a> and <a href="http://blog.laurenashpole.com/tagged/code" onClick={sendEvent} data-ga-category="Homepage About" data-ga-action="click" data-ga-label="Code Snippets">code snippets</a> on my blog.</p>
        </div>
      </div>
    </section>
  );
};

export default About;