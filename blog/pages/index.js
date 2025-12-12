import Layout from '../components/layout/Layout';
import Posts from '../components/posts/Posts';
import Welcome from '../components/posts/Welcome';
import { find } from '../utils/sanity';

const Index = ({ posts, pagination, affiliate }) => {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} pagination={pagination} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await find();

  return {
    props: response,
    revalidate: 3600,
  };
}

export default Index;
