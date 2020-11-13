import PropTypes from 'prop-types';
import Head from 'next/head';
import { NAV_LINKS } from '../../constants/navLinks';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.styles.js';

const Layout = ({ children, isAdmin, title, description, hideHeader }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title ? title + ' - ' : ''}Lauren Ashpole</title>
        <meta name="description" content={description || 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.'} />
      </Head>

      {!hideHeader && <Header navLinks={NAV_LINKS[isAdmin ? 'admin' : 'default']} enableAnalytics={!isAdmin} />}
      <main className="layout__main">{children}</main>
      {!isAdmin && <Footer />}

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
  hideHeader: PropTypes.bool
};

export default Layout;