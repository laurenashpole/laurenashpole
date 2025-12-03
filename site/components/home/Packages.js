import { PACKAGES } from '../../constants/packages';
import Container from '../../shared/components/Container.js';
import styles from './Packages.styles.js';
import VerticalHeading from '../shared/VerticalHeading.js';

const Packages = () => {
  return(
    <>
      <div className="packages">
        <Container>
          <VerticalHeading heading="Want code?" />

          <ul className="packages__list">
            {PACKAGES.map((link, i) => {
              return (
                <li key={i} className="packages__item">
                  <h4 className="packages__name">
                    {link.name}
                  </h4>

                  <p dangerouslySetInnerHTML={{ __html: link.desc }} />

                  <ul className="packages__icons">
                    <li>
                      <a href={link.urls.gh} data-ga-click={true} data-ga-category="home" data-ga-text={`${link.name.toLowerCase()} github`} aria-label={`${link.name} on Github`}>
                        <svg className="packages__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href={link.urls.demo} data-ga-click={true} data-ga-category="home" data-ga-text={`${link.name.toLowerCase()} npm`} aria-label={`${link.name} Demo Site`}>
                        <svg className="packages__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M73.5 11.8c-1.6 0-3 .6-4.2 1.7L56.6 26.2c-1.1 1.1-1.7 2.5-1.7 4.2 0 1.7.7 3.2 2 4.4.1-.1.5-.5 1.1-1.2.6-.7 1.1-1.1 1.3-1.3s.6-.5 1.2-.9c.5-.4 1.1-.7 1.6-.8.5-.1 1.1-.2 1.7-.2 1.6 0 3 .6 4.2 1.7 1.1 1.1 1.7 2.5 1.7 4.2 0 .6-.1 1.2-.2 1.7s-.4 1-.8 1.6c-.4.5-.7.9-.9 1.2s-.8.6-1.4 1.2c-.7.6-1 1-1.2 1.1 1.3 1.3 2.8 2 4.5 2 1.6 0 3-.6 4.2-1.7l12.7-12.6c1.1-1.1 1.7-2.5 1.7-4.2 0-1.6-.5-3-1.6-4.2l-8.9-9c-1.3-1.1-2.7-1.6-4.3-1.6zm-43.2 43c-1.6 0-3 .6-4.2 1.7L13.5 69.2c-1.1 1.1-1.7 2.5-1.7 4.2 0 1.6.6 3 1.7 4.2l8.9 9c1.1 1.1 2.5 1.7 4.1 1.7 1.6 0 3-.6 4.2-1.7l12.7-12.7c1.1-1.1 1.7-2.5 1.7-4.2 0-1.7-.6-3.2-1.9-4.4-.1.1-.5.5-1.1 1.2-.6.7-1.1 1.1-1.3 1.3s-.6.5-1.2.9c-.6.3-1.1.6-1.6.7-.5.1-1.1.2-1.7.2-1.6 0-3-.6-4.2-1.7-1.1-1.1-1.7-2.5-1.7-4.2 0-.6.1-1.2.2-1.7s.4-1 .8-1.6c.4-.5.7-.9.9-1.2s.7-.7 1.3-1.3c.7-.6 1-1 1.2-1.1-1.3-1.3-2.8-2-4.5-2zM73.5 0c4.9 0 9 1.7 12.4 5.2l8.9 9c3.4 3.4 5.1 7.5 5.1 12.4s-1.7 9.1-5.2 12.5L82.1 51.8c-3.4 3.4-7.5 5.1-12.4 5.1-5 0-9.3-1.8-12.8-5.4l-5.4 5.4c3.6 3.5 5.4 7.8 5.4 12.7 0 4.9-1.7 9.1-5.1 12.5L39 94.9c-3.4 3.4-7.6 5.1-12.5 5.1s-9-1.7-12.4-5.2l-8.9-9C1.7 82.4 0 78.2 0 73.3s1.7-9.1 5.2-12.5l12.7-12.6c3.4-3.4 7.5-5.1 12.4-5.1 5 0 9.3 1.8 12.8 5.4l5.4-5.4c-3.6-3.5-5.4-7.8-5.4-12.7 0-4.9 1.7-9.1 5.1-12.5L61 5.1C64.5 1.7 68.6 0 73.5 0z" fill="currentColor" /></svg>
                      </a>
                    </li>
                  </ul>
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

export default Packages;