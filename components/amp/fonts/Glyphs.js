import PropTypes from 'prop-types';
import { FONT_GLYPHS } from '../../../constants/fontGlyphs';
import Button from '../../../shared/components/Button';
import styles from '../../fonts/Glyphs.styles.js';

const TABS = ['Basic', 'Additional'];

const Glyphs = ({ font }) => {
  return (
    <section className="glyphs">
      <h3>Glyphs</h3>

      {font.commercial_file.additional_chars.is_included &&
        <amp-selector class="glyphs__tabs tabs-with-selector" role="tablist" on="select:panels.toggle(index=event.targetOption, value=true)" keyboard-select-mode="focus">
          {TABS.map((tab, i) => {
            return(
              <div key={`${tab}Tab`} className="glyphs__link">
                <Button style="link" attributes={{ type: 'button', role: 'tab', id: `${tab}Tab`, 'aria-controls': `${tab}Panel`, option: i, selected: tab === 'Basic' }}>{tab} Characters</Button>
              </div>
            );
          })}
        </amp-selector>
      }

      <amp-selector id="panels" className="tabpanels">
        {TABS.map((tab, i) => {
          return(
            <div key={`${tab}Panel`} className={`font-${font.slug}`} id={`${tab}Panel`} role="tabpanel" aria-labelledby={`${tab}Tab`} option={i} selected={tab === 'Basic'}>
              <ul className="glyphs__grid">
                {FONT_GLYPHS[tab.toLowerCase()].map((char, i) => {
                  return(
                    <li key={i} className={`glyphs__char ${typeof char === 'object' ? 'is-' + char.type : 'is-additional'}`}>
                      <span className="glyphs__key">{typeof char === 'object' ? char.glyph : char}</span>
                      {typeof char === 'object' ? char.glyph : char}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </amp-selector>

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Glyphs.propTypes = {
  font: PropTypes.object
};

export default Glyphs;