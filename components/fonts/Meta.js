import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ font }) => {
  const getStructuredData = (font) => {
    return `
      {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": "${font.name}",
        "sku": "${font._id}",
        "image": "${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${font.image_collection[0]}",
        ${font.description ? '"description": "' + font.description.replace(/<br\/>/g, '').replace(/\s+/g, ' ') + '",' : ''}
        "offers": {
          "@type": "Offer",
          "availability": "http://schema.org/InStock",
          "price": "${font.price}",
          "priceCurrency": "USD",
          "url": "${process.env.NEXT_PUBLIC_BASE_URL}fonts/${font.slug}"
        },
        "brand": {
          "@type": "Thing",
          "name": "Lauren Ashpole"
        }
      }
    `;
  };

  return (
    <Head>
      <meta property="og:type" content="product" />
      <meta property="og:title" content={font.name} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}fonts/${font.slug}`} />
      <meta property="og:site_name" content="Lauren Ashpole" />
      <meta property="og:price:amount" content={`$${font.price}`} />
      <meta property="og:price:currency" content="USD" />
      <meta property="og:availability" content="instock" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${font.image_collection[0]}`} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getStructuredData(font) }} />

      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}fonts/${font.slug}`} />
      <style dangerouslySetInnerHTML={{ __html: font.preview_css }} />
    </Head>
  );
};

Meta.propTypes = {
  font: PropTypes.object
};

export default Meta;