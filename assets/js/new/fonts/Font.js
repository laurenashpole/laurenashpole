import React, { Component } from 'react';
import Hero from './components/Hero';
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
  }

  render () {
    return(
      <main className="main css-loading" ref={(el) => { this.main = el; }}>
        <Hero font={this.state.font} />
        <Gallery font={this.state.font} />
        <Details font={this.state.font} />
        <Preview font={this.state.font} />
        <Glyphs font={this.state.font} />
      </main>
    );
  }
};

export default Font;