import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Container from '../../../shared/components/Container';
import AbstractDotGroup from '../../../shared/components/svgs/AbstractDotGroup';
import AbstractSquiggleThin from '../../../shared/components/svgs/AbstractSquiggleThin';
import { ga4Event } from '../../utils/ga4';
import Buttons from './Buttons';
import Details from './Details';
import Gallery from './Gallery';
import Glyphs from './Glyphs';
import Preview from './Preview';
import styles from './Content.module.css';

const Content = ({ font }) => {
  useEffect(() => {
    ga4Event('view_item', [font]);
  }, [font]);

  return (
    <Container>
      <div className={styles.content}>
        <aside
          className={`${styles.aside} font-${font.slug}`}
          aria-hidden="true"
        >
          <span>A</span>
          <span>B</span>
          <span>C</span>

          <span className={`${styles.shapes} ${styles.shapesSquiggle}`}>
            <AbstractSquiggleThin />
          </span>

          <span className={`${styles.shapes} ${styles.shapesDotGroup}`}>
            <AbstractDotGroup />
          </span>
        </aside>

        <div className={styles.main}>
          <section>
            <div className={styles.heading}>
              <h1>{font.name}</h1>

              {font.sale_price && (
                <div className={`${styles.sale} label`}>On Sale!</div>
              )}
            </div>

            <Gallery font={font} />
            <Buttons font={font} />
          </section>

          <Details font={font} />
          <Preview font={font} />
          <Glyphs font={font} />
        </div>
      </div>
    </Container>
  );
};

Content.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array,
};

export default Content;
