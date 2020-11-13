import PropTypes from 'prop-types';
import { findBySlug } from '../utils/fonts';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Distributors from '../components/home/Distributors';

const Home = ({ font }) => {
  return (
    <Layout>
      <Hero font={font} />
      <About />
      <Distributors />
    </Layout>
  );
};

export async function getStaticProps () {
  const font = await findBySlug('sacremende');

  return {
    props: {
      font: JSON.parse(JSON.stringify(font))
    }
  };
}

Home.propTypes = {
  font: PropTypes.object
};

export default Home;