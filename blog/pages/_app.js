import { Analytics } from '@vercel/analytics/react';
import '../../shared/styles/_global.css';
import '../../shared/styles/_keyframes.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
