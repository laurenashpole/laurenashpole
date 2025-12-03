import PropTypes from 'prop-types';
import { FEATURED_TAGS } from '../../constants/featuredTags';
import { find } from '../../utils/sanity';
import Layout from '../../components/layout/Layout';
import Posts from '../../components/posts/Posts';

const Index = ({ posts, pagination, tag, affiliate }) => {
  return (
    <Layout meta={{ title: `Posts tagged ${tag}`, pathname: `/tagged/${(tag || '').replace(/ /g, '-')}` }}>
      <Posts posts={posts} pagination={pagination} paginationPath={`/tagged/${(tag || '').replace(/ /g, '+')}`} heading={`Posts tagged ${tag}`} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticPaths () {
  return {
    paths: FEATURED_TAGS.map((tag) => {
      return { params: { tag: tag.slug }};
    }),
    fallback: 'blocking'
  };
}

export async function getStaticProps ({ params }) {
  const tag = params.tag.replace(/-/g, ' ');
  const response = await find(10, 1, null, tag);

  if (!(response.posts || []).length) {
    return { notFound: true };
  }

  return {
    props: { ...response, tag },
    revalidate: 3600
  };
}

Index.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
  tag: PropTypes.string,
  affiliate: PropTypes.object
};

export default Index;
