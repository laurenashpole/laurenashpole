import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import Mailing from '../../../shared/components/Mailing';
import Meta from '../../../shared/components/Meta';
import { HEADER } from '../../constants/header';
import styles from './Layout.styles.js';

const Layout = ({ children, meta }) => {
  return (
    <div className="layout">
      <Head>
        <title>
          {(meta || {}).title ? meta.title + ' - ' : ''}Blog - Lauren Ashpole
        </title>
      </Head>

      <Meta
        {...(meta || {})}
        title={(meta || {}).title || 'Blog - Lauren Ashpole'}
        description={
          (meta || {}).description ||
          'The latest font releases and recommendations. Plus code snippets, bookmarks, and project updates.'
        }
      />
      <Header enableAnalytics={true} {...HEADER} />
      <main className="layout__main">{children}</main>

      <Footer>
        <Mailing location="footer" isInline={true} />
      </Footer>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  meta: PropTypes.object,
};

export default Layout;
