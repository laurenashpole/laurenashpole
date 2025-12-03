import PropTypes from 'prop-types';
import { find } from '../utils/sanity';
import Layout from '../components/layout/Layout';
import Welcome from '../components/posts/Welcome';
import Posts from '../components/posts/Posts';

const Index = ({ posts, pagination, affiliate }) => {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} pagination={pagination} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticProps () {
  const response = await find();

  return {
    props: response,
    revalidate: 3600
  };
}

Index.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
  affiliate: PropTypes.object
};

export default Index;
