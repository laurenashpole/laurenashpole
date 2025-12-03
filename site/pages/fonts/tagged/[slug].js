import PropTypes from 'prop-types';

import List from '../../../components/fonts/List';
import Layout from '../../../components/layout/Layout';
import { findByIds as findFontsByIds } from '../../../utils/fonts';
import { findAll, findBySlug } from '../../../utils/tags';

const Tag = ({ tag, fonts }) => {
  return (
    <Layout
      meta={{
        title: `${tag.name} Fonts - Fonts`,
        description:
          tag.description ||
          `Browse my collection of original ${tag.name} fonts.`,
        pathname: `fonts/tagged/${tag.slug}`,
      }}
    >
      <List
        heading={`${tag.name} Fonts`}
        fonts={fonts}
        tags={[]}
        description={tag.description}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const tags = await findAll();

  return {
    paths: tags.map((tag) => {
      return { params: { slug: tag.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = await findBySlug(params.slug);
  const fonts = await findFontsByIds(tag.fonts);

  return {
    props: {
      tag: JSON.parse(JSON.stringify(tag)),
      fonts: JSON.parse(JSON.stringify(fonts)),
    },
  };
}

Tag.propTypes = {
  tag: PropTypes.object,
  fonts: PropTypes.array,
};

export default Tag;
