import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './HeroImage.styles.js';

const HeroImage = ({ src, alt }) => {
  return (
    <div className="hero-img">
      <Image src={src} alt={alt} width={500} height={425} priority={true} />

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

HeroImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default HeroImage;