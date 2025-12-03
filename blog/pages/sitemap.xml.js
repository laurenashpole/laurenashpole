import { find } from '../utils/sanity';
import { FEATURED_TAGS } from '../constants/featuredTags';

const Sitemap = () => {};

export async function getServerSideProps ({ res }) {
  const response = await find(null);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
        <changefreq>weekly</changefreq>
        <lastmod>${new Date().toISOString().substring(0, 10)}</lastmod>
      </url>

      ${response.posts.map((post) => `
        <url>
          <loc>${process.env.NEXT_PUBLIC_BASE_URL}${post.pathname}</loc>
          <lastmod>${new Date(post.date).toISOString().substring(0, 10)}</lastmod>
        </url>
      `).join('')}

      ${FEATURED_TAGS.map((tag) => `
        <url>
          <loc>${process.env.NEXT_PUBLIC_BASE_URL}/tagged/${tag.slug}</loc>
          <lastmod>${new Date().toISOString().substring(0, 10)}</lastmod>
        </url>
      `).join('')}
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