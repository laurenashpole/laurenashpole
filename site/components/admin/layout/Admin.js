import PropTypes from 'prop-types';
import Head from 'next/head';
import Login from './Login';
import Layout from '../../../components/layout/Layout';

const Admin = ({ children, isAuthenticated, title }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Layout isAdmin={true} hideHeader={!isAuthenticated} meta={{ title: `${title ? title + ' - ' : ''}Admin` }}>
        {isAuthenticated ? children : <Login />}
      </Layout>
    </>
  );
};

Admin.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  title: PropTypes.string
};

export default Admin;