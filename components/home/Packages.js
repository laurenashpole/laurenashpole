import Image from 'next/image';
import { PACKAGES } from '../../constants/packages';
import Well from '../../components/shared/Well';
import styles from './packages.styles.js';

const Packages = () => {
  return(
    <>
      <Well size="large">
        <div className="packages">
          <h3>Looking for code?</h3>

          <ul className="packages__list">
            {PACKAGES.map((link, i) => {
              return (
                <li key={i} className="packages__item">
                  <a href={link.urls.demo} data-ga-click={true} data-ga-category="home" data-ga-action={link.name.toLowerCase()}>
                    <Image src={link.imgSrc} alt={link.name} width={600} height={305} data-pin-nopin="true" />
                  </a>

                  <p>
                    <a href={link.urls.demo} data-ga-click={true} data-ga-category="home">{link.name}.</a> <span dangerouslySetInnerHTML={{ __html: link.desc }} />
                  </p>

                  <ul className="packages__icons">
                    <li>
                      <a href={link.urls.gh} data-ga-click={true} data-ga-category="home" data-ga-action={`${link.name.toLowerCase()} github`} aria-label={`${link.name} on Github`}>
                        <svg className="packages__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href={link.urls.npm} data-ga-click={true} data-ga-category="home" data-ga-action={`${link.name.toLowerCase()} npm`} aria-label={`${link.name} on NPM`}>
                        <svg className="packages__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M0 0v300h300V0H0zm249.7 249.7h-50.3V100.6h-50.3v149.1H50.3V50.3h199.4v199.4z" fill="currentColor"></path></svg>
                      </a>
                    </li>
                  </ul>
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

export default Packages;