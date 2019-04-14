import React, { Component } from 'react';
import Hero from '../components/Hero';
import Cta from './components/Cta';
import About from './components/About';
import Distributors from './components/Distributors';

const Homepage = (props) => {
  return(
    <main className="main">
      <section className="hero--bg-repeat">
        <div className="container container--large hero__container">
          <div className="hero__img">
            <img src={`/images/fonts/${props.font.image_main_retina}`} />
          </div>

          <Cta font={props.font} />
        </div>
      </section>

      <About />
      <Distributors />
    </main>
  );
};

Homepage.defaultProps = {
  font: {}
};

export default Homepage;