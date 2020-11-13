import PropTypes from 'prop-types';
import { findAll, findBySlug } from '../../../utils/fonts';
import Layout from '../../../components/layout/Layout';
import HeroImage from '../../../components/shared/HeroImage';
import Meta from '../../../components/fonts/Meta';
import Content from '../../../components/amp/fonts/Content';

export const config = {
  amp: true
};

const Font = ({ font }) => {
  return (
    <Layout title={`${font.name} - Fonts`} description={`Download the ${font.name} font free for personal use or buy a license for all your commercial use needs`}>
      <Meta font={font} isAmp={true} />
      <HeroImage src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} isAmp={true} />
      <Content font={font} />

      <amp-analytics type="googleanalytics">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: `
          {
            "vars": {
              "account": "UA-12207477-3"
            },
            "triggers": {
              "trackPageview": {
                "on": "visible",
                "request": "pageview"
              },
              "trackNavClicks": {
                "on": "click",
                "request": "event",
                "selector": "[data-ga-category='nav']",
                "vars": {
                  "eventCategory": "nav",
                  "eventAction": "click"
                }
              },
              "trackBuyClick": {
                "on": "click",
                "request": "event",
                "selector": "[data-ga-action='purchase']",
                "vars": {
                  "eventCategory": "font page",
                  "eventAction": "purchase"
                }
              },
              "trackDownloadClick": {
                "on": "click",
                "request": "event",
                "selector": "[data-ga-action='download']",
                "vars": {
                  "eventCategory": "font page",
                  "eventAction": "download"
                }
              }
            }
          }
        ` }} />
      </amp-analytics>

      <style jsx global>{`
        ${font.preview_css}

        @import 'global.scss';
        @import 'amp.scss';
      `}</style>
    </Layout>
  );
};

export async function getStaticPaths () {
  const fonts = await findAll();

  return {
    paths: fonts.map((font) => {
      return { params: { slug: font.slug }};
    }),
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const font = await findBySlug(params.slug);

  return {
    props: {
      font: JSON.parse(JSON.stringify(font))
    }
  };
}

Font.propTypes = {
  font: PropTypes.object
};

export default Font;