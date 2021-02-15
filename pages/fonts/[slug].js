import PropTypes from 'prop-types';
import { findAll, findBySlug } from '../../utils/fonts';
import { findByIds as findTagsByIds } from '../../utils/tags';
import Layout from '../../components/layout/Layout';
import HeroImage from '../../components/fonts/HeroImage';
import Meta from '../../components/fonts/Meta';
import Content from '../../components/fonts/Content';

const Font = ({ font, tags }) => {
  return (
    <Layout title={`${font.name} - Fonts`} description={`Download the ${font.name} font free for personal use or buy a license for all your commercial use needs`}>
      <Meta font={font} />
      <HeroImage src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} />
      <Content font={font} tags={tags} />
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
  const tags = await findTagsByIds(font.tags);

  return {
    props: {
      font: JSON.parse(JSON.stringify(font)),
      tags: JSON.parse(JSON.stringify(tags))
    }
  };
}

Font.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array
};

export default Font;