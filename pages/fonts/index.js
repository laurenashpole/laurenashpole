import PropTypes from 'prop-types';
import { findAll } from '../../utils/fonts';
import { findAll as findAllTags } from '../../utils/tags';
import Layout from '../../components/layout/Layout';
import List from '../../components/fonts/List';

const Fonts = ({ fonts, tags }) => {
  return (
    <Layout title="Fonts" description="Custom, handcrafted fonts and dingbats for your personal and commercial projects.">
      <List heading="Fonts" fonts={fonts} tags={tags} />
    </Layout>
  );
};

export async function getStaticProps () {
  const fonts = await findAll();
  const tags = await findAllTags();

  return {
    props: {
      fonts: JSON.parse(JSON.stringify(fonts)),
      tags: JSON.parse(JSON.stringify(tags))
    }
  };
}

Fonts.propTypes = {
  fonts: PropTypes.array,
  tags: PropTypes.array
};

export default Fonts;