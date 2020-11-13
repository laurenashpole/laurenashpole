import PropTypes from 'prop-types';
import withPassport from '../../middleware/passport';
import { findAll } from '../../utils/fonts';
import Admin from '../../components/admin/layout/Admin';
import List from '../../components/admin/fonts/List';

const Fonts = ({ isAuthenticated, fonts }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Fonts">
      <List fonts={fonts} />
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const fonts = await (isAuthenticated ? findAll() : Promise.resolve([]));

  return {
    props: {
      isAuthenticated,
      fonts: JSON.parse(JSON.stringify(fonts))
    }
  };
}

Fonts.propTypes = {
  isAuthenticated: PropTypes.bool,
  fonts: PropTypes.array
};

export default Fonts;