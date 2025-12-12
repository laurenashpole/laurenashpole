import '../../shared/styles/_global.css';

import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
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

export default App;
