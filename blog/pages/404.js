import Link from 'next/link';

import Layout from '../components/layout/Layout';
import Page from '../../shared/components/Page';

const Custom404 = () => {
  return (
    <Layout meta={{ title: '404 - Page Not Found' }}>
      <Page>
        <h1>404 - Page Not Found</h1>

        <p>
          Oh no! It looks like that post doesn&apos;t exist. Wanna check out{' '}
          <Link href="/tagged/fonts">fonts</Link> or{' '}
          <Link href="/tagged/code">code</Link> instead?
        </p>
      </Page>
    </Layout>
  );
};

export default Custom404;
