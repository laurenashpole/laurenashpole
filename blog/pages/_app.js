import { Analytics } from '@vercel/analytics/react';
import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
