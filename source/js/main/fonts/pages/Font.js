import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Purchase from '../components/Purchase';
import Download from '../components/Download';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Preview from '../components/Preview';
import Glyphs from '../components/Glyphs';

class Font extends Component {
  componentDidMount () {
    this.injectStylesheet();
  }

  injectStylesheet = () => {
    if (this.props.font) {
      let element = document.createElement('link');

      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', `/uploads/css/${this.props.font.css_file}`);
      document.getElementsByTagName('head')[0].appendChild(element);
      this.main.classList.remove('css-loading');
    }
  }

  render () {
    if (!this.props.font) {
      return(
        <main className="main main--bg-fixed container container--medium">
          <div className="well well--extra-padding">
            <h2>Font not found.</h2>
            <p>Sorry, there&apos;s no font called {this.props.match.params.slug}. It might be a mistake so try checking in the full list of fonts <Link to="/fonts" title="Fonts">here</Link>.</p>
          </div>
        </main>
      );
    }

    const {
      name,
      slug,
      price,
      image_collection,
      image,
      commercial_font_file,
      personal_font_file
    } = this.props.font;

    return(
      <main className="main main--bg-offset css-loading" ref={(el) => { this.main = el; }}>
        <Helmet>
          <title>{`${name} - Fonts - Lauren Ashpole`}</title>
          <link rel="amphtml" href={`https://www.laurenashpole.com/amp/fonts/${slug}`} />
          <meta name="description" content={`Download the ${name} font free for personal use or buy a license for all your commercial use needs`} />
          <meta property="og:type" content="product" />
          <meta property="og:title" content={name} />
          <meta property="og:url" content={`https://www.laurenashpole.com/fonts/${slug}`} />
          <meta property="og:site_name" content="Lauren Ashpole" />
          <meta property="og:price:amount" content={price} />
          <meta property="og:price:currency" content="USD" />
          <meta property="og:availability" content="instock" />
          <meta property="og:image" content={`https://www.laurenashpole.com/uploads/images/${image_collection[0]}`} />
        </Helmet>

        <div className="container container--x-large font">
          <div className="font__img">
            <img src={`/uploads/images/${image}`} alt={`${name} Sample`} />
          </div>

          <div className="font__ctas">
            {commercial_font_file &&
              <Purchase font={this.props.font} />
            }

            {personal_font_file &&
              <Download font={this.props.font} />
            }
          </div>

          <div className="font__content">
            <div className="well font__well">
              <Details font={this.props.font} />
              <Gallery font={this.props.font} />
              <Preview font={this.props.font} />
              <Glyphs font={this.props.font} glyphs={this.props.glyphs} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Font.propTypes = {
  match: PropTypes.object,
  font: PropTypes.object,
  glyphs: PropTypes.object
};

export default Font;