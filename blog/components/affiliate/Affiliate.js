import PropTypes from 'prop-types';

import Container from '../../../shared/components/Container.js';
import styles from './Affiliate.module.css';

const Affiliate = ({ affiliate, isPermalink }) => {
  if (!affiliate) {
    return null;
  }

  return (
    <>
      {((affiliate.banner && affiliate.banner.mobile) ||
        (affiliate.snippet && affiliate.snippet.mobile)) && (
        <div
          className={`${styles.container} ${styles.mobile} ${isPermalink ? styles.permalink : ''}`}
        >
          <Container>
            <div className={styles.content}>
              <div className={styles.bannerMobile}>
                {affiliate.banner && (
                  <a href={affiliate.banner.url}>
                    <img
                      alt={affiliate.banner.alt || ''}
                      src={affiliate.banner.mobile.url}
                    />
                  </a>
                )}

                {affiliate.snippet && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: affiliate.snippet.mobile,
                    }}
                  />
                )}
              </div>

              <div className={styles.label}>Advertisement</div>
            </div>
          </Container>
        </div>
      )}

      {((affiliate.banner && affiliate.banner.desktop) ||
        (affiliate.snippet && affiliate.snippet.desktop)) && (
        <div
          className={`${styles.container} ${styles.desktop} ${isPermalink ? styles.permalink : ''}`}
        >
          <Container>
            <div className={styles.content}>
              <div className={styles.bannerDesktop}>
                {affiliate.banner && (
                  <a href={affiliate.banner.url}>
                    <img
                      alt={affiliate.banner.alt || ''}
                      src={affiliate.banner.desktop.url}
                    />
                  </a>
                )}

                {affiliate.snippet && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: affiliate.snippet.desktop,
                    }}
                  />
                )}
              </div>

              <div className={styles.label}>Advertisement</div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

Affiliate.propTypes = {
  affiliate: PropTypes.object,
  isPermalink: PropTypes.bool,
};

export default Affiliate;
