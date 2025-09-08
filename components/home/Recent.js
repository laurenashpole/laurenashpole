import Image from 'next/image';
import Link from 'next/link';
import Container from '../../shared/components/Container.js';
import styles from './Recent.styles.js';

const Recent = ({ fonts }) => {
  return(
    <>
      <div className="recent">
        <Container>
          <h3 className="label recent__heading">Recent releases</h3>

          <ul className="recent__list">
            {fonts.map((font, i) => {
              return (
                <li key={i} className="recent__item">
                  <Link href={`/fonts/${font.slug}`}>
                    <a className="recent__link" data-ga-click={true} data-ga-category="recent font list" data-ga-text={`${font.name} details`}>
                      <Image src={`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.images.gallery[0]}`} alt={font.name} width={640} height={427} />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Recent;