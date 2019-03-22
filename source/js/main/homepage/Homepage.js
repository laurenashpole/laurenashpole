import React, { Component } from 'react';
import Hero from '../components/Hero';
import Cta from './components/Cta';
import About from './components/About';
import Distributors from './components/Distributors';
import { sendPageview } from '../../utilities/analytics';

class Homepage extends Component {
  componentDidMount () {
    // sendPageview();
  }

  render () {
    return(
      <main className="main main--bg-repeat homepage">
        <div className="container container--large homepage__hero">
          <div className="homepage__hero-img">
            <img src={`/images/fonts/${this.props.font.image_main_retina}`} />
          </div>

          <Cta font={this.props.font} />
        </div>

        <About />
        <Distributors />
      </main>
    );
  }
}

export default Homepage;