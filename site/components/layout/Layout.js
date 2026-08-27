import Head from 'next/head';

import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import Mailing from '../../../shared/components/Mailing';
import Meta from '../../../shared/components/Meta';
import { HEADER } from '../../constants/header';
import Cart from './Cart';
import styles from './Layout.module.css';

const Layout = ({ children, meta }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {`${(meta || {}).title ? meta.title + ' - ' : ''}Lauren Ashpole`}
        </title>
      </Head>

      <Meta
        {...(meta || {})}
        title={(meta || {}).title || 'Lauren Ashpole'}
        description={
          (meta || {}).description ||
          'Custom, handcrafted fonts and dingbats for your personal and commercial projects.'
        }
      />

      <Header home={HEADER.home} links={HEADER.default} cart={<Cart />} />

      <main className={styles.main}>{children}</main>

      <Footer>
        <Mailing location="footer" isInline={true} />
      </Footer>
    </div>
  );
};

export default Layout;
