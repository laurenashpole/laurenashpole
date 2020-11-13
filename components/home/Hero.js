import PropTypes from 'prop-types';
import Link from 'next/link';
import HeroImage from '../shared/HeroImage';
import Button from '../shared/Button';
import styles from './hero.styles.js';

const Hero = ({ font }) => {
  return(
    <div className="hero">
      <div className="hero__font">
        <div className="hero__new">
          The<br />Latest
        </div>

        <HeroImage src={`/uploads/images/${font.image}`} alt={`A sample of my newest font ${font.name}!`} />
      </div>

      <div className="hero__cta">
        <Link href={`/fonts/${font.slug}`}>
          <Button type="primary" attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': 'home' }}>Try<br />{font.name}!</Button>
        </Link>
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};


Hero.propTypes = {
  font: PropTypes.object
};

export default Hero;