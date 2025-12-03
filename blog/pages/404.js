import Link from 'next/link';
import Well from '../shared/components/Well';
import Layout from '../components/layout/Layout';

const Custom404 = () => {
  return (
    <Layout meta={{ title: '404 - Page Not Found' }}>
      <Well size="medium">
        <h1>404 - Page Not Found</h1>
        <p>Oh no! It looks like that post doesn&apos;t exist. Wanna check out <Link href="/tagged/fonts"><a>fonts</a></Link> or <Link href="/tagged/code"><a>code</a></Link> instead?</p>
      </Well>
    </Layout>
  );
};

export default Custom404;