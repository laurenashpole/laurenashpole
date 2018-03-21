import React, { Component } from 'react';
import Hero from '../../components/Hero';
import Cta from './components/Cta';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Preview from './components/Preview';
import Glyphs from './components/Glyphs';

class Font extends Component {
  constructor (props) {
    super(props);

    this.state = {
      font: this.props.fonts.find((font) => font.slug === this.props.match.params.slug)
    };
  }

  componentDidMount () {
    let element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', `/css/fonts/${this.state.font.css_file}`);
    document.getElementsByTagName('head')[0].appendChild(element);
    this.main.classList.remove('css-loading');
  }

  render () {
    return(
      <main className="main css-loading" ref={(el) => { this.main = el; }}>
        <section className="font__section">
          <Hero
            image_url={`/images/fonts/${this.state.font.image_main}`}
            image_url_retina={`/images/fonts/${this.state.font.image_main_retina}`}
            cta={<Cta font={this.state.font} />}
          />
        </section>
        <Gallery font={this.state.font} />
        <Details font={this.state.font} />
        <Preview font={this.state.font} />
        <Glyphs font={this.state.font} />
      </main>
    );
  }
};

export default Font;