import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import InView from 'react-inview-monitor';
import { eeEvent } from '../../utils/tracking';
import Well from '../shared/Well';
import Button from '../shared/Button';
import Buttons from './Buttons';
import Details from './Details';
import Gallery from './Gallery';
import Preview from './Preview';
import Glyphs from './Glyphs';
import styles from './content.styles.js';

const Content = ({ font, tags }) => {
  const sectionRefs = useRef({});
  const [inViewSection, setInViewSection] = useState('');

  useEffect(() => {
    eeEvent(font, null, null, 'detail');
  }, []);

  const handleClick = (section) => {
    let top = sectionRefs.current[section].offsetTop;
    top = section !== 'details' ? top - 24 : top - 52;
    window.scrollTo({ top: top, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Well size="large" stickyChild={1}>
        <h1 className="content__heading">{font.name}</h1>
        <Buttons font={font} />

        <div className="content__container">
          <aside className="content__aside">
            <ul>
              {['details', 'gallery', 'preview', 'glyphs'].map((link) => {
                return(
                  <li key={link} className={`content__item ${inViewSection === link ? 'content__item--active' : ''}`}>
                    <Button type="link" onClick={() => handleClick(link)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'font page' }}>{link}</Button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="content__main">
            <InView onInView={() => setInViewSection('details')} intoViewMargin="-50%" repeatOnInView={true}>
              <div className={styles.scrollAnchor} id="details" ref={(el) => sectionRefs.current.details = el}  />
              <Details font={font} tags={tags} />
            </InView>

            <InView onInView={() => setInViewSection('gallery')} intoViewMargin="-50%" repeatOnInView={true}>
              <div className={styles.scrollAnchor} id="gallery" ref={(el) => sectionRefs.current.gallery = el} />
              <Gallery font={font} />
            </InView>

            <InView onInView={() => setInViewSection('preview')} intoViewMargin="-50%" repeatOnInView={true}>
              <div className={styles.scrollAnchor} id="preview" ref={(el) => sectionRefs.current.preview = el} />
              <Preview font={font} />
            </InView>

            <InView onInView={() => setInViewSection('glyphs')} intoViewMargin="-50%" repeatOnInView={true}>
              <div className={styles.scrollAnchor} id="glyphs" ref={(el) => sectionRefs.current.glyphs = el} />
              <Glyphs font={font} />
            </InView>
          </div>
        </div>
      </Well>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

Content.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array
};

export default Content;