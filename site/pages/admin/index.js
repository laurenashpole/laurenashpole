import PropTypes from 'prop-types';
import withPassport from '../../middleware/passport';
import Well from '../../../shared/components/Well';
import Admin from '../../components/admin/layout/Admin';
import List from '../../components/admin/home/List';

const Home = ({ isAuthenticated }) => {
  return (
    <Admin isAuthenticated={isAuthenticated}>
      <Well>
        <h1>Admin</h1>
        <List items={['font', 'tag', 'upload']} />
      </Well>
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  return {
    props: {
      isAuthenticated
    }
  };
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Home;