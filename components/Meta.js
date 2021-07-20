import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ description, title, canonicalPathname }) => {
  const getStructuredData = () => {
    return `
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Lauren Ashpole",
        "url": "https://laurenashpole.com"
      }
    `;
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getStructuredData() }} />

      <meta name="description" content={description || 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.'} />

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={description} />
      <meta property="og:site_name" content="Lauren Ashpole" />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${canonicalPathname}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@laurenashpole" />
      <meta name="twitter:creator" content="@laurenashpole" />

      {canonicalPathname && <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${canonicalPathname}`} />}
    </Head>
  );
};

Meta.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  canonicalPathname: PropTypes.string
};

export default Meta;