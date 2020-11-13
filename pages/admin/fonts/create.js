import PropTypes from 'prop-types';
import withPassport from '../../../middleware/passport';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/fonts/Form';
import Well from '../../../components/shared/Well';

const Create = ({ isAuthenticated }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Create New Font">
      <Well>
        <h1>Create New Font</h1>
        <Form font={{}} endpoint="/api/admin/fonts/create" />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  return {
    props: { isAuthenticated }
  };
}

Create.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Create;