import PropTypes from 'prop-types';
import { findBySlug } from '../../../utils/fonts';
import { findAll } from '../../../utils/tags';
import withPassport from '../../../middleware/passport';
import Well from '../../../../shared/components/Well';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/fonts/Form';

const Edit = ({ isAuthenticated, font, tags }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title={`Edit ${font.name}`}>
      <Well>
        <h1>Edit {font.name}</h1>
        <Form font={font} tags={tags} endpoint="/api/admin/fonts/edit" />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const font = await (isAuthenticated ? findBySlug(context.params.slug) : Promise.resolve({}));
  const tags = await (isAuthenticated ? findAll() : Promise.resolve([]));

  return {
    props: {
      isAuthenticated,
      font: JSON.parse(JSON.stringify(font)),
      tags: JSON.parse(JSON.stringify(tags))
    }
  };
}

Edit.propTypes = {
  isAuthenticated: PropTypes.bool,
  font: PropTypes.object,
  tags: PropTypes.array
};

export default Edit;