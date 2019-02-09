import React, { Component } from 'react';

const Hero = (props) => {
  return(
    <div className="container container--large">
      <div className="column--static bg-dots">
        <svg className="bg-abstract--img" viewBox="0 0 542.8 403.5">
          <path fill="currentColor" stroke="none" d="M359.7,401.3c29.9-4.9,9.6-62.1,36.3-79.4c27.9-18.1,68.4-0.1,98.7-13.6c51.9-23.2,68.4-87.2,13.7-111 c-45.2-19.6-81.3-26.4-120.1-60.5c-23.4-20.5-43.4-57.9-69.1-73.3c-35.5-21.3-56,8.4-91.4,2.1c-34-6.1-47.1-49.6-80.8-60.4 c-87.3-28-30.3,78.8-69.7,100.7C55,118.2,27.8,78.1,7,101.3c-17.2,19.2,4,72.4,13.8,89.6c40.1,70.4,105.7,57.5,164.7,91.8 C251.7,321.1,263,417.1,359.7,401.3z"/>
        </svg>
        <svg className="bg-abstract--img" viewBox="0 0 552 419">
          <path fill="currentColor" stroke="none" d="M183.6,414.2c-32.8-5.4-20.7-42.9-36.6-62c-19.5-23.3-63.6-23.1-91.4-27.4c-54.9-8.4-80.7-22.7-20.2-47.8 c72-29.9,138.8-54.5,199.4-106.3c33.7-28.7,61.3-62.4,89.3-96.6c16.8-20.6,43-63.5,70.6-71c83.2-22.5,45.2,107.2,81.3,136 c17.5,14,51,2.1,67,18.9c18.3,19.3,3,61.1-5.3,83.3C487.5,375.9,316,435.9,183.6,414.2z"/>
        </svg>
        <span className="img--hero img--default">
          <figure className="img--bg" style={{backgroundImage: `url(${props.image_url})`}}></figure>
        </span>
        <span className="img--hero img--retina">
          <figure className="img--bg" style={{backgroundImage: `url(${props.image_url_retina})`}}></figure>
        </span>
      </div>

      {props.cta}
    </div>
  );
};

export default Hero;