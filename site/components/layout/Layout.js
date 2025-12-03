import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import Mailing from '../../../shared/components/Mailing';
import Meta from '../../../shared/components/Meta';
import { HEADER } from '../../constants/header';
import Cart from './Cart';
import styles from './Layout.styles.js';

const Layout = ({ children, hideHeader, isAdmin, meta }) => {
  return (
    <div className="layout">
      <Head>
        <title>
          {(meta || {}).title ? meta.title + ' - ' : ''}Lauren Ashpole
        </title>
      </Head>

      {!isAdmin && (
        <Meta
          {...(meta || {})}
          title={(meta || {}).title || 'Lauren Ashpole'}
          description={
            (meta || {}).description ||
            'Custom, handcrafted fonts and dingbats for your personal and commercial projects.'
          }
        />
      )}
      {!hideHeader && (
        <Header
          home={HEADER.home}
          links={HEADER[isAdmin ? 'admin' : 'default']}
          enableAnalytics={!isAdmin}
          cart={<Cart />}
        />
      )}
      <main className="layout__main">{children}</main>

      {!isAdmin && (
        <Footer>
          <Mailing location="footer" isInline={true} />
        </Footer>
      )}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  hideHeader: PropTypes.bool,
  isAdmin: PropTypes.bool,
  meta: PropTypes.object,
};

export default Layout;
