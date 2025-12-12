import Head from 'next/head';
import { useRouter } from 'next/router';

import Content from '../../components/fonts/Content';
import Layout from '../../components/layout/Layout';
import { fetchFont, fetchFonts } from '../../utils/sanity';
import Custom404 from '../404';

const Font = ({ font }) => {
  const { query } = useRouter();

  if (!font.active && !query.preview) {
    return <Custom404 />;
  }

  const og = {
    type: 'product',
    title: font.name,
    price: `$${font.price}`,
    'price:currency': 'USD',
    availability: 'instock',
    image: font.images.gallery[0].url,
  };

  const structuredData = `
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      "name": "${font.name}",
      "sku": "${font._id}",
      "image": "${font.images.gallery[0].url}",
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

  return (
    <Layout
      meta={{
        title: `${font.name} - Fonts`,
        description: `Download the ${font.name} font free for personal use or buy a license for all your commercial use needs`,
        pathname: `fonts/${font.slug}`,
        og,
        structuredData,
      }}
    >
      <Head>
        <style dangerouslySetInnerHTML={{ __html: font.previews.css }} />
      </Head>

      <Content font={font} />
      <div id="modalRoot" />
    </Layout>
  );
};

export async function getStaticPaths() {
  const fonts = await fetchFonts();

  return {
    paths: fonts.slice(0, 5).map((font) => {
      return { params: { slug: font.slug } };
    }),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const font = await fetchFont(params.slug);

  return {
    props: {
      font: JSON.parse(JSON.stringify(font)),
    },
    revalidate: 604800,
  };
}

export default Font;
