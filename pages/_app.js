import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import { useRouter } from 'next/router';
import '../styles/global.scss';

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
      <Script src="//assets.pinterest.com/js/pinit.js" />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;