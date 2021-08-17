import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './HeroImage.styles.js';

const HeroImage = ({ src, alt, isAmp }) => {
  return (
    <div className="hero-img">
      {isAmp ? (
        <amp-img src={src} alt={alt} height="425" width="500" layout="responsive" />
      ) : (
        <Image src={src} alt={alt} width={500} height={425} priority={true} />
      )}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

HeroImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  isAmp: PropTypes.bool
};

export default HeroImage;