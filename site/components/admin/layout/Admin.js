import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../../../components/layout/Layout';
import Login from './Login';

const Admin = ({ children, isAuthenticated, title }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Layout
        isAdmin={true}
        hideHeader={!isAuthenticated}
        meta={{ title: `${title ? title + ' - ' : ''}Admin` }}
      >
        {isAuthenticated ? children : <Login />}
      </Layout>
    </>
  );
};

Admin.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  title: PropTypes.string,
};

export default Admin;
