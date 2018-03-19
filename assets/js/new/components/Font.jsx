import React, { Component } from 'react';
import Hero from './fonts/Hero';
import Details from './fonts/Details';
import Gallery from './fonts/Gallery';
import Preview from './fonts/Preview';
import Glyphs from './fonts/Glyphs';

class Font extends Component {
  constructor (props) {
    super(props);

    this.state = {
      font: this.props.fonts.find((font) => font.slug === this.props.match.params.slug)
    };
  }

  componentDidMount () {
    let head = document.querySelector('head');
    let body = document.querySelector('body');

    head.innerHTML += `<link rel="stylesheet" href="/css/fonts/${this.state.font.css_file}">`;
    this.main.classList.remove('css-loading');
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