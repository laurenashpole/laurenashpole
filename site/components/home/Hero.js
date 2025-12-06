import Head from 'next/head';
import Link from 'next/link';

import Container from '../../../shared/components/Container.js';
import AbstractDotGroup from '../../../shared/components/svgs/AbstractDotGroup';
import AbstractLineGroup from '../../../shared/components/svgs/AbstractLineGroup';
import AbstractSquiggle from '../../../shared/components/svgs/AbstractSquiggle';
import styles from './Hero.styles.js';

const Hero = ({ font }) => {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: font.previews.css }} />
      </Head>

      <div className="hero">
        <Container>
          <div className="hero__container">
            <span className="hero__shapes hero__shapes--line-group">
              <AbstractLineGroup />
            </span>

            <span className="hero__shapes hero__shapes--squiggle">
              <AbstractSquiggle />
            </span>

            <span className="hero__shapes hero__shapes--dot-group">
              <AbstractDotGroup />
            </span>

            <Link
              href={`/fonts/${font.slug}`}
              className="hero__link"
              data-ga-click={true}
              data-ga-category="home"
              data-ga-text={`${font.name} hero`}
            >
              <div className="label hero__badge hero__badge--small">
                New
                <br />
                Font
              </div>

              <div
                className={`hero__letters font-${font.slug}`}
                aria-hidden="true"
              >
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>

              <div className="label hero__badge hero__badge--large">
                {font.name}
              </div>
            </Link>
          </div>
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Hero;
