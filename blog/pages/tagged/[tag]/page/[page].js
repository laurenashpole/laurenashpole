import PropTypes from 'prop-types';
import { find } from '../../../../utils/sanity';
import Layout from '../../../../components/layout/Layout';
import Posts from '../../../../components/posts/Posts';

const Index = ({ posts, pagination, page, tag, affiliate }) => {
  return (
    <Layout meta={{ title: `Posts tagged ${tag} – page ${page}`, pathname: `/tagged/${(tag || '').replace(/ /g, '+')}/page/${page}` }}>
      <Posts posts={posts} heading={`Posts tagged ${tag} <br />– page ${page}`} pagination={pagination} paginationPath={`/tagged/${(tag || '').replace(/ /g, '+')}`} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticPaths () {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps ({ params }) {
  const tag = params.tag.replace(/\+/g, ' ');
  const response = await find(10, parseInt(params.page), null, tag);

  if (Math.max(response.total_posts / 10) > parseInt(params.page) || !(response.posts || []).length) {
    return { notFound: true };
  }

  return {
    props: { ...response, tag, page: params.page },
    revalidate: 3600
  };
}

Index.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
  tag: PropTypes.string,
  page: PropTypes.string,
  affiliate: PropTypes.object
};

export default Index;
