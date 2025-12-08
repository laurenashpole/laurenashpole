import { FaGithub } from 'react-icons/fa6';
import { GrLink } from 'react-icons/gr';

import Container from '../../../shared/components/Container.js';
import { PACKAGES } from '../../constants/packages';
import VerticalHeading from '../shared/VerticalHeading.js';
import styles from './Packages.styles.js';

const Packages = () => {
  return (
    <>
      <div className="packages">
        <Container>
          <VerticalHeading heading="Want code?" />

          <ul className="packages__list">
            {PACKAGES.map((link, i) => {
              return (
                <li key={i} className="packages__item">
                  <h4 className="packages__name">{link.name}</h4>
                  <p dangerouslySetInnerHTML={{ __html: link.desc }} />

                  <ul className="packages__icons">
                    <li>
                      <a
                        href={link.urls.gh}
                        data-ga-click={true}
                        data-ga-category="home"
                        data-ga-text={`${link.name.toLowerCase()} github`}
                        aria-label={`${link.name} on Github`}
                      >
                        <FaGithub />
                      </a>
                    </li>

                    <li>
                      <a
                        href={link.urls.demo}
                        data-ga-click={true}
                        data-ga-category="home"
                        data-ga-text={`${link.name.toLowerCase()} npm`}
                        aria-label={`${link.name} Demo Site`}
                      >
                        <GrLink />
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
