import Head from 'next/head';
import PropTypes from 'prop-types';
import { findAll, findBySlug } from '../../utils/fonts';
import { findByIds as findTagsByIds } from '../../utils/tags';
import Layout from '../../components/layout/Layout';
import HeroImage from '../../components/fonts/HeroImage';
import Content from '../../components/fonts/Content';

const Font = ({ font, tags }) => {
  const og = {
    type: 'product',
    title: font.name,
    price: `$${font.price}`,
    'price:currency': 'USD',
    availability: 'instock',
    image: `${process.env.NEXT_PUBLIC_BASE_URL}uploads/images/${font.image_collection[0]}`
  };

  const structuredData = `
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

  return (
    <Layout meta={{ title: `${font.name} - Fonts`, description: `Download the ${font.name} font free for personal use or buy a license for all your commercial use needs`, pathname: `fonts/${font.slug}`, og, structuredData }}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: font.preview_css }} />
      </Head>

      <HeroImage src={`/uploads/images/${font.image}`} alt={`${font.name} Sample`} />
      <Content font={font} tags={tags} />
      <div id="modalRoot" />
    </Layout>
  );
};

export async function getStaticPaths () {
  const fonts = await findAll(3, { $natural: -1 });

  return {
    paths: fonts.map((font) => {
      return { params: { slug: font.slug }};
    }),
    fallback: 'blocking'
  };
}

export async function getStaticProps ({ params }) {
  const font = await findBySlug(params.slug);
  const tags = await findTagsByIds(font.tags);

  return {
    props: {
      font: JSON.parse(JSON.stringify(font)),
      tags: JSON.parse(JSON.stringify(tags))
    },
    revalidate: 604800
  };
}

Font.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array
};

export default Font;