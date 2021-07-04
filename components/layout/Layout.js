import PropTypes from 'prop-types';
import Head from 'next/head';
import { useAmp } from 'next/amp';
import { NAV_LINKS } from '../../constants/navLinks';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import Mailing from '../../shared/components/Mailing';
import AmpMailing from '../amp/Mailing';
import Meta from './Meta';
import styles from './layout.styles.js';

const Layout = ({ children, isAdmin, title, description, canonicalPathname, hideHeader }) => {
  const isAmp = useAmp();

  return (
    <div className="layout">
      <Head>
        <title>{title ? title + ' - ' : ''}Lauren Ashpole</title>
      </Head>

      {!isAdmin && <Meta title={title} description={description} canonicalPathname={canonicalPathname} />}
      {!hideHeader && <Header links={NAV_LINKS[isAdmin ? 'admin' : 'default']} enableAnalytics={!isAdmin} />}
      <main className="layout__main">{children}</main>

      {!isAdmin &&
        <Footer>
          {isAmp ? (
            <AmpMailing />
          ) : (
            <Mailing location="footer" isInline={true} />
          )}
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