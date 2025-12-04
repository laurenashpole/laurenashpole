import PropTypes from 'prop-types';

import List from '../../components/fonts/List';
import Layout from '../../components/layout/Layout';
import { fetchFonts, fetchTags } from '../../utils/sanity';

const Fonts = ({ fonts, tags }) => {
  return (
    <Layout
      meta={{
        title: 'Fonts',
        description:
          'Custom, handcrafted fonts and dingbats for your personal and commercial projects.',
        pathname: 'fonts',
      }}
    >
      <List heading="Fonts" fonts={fonts} tags={tags} />
    </Layout>
  );
};

export async function getStaticProps() {
  const fonts = await fetchFonts();
  const tags = await fetchTags();

  return {
    props: {
      fonts: JSON.parse(JSON.stringify(fonts)),
      tags: JSON.parse(JSON.stringify(tags)),
    },
  };
}

Fonts.propTypes = {
  fonts: PropTypes.array,
  tags: PropTypes.array,
};

export default Fonts;
