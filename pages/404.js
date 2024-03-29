import Link from 'next/link';
import Well from '../shared/components/Well';
import Layout from '../components/layout/Layout';

const Custom404 = () => {
  return (
    <Layout meta={{ title: '404 - Page Not Found' }}>
      <Well size="medium">
        <h1>404 - Page Not Found</h1>
        <p>It looks like this page doesn&apos;t exist. If you&apos;re looking for fonts, try clicking <Link href="/fonts"><a>here</a></Link> instead. If you need anything else, don&apos;t hesitate to <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>contact me</a>.</p>
      </Well>
    </Layout>
  );
};

export default Custom404;