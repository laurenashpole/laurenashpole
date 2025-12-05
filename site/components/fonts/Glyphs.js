import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import Button from '../../../shared/components/Button';
import { FONT_GLYPHS } from '../../constants/fontGlyphs';
import styles from './Glyphs.styles.js';

const TABS = ['Basic', 'Additional'];

const Glyphs = ({ font }) => {
  const basicRef = useRef(null);
  const additionalRef = useRef(null);
  const [activeGlyphs, setActiveGlyphs] = useState('Basic');

  const handleKeydown = (e) => {
    if (e.keyCode === 39) {
      if (document.activeElement === basicRef.current) {
        additionalRef.current.focus();
      } else {
        basicRef.current.focus();
      }
    }

    if (e.keyCode === 37) {
      if (document.activeElement === additionalRef.current) {
        basicRef.current.focus();
      } else {
        additionalRef.current.focus();
      }
    }
  };

  return (
    <section className="glyphs">
      <h3>Glyphs</h3>

      {(((font.downloads || {}).commercial || {}).features || []).includes(
        'Additional Characters (Latin-1)',
      ) && (
        <ul
          className="glyphs__tabs"
          role="tablist"
          aria-label="Glyph sets"
          onKeyDown={handleKeydown}
        >
          {TABS.map((tab) => {
            return (
              <li key={`${tab}Tab`} className="glyphs__link">
                <Button
                  style="link"
                  onClick={() => setActiveGlyphs(tab)}
                  ref={tab === 'Basic' ? basicRef : additionalRef}
                  attributes={{
                    type: 'button',
                    role: 'tab',
                    id: `${tab}Tab`,
                    tabIndex: activeGlyphs === tab ? 0 : -1,
                    'aria-selected': activeGlyphs === tab,
                    'aria-controls': `${tab}Panel`,
                    'data-ga-click': true,
                    'data-ga-category': 'font page',
                  }}
                >
                  {tab} Characters
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      {TABS.map((tab) => {
        return (
          <div key={`${tab}Panel`} className={`font-${font.slug}`}>
            {activeGlyphs === tab && (
              <div
                role="tabpanel"
                id={`${tab}Panel`}
                tabIndex="0"
                aria-labelledby={`${tab}Tab`}
              >
                <ul className="glyphs__grid">
                  {FONT_GLYPHS[tab.toLowerCase()].map((char, i) => {
                    return (
                      <li
                        key={i}
                        className={`glyphs__char ${typeof char === 'object' ? 'is-' + char.type : 'is-additional'}`}
                      >
                        <span className="glyphs__key">
                          {typeof char === 'object' ? char.glyph : char}
                        </span>
                        {typeof char === 'object' ? char.glyph : char}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Glyphs.propTypes = {
  font: PropTypes.object,
};

export default Glyphs;
