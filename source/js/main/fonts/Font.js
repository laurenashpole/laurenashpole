import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
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
    this.injectStylesheet();
  }

  injectStylesheet = () => {
    if (this.state.font) {
      let element = document.createElement('link');

      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', `/css/fonts/${this.state.font.css_file}`);
      document.getElementsByTagName('head')[0].appendChild(element);
      this.main.classList.remove('css-loading');
    }
  }

  render () {
    return(
      <Fragment>
        {this.state.font ? (
          <main className="main css-loading" ref={(el) => { this.main = el; }}>
            <Helmet>
              <title>{`${this.state.font.name} - Fonts - Lauren Ashpole`}</title>
              <link rel="amphtml" href={`https://www.laurenashpole/amp/fonts/${this.state.font.slug}`} />
              <meta name="description" content={`Download the ${this.state.font.name} font free for personal use or buy a license for all your commercial use needs`} />
              <meta property="og:type" content="product" />
              <meta property="og:title" content={this.state.font.name} />
              <meta property="og:url" content={`https://www.laurenashpole.com/fonts/${this.state.font.slug}`} />
              <meta property="og:site_name" content="Lauren Ashpole" />
              <meta property="og:price:amount" content={this.state.font.price} />
              <meta property="og:price:currency" content="USD" />
              <meta property="og:availability" content="instock" />
              <meta property="og:image" content={`https://www.laurenashpole.com/images/fonts/${this.state.font.image_collection[0]}`}/>
            </Helmet>
            <section className="font__section">
              <Hero
                image={`/images/fonts/${this.state.font.image}`}
                name={this.state.font.name}
                cta={<Cta font={this.state.font} />}
              />
            </section>
            <Gallery font={this.state.font} />
            <Details font={this.state.font} />
            <Preview font={this.state.font} />
            <Glyphs font={this.state.font} />
          </main>
        ) : (
          <main className="main main--bg-fixed container container--medium">
            <div className="well well--extra-padding">
              <h2>Font not found.</h2>
              <p>Sorry, there's no font called {this.props.match.params.slug}. It might be a mistake so try checking in the full list of fonts <Link to="/fonts" title="Fonts">here</Link>.</p>
            </div>
          </main>
        )}
      </Fragment>
    );
  }
}

export default Font;