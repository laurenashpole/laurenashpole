import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ description, og, pathname, structuredData, title, twitter }) => {
  og = {
    type: 'website',
    site_name: 'Lauren Ashpole',
    title: title,
    description: description,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${pathname || ''}`,
    ...(og || {})
  };

  twitter = {
    card: 'summary',
    site: '@laurenashpole',
    creator: '@laurenashpole',
    title: title,
    description: description,
    ...(twitter || {})
  };

  structuredData = [
    `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Lauren Ashpole",
      "url": "https://laurenashpole.com"
    }`,
    ...([structuredData] || [])
  ];

  return (
    <Head>
      <meta name="description" content={description || 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.'} />

      {Object.keys(og).map((prop) => (
        <meta key={`og${prop}`} property={`og:${prop}`} content={og[prop]} />
      ))}

      {Object.keys(twitter).map((prop) => (
        <meta key={`twitter${prop}`} name={`twitter:${prop}`} content={twitter[prop]} />
      ))}

      {structuredData.map((data) => (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />
      ))}

      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname || ''}`} />
    </Head>
  );
};

Meta.propTypes = {
  description: PropTypes.string,
  og: PropTypes.object,
  pathname: PropTypes.string,
  structuredData: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.object
};

export default Meta;
