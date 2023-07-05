import Image from 'next/image';
import { DIST_LINKS } from '../../constants/distLinks';
import Well from '../../shared/components/Well';
import styles from './Distributors.styles.js';

const Distributors = () => {
  return(
    <>
      <Well size="large">
        <div className="dist">
          <h3 className="dist__heading">Fonts also<br /> available at</h3>

          <ul className="dist__list">
            {DIST_LINKS.map((link, i) => {
              return (
                <li className="dist__item" key={i}>
                  <a className="dist__link" href={link.url} data-ga-click={true} data-ga-category="home" data-ga-text={link.alt.toLowerCase()}>
                    <Image src={link.imgSrc} alt={link.alt} width={link.imgWidth} height={link.imgHeight} data-pin-nopin="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Well>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Distributors;