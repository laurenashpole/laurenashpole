import PropTypes from 'prop-types';
import { findAll } from '../../utils/fonts';
import { getTags } from '../../utils/tags';
import Layout from '../../components/layout/Layout';
import List from '../../components/fonts/list';

const Fonts = ({ fonts, tags }) => {
  return (
    <Layout title="Fonts" description="Custom, handcrafted fonts and dingbats for your personal and commercial projects.">
      <List heading="Fonts" fonts={fonts} tags={tags} />
    </Layout>
  );
};

export async function getStaticProps () {
  const fonts = await findAll();
  const fontsJSON = JSON.parse(JSON.stringify(fonts));

  return {
    props: {
      fonts: fontsJSON,
      tags: getTags(fontsJSON)
    }
  };
}

Fonts.propTypes = {
  fonts: PropTypes.array,
  tags: PropTypes.object
};

export default Fonts;