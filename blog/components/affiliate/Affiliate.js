import Container from '../../../shared/components/Container.js';
import styles from './Affiliate.module.css';

const Affiliate = ({ affiliate, isPermalink }) => {
  if (!affiliate || !affiliate.banners) {
    return null;
  }

  const hasMobileBanner =
    affiliate.banners.mobile &&
    affiliate.banners.mobile.imageUrl &&
    affiliate.banners.mobile.url;
  const hasDesktopBanner =
    affiliate.banners.desktop &&
    affiliate.banners.desktop.imageUrl &&
    affiliate.banners.desktop.url;

  return (
    <>
      {hasMobileBanner && (
        <div
          className={`${styles.container} ${styles.mobile} ${isPermalink ? styles.permalink : ''}`}
        >
          <Container>
            <div className={styles.content}>
              <div className={styles.bannerMobile}>
                <a href={affiliate.banners.mobile.url}>
                  <img
                    alt={affiliate.banners.alt || ''}
                    src={affiliate.banners.mobile.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </div>

              <div className={styles.label}>Advertisement</div>
            </div>
          </Container>
        </div>
      )}

      {hasDesktopBanner && (
        <div
          className={`${styles.container} ${styles.desktop} ${isPermalink ? styles.permalink : ''}`}
        >
          <Container>
            <div className={styles.content}>
              <div className={styles.bannerDesktop}>
                <a href={affiliate.banners.desktop.url}>
                  <img
                    alt={affiliate.banners.alt || ''}
                    src={affiliate.banners.desktop.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </div>

              <div className={styles.label}>Advertisement</div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Affiliate;
