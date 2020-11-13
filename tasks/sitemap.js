const fs = require('fs');
const path = require('path');

const fontsPath = path.join(__dirname, '../.next/server/pages/fonts/');
const tagsPath = path.join(__dirname, '../.next/server/pages/fonts/tagged/');
const date = new Date().toISOString().substring(0, 10);
const outputPath = path.join(__dirname, '../public');
const outputFile = 'sitemap.xml';

function generateSitemap () {
  let output = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n  <url>\n    <loc>https://www.laurenashpole.com</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/contact</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/fonts</loc>\n  </url>\n';

  fs.readdirSync(fontsPath).forEach((file) => {
    const fileArray = file.split('.');

    if (fileArray[1] === 'html') {
      output += '  <url>\n    <loc>https://www.laurenashpole.com/fonts/' + fileArray[0] + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n';

      if (fileArray[0] !== 'eula' && fileArray[0] !== 'licensing') {
        output += '  <url>\n    <loc>https://www.laurenashpole.com/amp/fonts/' + fileArray[0] + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n';
      }
    }
  });

  fs.readdirSync(tagsPath).forEach((file) => {
    const fileArray = file.split('.');

    if (fileArray[1] === 'html') {
      output += '  <url>\n    <loc>https://www.laurenashpole.com/fonts/tagged/' + fileArray[0] + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n';
    }
  });

  output += '</urlset>';
  fs.writeFileSync(`${outputPath}/${outputFile}`, output);
}

generateSitemap();