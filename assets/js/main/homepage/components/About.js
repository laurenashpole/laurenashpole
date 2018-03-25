import React, { Component } from 'react';
import { sendEvent } from '../../../utilities/analytics';

class About extends Component {
  handleClick = (e) => {
    sendEvent(e);
  }

  render () {
    return(
      <div className="container container--large homepage__container">
        <div className="column--narrow">
          <div className="well homepage__well">
            <div className="homepage__well-content">
              <p>Here's a sneak peek of my next font. Sign up at the bottom of the page to find out when it's done.</p>
              <img className="img--responsive" src="/images/next-font.png" alt="New Font!" />
            </div>
            <svg className="homepage__bg" viewBox="0 0 542.8 403.5">
              <path fill="currentColor" stroke="none" d="M359.7,401.3c29.9-4.9,9.6-62.1,36.3-79.4c27.9-18.1,68.4-0.1,98.7-13.6c51.9-23.2,68.4-87.2,13.7-111 c-45.2-19.6-81.3-26.4-120.1-60.5c-23.4-20.5-43.4-57.9-69.1-73.3c-35.5-21.3-56,8.4-91.4,2.1c-34-6.1-47.1-49.6-80.8-60.4 c-87.3-28-30.3,78.8-69.7,100.7C55,118.2,27.8,78.1,7,101.3c-17.2,19.2,4,72.4,13.8,89.6c40.1,70.4,105.7,57.5,164.7,91.8 C251.7,321.1,263,417.1,359.7,401.3z"/>
            </svg>
          </div>
        </div>
        <div className="column--static homepage__about">
          <h3 className="text--uppercase u--center">About me</h3>

          <div>I've been designing fonts and dingbats in my spare time for years and you can find them all here. When I'm not working on my side projects, I'm a web developer (check out my <a href="https://www.linkedin.com/in/laurenashpole/" target="_blank">LinkedIn</a> if you really want to know more about that) and occasionally post <a href="http://blog.laurenashpole.com/tagged/themes" onClick={this.handleClick} data-ga-category="Homepage About" data-ga-action="click" data-ga-label="Themes">themes</a> and <a href="http://blog.laurenashpole.com/tagged/code" onClick={this.handleClick} data-ga-category="Homepage About" data-ga-action="click" data-ga-label="Code Snippets">code snippets</a> on my blog.</div>
        </div>
      </div>
    );
  }
}

export default About;