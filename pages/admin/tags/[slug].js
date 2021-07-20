import PropTypes from 'prop-types';
import { findBySlug } from '../../../utils/tags';
import withPassport from '../../../middleware/passport';
import Well from '../../../shared/components/Well';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/tags/Form';

const Edit = ({ isAuthenticated, tag }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title={`Edit ${tag.name}`}>
      <Well>
        <h1>Edit {tag.name}</h1>
        <Form tag={tag} endpoint="/api/admin/tags/edit" />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const tag = await (isAuthenticated ? findBySlug(context.params.slug) : Promise.resolve({}));

  return {
    props: {
      isAuthenticated,
      tag: JSON.parse(JSON.stringify(tag))
    }
  };
}

Edit.propTypes = {
  isAuthenticated: PropTypes.bool,
  tag: PropTypes.object
};

export default Edit;