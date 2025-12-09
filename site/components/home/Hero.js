import Head from 'next/head';
import Link from 'next/link';

import Container from '../../../shared/components/Container.js';
import AbstractDotGroup from '../../../shared/components/svgs/AbstractDotGroup';
import AbstractLineGroup from '../../../shared/components/svgs/AbstractLineGroup';
import AbstractSquiggle from '../../../shared/components/svgs/AbstractSquiggle';
// import styles from './Hero.styles.js';
import styles from './Hero.module.css'

const Hero = ({ font }) => {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: font.previews.css }} />
      </Head>

      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <span className={`${styles.shapes} ${styles.shapesLineGroup}`}>
              <AbstractLineGroup />
            </span>

            <span className={`${styles.shapes} ${styles.shapesSquiggle}`}>
              <AbstractSquiggle />
            </span>

            <span className={`${styles.shapes} ${styles.shapesDotGroup}`}>
              <AbstractDotGroup />
            </span>

            <Link
              href={`/fonts/${font.slug}`}
              className={styles.link}
              data-ga-click={true}
              data-ga-category="home"
              data-ga-text={`${font.name} hero`}
            >
              <div className={`${styles.badge} ${styles.badgeSmall} label`}>
                New
                <br />
                Font
              </div>

              <div
                className={`${styles.letters} font-${font.slug}`}
                aria-hidden="true"
              >
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>

              <div className={`${styles.badge} ${styles.badgeLarge} label`}>
                {font.name}
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
