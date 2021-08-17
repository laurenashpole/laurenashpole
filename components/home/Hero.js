import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.styles.js';

const Hero = () => {
  return(
    <div className="hero">
      <Link href="/fonts/space-time">
        <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-action="Space Time hero">
          <div className="hero__img hero__img--top">
            <Image src="/uploads/misc/hero-spacetime-1.svg" alt="Hello" width={640} height={163} priority={true} />
          </div>

          <div className="hero__img">
            <Image className="hero__img" src="/uploads/misc/hero-spacetime-2.svg" alt="Have a font" width={760} height={100} priority={true} />
          </div>

          <span className="hero__pointer">Like my newest starry <br />release Space Time.</span>
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