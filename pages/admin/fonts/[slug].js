import PropTypes from 'prop-types';
import { findBySlug } from '../../../utils/fonts';
import withPassport from '../../../middleware/passport';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/fonts/Form';
import Well from '../../../components/shared/Well';

const Edit = ({ isAuthenticated, font }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title={`Edit ${font.name}`}>
      <Well>
        <h1>Edit {font.name}</h1>
        <Form font={font} endpoint="/api/admin/fonts/edit" />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const font = await (isAuthenticated ? findBySlug(context.params.slug) : Promise.resolve({}));

  return {
    props: {
      isAuthenticated,
      font: JSON.parse(JSON.stringify(font))
    }
  };
}

Edit.propTypes = {
  isAuthenticated: PropTypes.bool,
  font: PropTypes.object
};

export default Edit;