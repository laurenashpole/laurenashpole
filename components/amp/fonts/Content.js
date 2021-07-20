import PropTypes from 'prop-types';
import Well from '../../../shared/components/Well';
import Buttons from './Buttons';
import Details from '../../fonts/Details';
import Gallery from './Gallery';
import Preview from './Preview';
import Glyphs from './Glyphs';
import styles from '../../fonts/content.styles.js';

const Content = ({ font }) => {
  return (
    <>
      <Well size="large" stickyChild={1}>
        <h1 className="content__heading">{font.name}</h1>
        <Buttons font={font} />

        <div className="content__container">
          <div className="content__main">
            <Details font={font} />
            <Gallery font={font} />
            <Preview font={font} />
            <Glyphs font={font} />
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
  font: PropTypes.object
};

export default Content;