import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.styles.js';

const Hero = () => {
  return(
    <div className="hero">
      <Link href="/fonts/la-jefa">
        <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-text="La Jefa hero">
          <div className="hero__img hero__img--top">
            <Image src="/uploads/misc/hero-lajefa.svg" alt="Hello!" width={494} height={128} priority={true} />
          </div>

          <div className="hero__img">
            <Image className="hero__img" src="/uploads/misc/hero-lajefa-2.svg" alt="Have a font" width={630} height={57} priority={true} />
          </div>

          <span className="hero__pointer">Like my newest <br />release La Jefa.</span>
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