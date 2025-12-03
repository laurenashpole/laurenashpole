import PropTypes from 'prop-types';
import styles from './Affiliate.styles.js';
import Container from '../../shared/components/Container.js';

const Affiliate = ({ affiliate, isPermalink }) => {
  if (!affiliate) {
    return null;
  }

  return (
    <>
      {(affiliate.banner && affiliate.banner.mobile || affiliate.snippet && affiliate.snippet.mobile) &&
        <div className={`affiliate affiliate--mobile ${isPermalink ? 'affiliate--permalink' : ''}`}>
          <Container>
            <div className="affiliate__container">
              <div className="affiliate__banner--mobile">
                {affiliate.banner &&
                  <a href={affiliate.banner.url}>
                    <img alt={affiliate.banner.alt || ''} src={affiliate.banner.mobile.url} />
                  </a>
                }

                {affiliate.snippet &&
                  <div dangerouslySetInnerHTML={{ __html: affiliate.snippet.mobile }} />
                }
              </div>

              <div className="affiliate__text">Advertisement</div>
            </div>
          </Container>
        </div>
      }

      {((affiliate.banner && affiliate.banner.desktop) || (affiliate.snippet && affiliate.snippet.desktop)) &&
        <div className={`affiliate affiliate--desktop ${isPermalink ? 'affiliate--permalink' : ''}`}>
          <Container>
            <div className="affiliate__container">
              <div className="affiliate__banner--desktop">
                {affiliate.banner &&
                  <a href={affiliate.banner.url}>
                    <img alt={affiliate.banner.alt || ''} src={affiliate.banner.desktop.url} />
                  </a>
                }

                {affiliate.snippet &&
                  <div dangerouslySetInnerHTML={{ __html: affiliate.snippet.desktop }} />
                }
              </div>

              <div className="affiliate__text">Advertisement</div>
            </div>
          </Container>
        </div>
      }

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

Affiliate.propTypes = {
  affiliate: PropTypes.object,
  isPermalink: PropTypes.bool
};

export default Affiliate;
