import Head from 'next/head';
import Link from 'next/link';
import Container from '../../shared/components/Container.js';
import Box from '../layout/Box.js';
import styles from './Hero.styles.js';

const Hero = ({ font }) => {
  return(
    <Box>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: font.previews_css }} />
      </Head>

      <Container>
        <div className="hero">
          <Link href={`/fonts/${font.slug}`}>
            <a className="hero__link" data-ga-click={true} data-ga-category="home" data-ga-text={`${font.name} hero`}>
              <div className="label hero__badge hero__badge--small">
                New
              </div>

              <div className={`hero__letters font-${font.slug}`} aria-hidden="true">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>

              <div className="label hero__badge hero__badge--large">
                {font.name}
              </div>
            </a>
          </Link>
        </div>
      </Container>

      <style jsx global>
        {styles}
      </style>
    </Box>
  );
};

export default Hero;