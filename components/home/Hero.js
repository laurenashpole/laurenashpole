import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.styles.js';

const Hero = () => {
  return(
    <div className="hero">
      <Link href="/fonts/tuper-super">
        <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-text="Tuper Super hero">
          <div className="hero__img hero__img--top">
            <Image src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}misc/hero-tupersuper.svg`} alt="Hello!" width={484} height={155} priority={true} />
          </div>

          <div className="hero__img">
            <Image className="hero__img" src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}misc/hero-tupersuper-2.svg`} alt="Have a font" width={622} height={99} priority={true} />
          </div>

          <span className="hero__pointer">Like my newest <br />release Tuper Super.</span>
          <span className="hero__pointer">Give it a try for free!</span>
        </a>
      </Link>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

export default Hero;