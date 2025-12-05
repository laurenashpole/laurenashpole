import Container from '../../shared/components/Container';
import About from '../components/home/About';
import Distributors from '../components/home/Distributors';
import Hero from '../components/home/Hero';
import Packages from '../components/home/Packages';
import Recent from '../components/home/Recent';
import Layout from '../components/layout/Layout';
import { fetchFont, fetchFonts } from '../utils/sanity';

const Home = ({ font, fonts }) => {
  return (
    <Layout>
      <Hero font={font} />
      <Container />
      <Recent fonts={fonts} />
      <Container />
      <About />
      <Container />
      <Distributors />
      <Container />
      <Packages />
      <Container />
    </Layout>
  );
};

export async function getStaticProps() {
  const font = await fetchFont('tuper-super');

  const fonts = await fetchFonts([
    '64477c1698a37765ddb86d73',
    '6206c39bf3b2332410fdef68',
    '610c1a5f6127c844c8e9ef5c',
  ]);

  return {
    props: {
      font: JSON.parse(JSON.stringify(font)),
      fonts: JSON.parse(JSON.stringify(fonts)),
    },
  };
}

export default Home;
