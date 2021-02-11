import PropTypes from 'prop-types';
import withPassport from '../../../middleware/passport';
import Admin from '../../../components/admin/layout/Admin';
import Form from '../../../components/admin/tags/Form';
import Well from '../../../components/shared/Well';

const Tags = ({ isAuthenticated }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Tags">
      <Well>
        <h1>Create New Tag</h1>
        <Form tag={{}} endpoint="/api/admin/tags/create" />
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

Tags.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Tags;