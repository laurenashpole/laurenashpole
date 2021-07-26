import { findAll as findAllFonts } from '../utils/fonts';
import { findAll as findAllTags }  from '../utils/tags';

const Sitemap = () => {};

export async function getServerSideProps ({ res }) {
  const fonts = await findAllFonts();
  const tags = await findAllTags();
  const date = new Date().toISOString().substring(0, 10);

  const getUrls = (items, path) => {
    return items.map((item) => {
      return `
        <url>
          <loc>${process.env.NEXT_PUBLIC_BASE_URL}${path}/${item.slug}</loc>
          <lastmod>${date}</lastmod>
        </url>
      `;
    }).join('');
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
        <lastmod>${date}</lastmod>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}contact</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}fonts</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}fonts/licensing</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}fonts/eula</loc>
      </url>

      ${getUrls(fonts, 'fonts')}
      ${getUrls(fonts, 'amp/fonts')}
      ${getUrls(tags, 'fonts/tagged')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default Sitemap;