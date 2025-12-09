import '../styles/global.scss';
import '../../shared/styles/_global.css';
import '../../shared/styles/_keyframes.css';

import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.mc_cid) {
      window.localStorage.setItem('hasReferrer', true);
    }
  }, [router.query]);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script src="//assets.pinterest.com/js/pinit.js" />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
