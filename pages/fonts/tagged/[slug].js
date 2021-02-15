import PropTypes from 'prop-types';
import { findAll, findBySlug } from '../../../utils/tags';
import { findByIds as findFontsByIds } from '../../../utils/fonts';
import Layout from '../../../components/layout/Layout';
import List from '../../../components/fonts/List';

const Tag = ({ tag, fonts }) => {
  return (
    <Layout title={`${tag.name} Fonts - Fonts`} description={tag.description || `Browse my collection of original ${tag.name} fonts.`}>
      <List heading={`${tag.name} Fonts`} fonts={fonts} tags={[]} description={tag.description} />
    </Layout>
  );
};

export async function getStaticPaths () {
  const tags = await findAll();

  return {
    paths: tags.map((tag) => {
      return { params: { slug: tag.slug }};
    }),
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const tag = await findBySlug(params.slug);
  const fonts = await findFontsByIds(tag.fonts);

  return {
    props: {
      tag: JSON.parse(JSON.stringify(tag)),
      fonts: JSON.parse(JSON.stringify(fonts))
    }
  };
}

Tag.propTypes = {
  tag: PropTypes.object,
  fonts: PropTypes.array
};

export default Tag;