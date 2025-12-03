import PropTypes from 'prop-types';
import { find } from '../../utils/sanity';
import Layout from '../../components/layout/Layout';
import Posts from '../../components/posts/Posts';

const Index = ({ posts, pagination, page, affiliate }) => {
  return (
    <Layout meta={{ title: `Page ${page}`, pathname: `/page/${page}` }}>
      <Posts posts={posts} heading={`Page ${page}`} pagination={pagination} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticPaths () {
  return {
    paths: [...Array(10).keys()].map((i) => {
      return { params: { page: (i + 1).toString() }};
    }),
    fallback: 'blocking'
  };
}

export async function getStaticProps ({ params }) {
  const response = await find(10, parseInt(params.page));

  if (Math.max(response.total_posts / 10) > parseInt(params.page) || !(response.posts || []).length) {
    return { notFound: true };
  }

  return {
    props: { ...response, page: params.page },
    revalidate: 3600
  };
}

Index.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
  page: PropTypes.string,
  affiliate: PropTypes.object
};

export default Index;
