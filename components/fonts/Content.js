import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import { eeEvent } from '../../utils/tracking';
import Well from '../../shared/components/Well';
import Button from '../../shared/components/Button';
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
  }, [font]);

  const handleClick = (section) => {
    let top = sectionRefs.current[section].offsetTop;
    top = section !== 'details' ? top - 24 : top - 52;
    window.scrollTo({ top: top, left: 0, behavior: 'smooth' });
  };

  const handleInView = (inView, section) => {
    inView && setInViewSection(section);
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
                    <Button style="link" onClick={() => handleClick(link)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'font page' }}>{link}</Button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="content__main">
            <InView onChange={(inView) => handleInView(inView, 'details')} threshold={0.5}>
              <div className={styles.scrollAnchor} id="details" ref={(el) => sectionRefs.current.details = el}  />
              <Details font={font} tags={tags} />
            </InView>

            <InView onChange={(inView) => handleInView(inView, 'gallery')} threshold={0.5}>
              <div className={styles.scrollAnchor} id="gallery" ref={(el) => sectionRefs.current.gallery = el} />
              <Gallery font={font} />
            </InView>

            <InView onChange={(inView) => handleInView(inView, 'preview')} threshold={0.5}>
              <div className={styles.scrollAnchor} id="preview" ref={(el) => sectionRefs.current.preview = el} />
              <Preview font={font} />
            </InView>

            <InView onChange={(inView) => handleInView(inView, 'glyphs')} threshold={0.5}>
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