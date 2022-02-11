import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.styles.js';

const Hero = () => {
  return(
    <div className="hero">
      <Link href="/fonts/quintet">
        <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-action="Quintet hero">
          <div className="hero__img hero__img--top">
            <Image src="/uploads/misc/hero-quintet-1.svg" alt="Welcome!" width={532} height={168} priority={true} />
          </div>

          <div className="hero__img">
            <Image className="hero__img" src="/uploads/misc/hero-quintet-2.svg" alt="Have a font" width={678} height={150} priority={true} />
          </div>

          <span className="hero__pointer">Like my newest <br />release Quintet.</span>
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