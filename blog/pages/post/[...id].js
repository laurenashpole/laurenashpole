import PropTypes from 'prop-types';
import { find } from '../../utils/sanity';
import Layout from '../../components/layout/Layout';
import Post from '../../components/post/Post';

const Show = ({ post, affiliate }) => {
  const formattedDate = new Date(post.date.replace(/-/g, '/')).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const structuredData = `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${process.env.NEXT_PUBLIC_BASE_URL}${post.pathname}"
      },
      "headline": "${post.summary}",
      "datePublished": "${formattedDate}",
      "dateModified": "${formattedDate}",
      "author": {
        "@type": "Person",
        "name": "Lauren Ashpole",
        "url": "https://laurenashpole.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lauren Ashpole"
      },
      "image": [
        "${process.env.NEXT_PUBLIC_BASE_URL}/api/og-image?headline=${post.headline || post.summary}&type=${post.type}"
      ]
    }
  `;

  return (
    <Layout meta={{
      title: post.headline || post.summary || '',
      pathname: post.pathname,
      canonicalUrl: post.canonical_url,
      twitter: {
        card: 'summary_large_image',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og-image?headline=${post.headline || post.summary}&type=${post.type}`
      },
      og: {
        type: 'article',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og-image?headline=${post.headline || post.summary}&type=${post.type}`
      },
      structuredData
    }}>
      <Post post={post} isPermalink={true} affiliate={affiliate} />
    </Layout>
  );
};

export async function getStaticPaths () {
  const response = await find(20);

  return {
    paths: response.posts.map((post) => {
      const params = post.pathname.replace('/post/', '').split('/');
      return { params: { id: [ params[0] , params[1] || '' ] }};
    }),
    fallback: 'blocking'
  };
}

export async function getStaticProps ({ params }) {
  const response = await find(1, 1, params.id[0]);

  if (!(response.posts || [])[0]) {
    return { notFound: true };
  }

  return {
    props: {
      post: response.posts[0],
      affiliate: response.affiliate
    },
    revalidate: 3600
  };
}

Show.propTypes = {
  post: PropTypes.object,
  affiliate: PropTypes.object
};

export default Show;
