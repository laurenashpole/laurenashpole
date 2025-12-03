import Image from 'next/image';
import { DIST_LINKS } from '../../constants/distLinks';
import Container from '../../shared/components/Container.js';
import styles from './Distributors.styles.js';

const Distributors = () => {
  return(
    <>
      <div className="dist">
        <Container>
          <ul className="dist__list">
            <li className="dist__item dist__item--heading">
              <h3 className="label dist__heading">
                Fonts also<br />available at
              </h3>
            </li>

            {DIST_LINKS.map((link, i) => {
              return (
                <li className="dist__item" key={i}>
                  <a className="dist__link" href={link.url} data-ga-click={true} data-ga-category="home" data-ga-text={link.alt.toLowerCase()}>
                    <div className="dist__img">
                      <Image src={link.imgSrc} alt={link.alt} width={link.imgWidth} height={link.imgHeight} data-pin-nopin="true" />
                    </div>
                  </a>
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

export default Distributors;
