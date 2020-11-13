import PropTypes from 'prop-types';
import { findAll, findByTag } from '../../../utils/fonts';
import { getTags } from '../../../utils/tags';
import Layout from '../../../components/layout/Layout';
import List from '../../../components/fonts/list';

const Tag = ({ name, fonts }) => {
  return (
    <Layout title={`${name} Fonts - Fonts`} description={`Browse my collection of original ${name} fonts.`}>
      <List heading={`${name} Fonts`} fonts={fonts} tags={{}} />
    </Layout>
  );
};

export async function getStaticPaths () {
  const fonts = await findAll();
  const tags = getTags(JSON.parse(JSON.stringify(fonts)));

  return {
    paths: Object.keys(tags).map((tag) => {
      return { params: { tag }};
    }),
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const fonts = await findByTag(params.tag);
  const fontsJSON = JSON.parse(JSON.stringify(fonts));

  return {
    props: {
      name: (params.tag[0].toUpperCase() + params.tag.substring(1)).replace('-', ' '),
      fonts: fontsJSON
    }
  };
}

Tag.propTypes = {
  name: PropTypes.string,
  fonts: PropTypes.array,
};

export default Tag;