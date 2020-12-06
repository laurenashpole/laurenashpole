import PropTypes from 'prop-types';
import { findAll, findBySlug } from '../../utils/fonts';
import Layout from '../../components/layout/Layout';
import HeroImage from '../../components/fonts/HeroImage';
import Meta from '../../components/fonts/Meta';
import Content from '../../components/fonts/Content';

const Font = ({ font }) => {
  return (
    <Layout title={`${font.name} - Fonts`} description={`Download the ${font.name} font free for personal use or buy a license for all your commercial use needs`}>
      <Meta font={font} />
      <HeroImage src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} />
      <Content font={font} />
      <div id="modalRoot" />
      <script src="//assets.pinterest.com/js/pinit.js" async defer data-pin-build="pinterestBuild" data-pin-round="true" data-pin-tall="true" />
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