import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Container from '../../../shared/components/Container';
import AbstractDotGroup from '../../../shared/components/svgs/AbstractDotGroup';
import AbstractSquiggleThin from '../../../shared/components/svgs/AbstractSquiggleThin';
import { ga4Event } from '../../utils/ga4';
import Buttons from './Buttons';
import styles from './Content.styles';
import Details from './Details';
import Gallery from './Gallery';
import Glyphs from './Glyphs';
import Preview from './Preview';

const Content = ({ font }) => {
  useEffect(() => {
    ga4Event('view_item', [font]);
  }, [font]);

  return (
    <>
      <div className="content">
        <Container>
          <div className="content__container">
            <div
              className={`content__letters font-${font.slug}`}
              aria-hidden="true"
            >
              <span>A</span>
              <span>B</span>
              <span>C</span>

              <span className="content__shapes content__shapes--squiggle">
                <AbstractSquiggleThin />
              </span>

              <span className="content__shapes content__shapes--dot-group">
                <AbstractDotGroup />
              </span>
            </div>

            <div className="content__main">
              <section>
                <h1 className="content__heading">
                  {font.name}

                  {font.sale_price && (
                    <div className="label content__heading-sale">On Sale!</div>
                  )}
                </h1>

                <Gallery font={font} />
                <Buttons font={font} />
              </section>

              <Details font={font} />
              <Preview font={font} />
              <Glyphs font={font} />
            </div>
          </div>
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

Content.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array,
};

export default Content;
