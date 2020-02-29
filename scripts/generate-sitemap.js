const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../app/config/config')();
const Font = require('../app/models/font');
const tagHelper = require('../app/controllers/helpers/tags');
const date = new Date().toISOString().substring(0, 10);
const outputPath = path.join(__dirname, '../public');
const outputFile = 'sitemap.xml';

let output = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n  <url>\n    <loc>https://www.laurenashpole.com</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/fonts</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/fonts/licensing</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/fonts/eula</loc>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/contact</loc>\n  </url>\n';

mongoose.connect(config.db, (err) => {
  if (err) throw err;

  Font.find().sort({ name: 'asc' }).exec((err, fonts) => {
    if (err) {
      console.log(err)
      process.exit();
    }

    const tags = tagHelper.getTags(fonts);

    fonts.forEach((font) => {
      output += '  <url>\n    <loc>https://www.laurenashpole.com/fonts/' + font.slug + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n  <url>\n    <loc>https://www.laurenashpole.com/amp/fonts/' + font.slug + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n';
    });

    Object.keys(tags).forEach((tag) => {
      output += '  <url>\n    <loc>https://www.laurenashpole.com/fonts/tagged/' + tag + '</loc>\n    <lastmod>' + date + '</lastmod>\n  </url>\n';
    });

    output += '</urlset>'
    fs.writeFileSync(`${outputPath}/${outputFile}`, output);
    process.exit();
  });
});
