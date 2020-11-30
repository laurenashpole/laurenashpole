import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../shared/Button';
import styles from './hero.styles.js';

const Hero = ({ font }) => {
  return(
    <div className="hero">
      <Link href="/fonts/sacremende">
        <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-action="sacremende hero">
          <div className="hero__img hero__img--top">
            <Image src="/images/hero-sacremende-1.svg" alt="Hello" width={640} height={184} />
          </div>

          <div className="hero__img">
            <Image className="hero__img" src="/images/hero-sacremende-2.svg" alt="Have a font" width={750} height={110} />
          </div>

          <span className="hero__pointer">This one for example.<br />It's called Sacremende.</span>
          <span className="hero__pointer">And it's brand new!</span>
        </a>
      </Link>

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