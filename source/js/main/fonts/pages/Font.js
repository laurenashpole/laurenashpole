import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Purchase from '../components/Purchase';
import Download from '../components/Download';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Preview from '../components/Preview';
import Glyphs from '../components/Glyphs';

const Font = ({ match, font, glyphs }) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    injectStylesheet();
  }, []);

  const injectStylesheet = () => {
    if (font) {
      let element = document.createElement('link');
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', `/uploads/css/${font.css_file}`);
      document.getElementsByTagName('head')[0].appendChild(element);
      setStylesLoaded(true);
    }
  };

  if (!font) {
    return(
      <main className="main container">
        <Helmet>
          <title>Font Not Found - Fonts - Lauren Ashpole</title>
        </Helmet>

        <div className="well">
          <div className="well__row well__row--px-lg well__row--py-lg">
            <h2>Font not found.</h2>
            <p>Sorry, there&apos;s no font called {match.params.slug}. It might be a mistake so try checking in the full list of fonts <Link to="/fonts" title="Fonts">here</Link>.</p>
          </div>
        </div>
      </main>
    );
  }

  return(
    <main className={`main main--bg-header ${stylesLoaded ? '' : 'css-loading'}`}>
      <Helmet>
        <title>{`${font.name} - Fonts - Lauren Ashpole`}</title>
      </Helmet>

      <div className="container container--large font">
        <div className="font__img">
          <img src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} />
        </div>

        <div className="well font__well">
          <div className="well__row well__row--px-lg font__name">
            <h2 className="well__heading text--uppercase u--center-mobile">{font.name}</h2>
          </div>

          <div className="font__ctas">
            {font.personal_font_file &&
              <Download font={font} />
            }

            {font.commercial_font_file &&
              <Purchase font={font} />
            }
          </div>

          <Details font={font} />
          <Gallery font={font} />
          <Preview font={font} />
          <Glyphs font={font} glyphs={glyphs} />
        </div>
      </div>
    </main>
  );
};

Font.propTypes = {
  match: PropTypes.object,
  font: PropTypes.object,
  glyphs: PropTypes.object
};

export default Font;