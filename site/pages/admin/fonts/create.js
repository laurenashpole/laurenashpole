import PropTypes from 'prop-types';
import { findAll } from '../../../utils/tags';
import withPassport from '../../../middleware/passport';
import Well from '../../../../shared/components/Well';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/fonts/Form';

const Create = ({ isAuthenticated, tags }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Create New Font">
      <Well>
        <h1>Create New Font</h1>
        <Form font={{}} tags={tags} endpoint="/api/admin/fonts/create" />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const tags = await (isAuthenticated ? findAll() : Promise.resolve([]));

  return {
    props: {
      isAuthenticated,
      tags: JSON.parse(JSON.stringify(tags))
    }
  };
}

Create.propTypes = {
  isAuthenticated: PropTypes.bool,
  tags: PropTypes.array
};

export default Create;