import PropTypes from 'prop-types';

import List from '../../../components/fonts/List';
import Layout from '../../../components/layout/Layout';
import { fetchTag, fetchTags } from '../../../utils/sanity';

const Tag = ({ tag }) => {
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
        fonts={tag.fonts}
        tags={[]}
        description={tag.description}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const tags = await fetchTags();

  return {
    paths: tags.map((tag) => {
      return { params: { slug: tag.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = await fetchTag(params.slug);

  return {
    props: {
      tag: JSON.parse(JSON.stringify(tag)),
    },
  };
}

Tag.propTypes = {
  tag: PropTypes.object,
  fonts: PropTypes.array,
};

export default Tag;
