import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import InView from 'react-inview-monitor';
import NotFound from '../components/NotFound';
import Purchase from '../components/Purchase';
import Download from '../components/Download';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Preview from '../components/Preview';
import Glyphs from '../components/Glyphs';

const Font = ({ match, font, glyphs }) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');

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
    return <NotFound slug={match.params.slug} />;
  }

  return(
    <main className={`main main--bg-header ${stylesLoaded ? '' : 'css-loading'}`}>
      <Helmet>
        <title>{`${font.name} - Fonts - Lauren Ashpole`}</title>
      </Helmet>

      <div className="container container--x-large font">
        <div className="font__img">
          <img src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} />
        </div>

        <div className="well">
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

          <div className="well__row font__content">
            <ul className="font__sections-list list--unstyled text--medium text--uppercase text--extra-bold">
              {['details', 'gallery', 'preview', 'glyphs'].map((link) => {
                return(
                  <li key={link}><a className={`font__sections-link ${visibleSection === link ? 'font__sections-link--active' : ''}`} href={`#${link}`}>{link}</a></li>
                );
              })}
            </ul>

            <div className="font__sections">
              <InView onInView={() => setVisibleSection('details')} intoViewMargin="-50%" repeatOnInView={true}>
                <Details font={font} />
              </InView>

              <InView onInView={() => setVisibleSection('gallery')} intoViewMargin="-50%" repeatOnInView={true}>
                <Gallery font={font} />
              </InView>

              <InView onInView={() => setVisibleSection('preview')} intoViewMargin="-50%" repeatOnInView={true}>
                <Preview font={font} />
              </InView>

              <InView onInView={() => setVisibleSection('glyphs')} intoViewMargin="-50%" repeatOnInView={true}>
                <Glyphs font={font} glyphs={glyphs} />
              </InView>
            </div>
          </div>
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