import PropTypes from 'prop-types';
import Head from 'next/head';
import { HEADER } from '../../constants/header';
import Header from '../../shared/components/Header';
import Meta from '../../shared/components/Meta';
import Footer from '../../shared/components/Footer';
import Mailing from '../../shared/components/Mailing';
import Cart from './Cart';
import styles from './Layout.styles.js';

const Layout = ({ children, isAdmin, title, description, canonicalPathname, hideHeader }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title ? title + ' - ' : ''}Lauren Ashpole</title>
      </Head>

      {!isAdmin && <Meta title={title} description={description} canonicalPathname={canonicalPathname} />}
      {!hideHeader && <Header home={HEADER.home} links={HEADER[isAdmin ? 'admin' : 'default']} enableAnalytics={!isAdmin} />}
      <main className="layout__main">{children}</main>
      <Cart />

      {!isAdmin &&
        <Footer>
          <Mailing location="footer" isInline={true} />
        </Footer>
      }

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  isAdmin: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  canonicalPathname: PropTypes.string,
  hideHeader: PropTypes.bool
};

export default Layout;