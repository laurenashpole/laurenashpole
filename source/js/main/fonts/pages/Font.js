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
        <main className="main container">
          <div className="well well--extra-padding">
            <h2>Font not found.</h2>
            <p>Sorry, there&apos;s no font called {this.props.match.params.slug}. It might be a mistake so try checking in the full list of fonts <Link to="/fonts" title="Fonts">here</Link>.</p>
          </div>
        </main>
      );
    }

    const {
      name,
      image,
      commercial_font_file,
      personal_font_file
    } = this.props.font;

    return(
      <main className="main main--bg-offset css-loading" ref={(el) => { this.main = el; }}>
        <Helmet>
          <title>{`${name} - Fonts - Lauren Ashpole`}</title>
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