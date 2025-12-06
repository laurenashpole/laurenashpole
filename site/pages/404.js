import Link from 'next/link';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';

const Custom404 = () => {
  return (
    <Layout meta={{ title: '404 - Page Not Found' }}>
      <Page>
        <h1>404 - Page Not Found</h1>
        <p>
          It looks like this page doesn&apos;t exist. If you&apos;re looking for
          fonts, try clicking <Link href="/fonts">here</Link> instead. If you
          need anything else, don&apos;t hesitate to{' '}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            title={process.env.NEXT_PUBLIC_EMAIL}
          >
            contact me
          </a>
          .
        </p>
      </Page>
    </Layout>
  );
};

export default Custom404;
