import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Distributors from '../components/home/Distributors';
import Packages from '../components/home/Packages';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Distributors />
      <Packages />
    </Layout>
  );
};

export default Home;