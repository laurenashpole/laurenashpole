import React, { Component } from 'react';

const Hero = (props) => {
  return(
    <div className="container container--large">
      <div className="column--static">
{/*        <svg className="bg-abstract--img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.8 381.5"><path d="M452.9 294.8c-26 17.8-62.1-2.7-86.6 10.7-27.9 15.2-23.3 76-39.3 76-80.8 0-75.1-77.1-141.3-115.5-59-34.3-102.8-39-131.7-57.9-25.4-16.6-51.8-33.3-54-82.2-.6-12.3 7.7-31.1 26.1-31.1 17.8 0 36.7 11 52.3 11 10 0 13.3-7.1 12.2-21-1.2-15-16.8-42.2-17.9-60C71.7 8.3 85-4.5 123.3 1.5c38.5 6 87.2 54.5 115.1 53.3 27.7-1.1 12.2-37.8 43.3-37.8 32.2 0 127 103.4 168.9 190 19.4 40 30 68.9 2.3 87.8z" fill="currentColor"/></svg>
        <svg className="bg-abstract--img" viewBox="0 0 552 419">
          <path fill="currentColor" stroke="none" d="M183.6,414.2c-32.8-5.4-20.7-42.9-36.6-62c-19.5-23.3-63.6-23.1-91.4-27.4c-54.9-8.4-80.7-22.7-20.2-47.8 c72-29.9,138.8-54.5,199.4-106.3c33.7-28.7,61.3-62.4,89.3-96.6c16.8-20.6,43-63.5,70.6-71c83.2-22.5,45.2,107.2,81.3,136 c17.5,14,51,2.1,67,18.9c18.3,19.3,3,61.1-5.3,83.3C487.5,375.9,316,435.9,183.6,414.2z"/>
        </svg>*/}
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