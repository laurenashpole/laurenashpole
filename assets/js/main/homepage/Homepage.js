import React, { Component } from 'react';
import Hero from '../../components/Hero';
import Cta from './components/Cta';
import About from './components/About';
import Distributors from './components/Distributors';
import { sendPageview } from '../../utilities/analytics';

class Homepage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      font: this.props.fonts.find((font) => font.slug === 'roundabout')
    };
  }

  componentDidMount () {
    sendPageview();
  }

  render () {
    return(
      <main className="main">
        <section className="font__section">
          <Hero
            image_url={`/images/fonts/${this.state.font.image_main}`}
            image_url_retina={`/images/fonts/${this.state.font.image_main_retina}`}
            cta={<Cta font={this.state.font} />}
          />
        </section>

        <section className="font__section">
          <About />
        </section>

        <section className="font__section">
          <Distributors />
        </section>
      </main>
    );
  }
}

export default Homepage;