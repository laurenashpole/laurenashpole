exports.index = function (data, path) {
  path = path.toLowerCase().replace(/^\/|\/$/g, '');

  if (!path) {
    return templates.base();
  }

  if (path.indexOf('contact') !== -1) {
    return templates.base('Contact');
  }

  if (path.indexOf('fonts') !== -1) {
    const pathArray = path.split('/');

    if (pathArray[2]) {
      if (pathArray[2] === 'confirm') {
        return templates.base('Thanks for your purchase! - Fonts');
      }
    }

    if (pathArray[1]) {
      if (pathArray[1] === 'eula') {
        return templates.base('End-User Licensing Agreement - Fonts');
      }

      if (pathArray[1] === 'licensing') {
        return templates.base('Licensing - Fonts');
      }

      for (let i = 0; i < data.fonts.length; i++) {
        if (data.fonts[i].slug === pathArray[1]) {
          let meta = templates.base(`${data.fonts[i].name} - Fonts`, `Download the ${data.fonts[i].name} font free for personal use or buy a license for all your commercial use needs`);
          meta += templates.amp_url(data.fonts[i].slug);
          meta += templates.product_og(data.fonts[i]);
          meta += templates.product_schema(data.fonts[i]);
          return meta;
          break;
        }
      }

      return templates.base('Page Not Found');
    }

    return templates.base('Fonts');
  }

  return templates.base('Page Not Found');
};

exports.amp = function (product) {
  let meta = templates.base(`${product.name} - Fonts`, `Download the ${product.name} font free for personal use or buy a license for all your commercial use needs`);
  meta += templates.product_og(product);
  meta += templates.product_schema(product);
  return meta;
};

const templates = {
  base: (title, desc) => {
    return `
      <title>${title ? title + ' - ' : ''}Lauren Ashpole</title>
      <meta name="description" content="${desc ? desc : 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.'}" />
    `;
  },
  amp_url: (slug) => {
    return `<link rel="amphtml" href="https://www.laurenashpole.com/amp/fonts/${slug}" />`;
  },
  product_og: (product) => {
    return `
      <meta property="og:type" content="product" />
      <meta property="og:title" content="${product.name}" />
      <meta property="og:url" content="https://www.laurenashpole.com/fonts/${product.slug}" />
      <meta property="og:site_name" content="Lauren Ashpole" />
      <meta property="og:price:amount" content="${product.price}" />
      <meta property="og:price:currency" content="USD" />
      <meta property="og:availability" content="instock" />
      <meta property="og:image" content="https://www.laurenashpole.com/uploads/images/${product.image_collection[0]}" />
    `;
  },
  product_schema: (product) => {
    return `
      <script type="application/ld+json">
        {
          "@context": "http://schema.org/",
          "@type": "Product",
          "name": "${product.name}",
          "sku": "${product.id}",
          "image": "https://www.laurenashpole.com/uploads/images/${product.image_collection[0]}",
          ${product.description ? '"description": "' + product.description + '",' : ''}
          "offers": {
            "@type": "Offer",
            "availability": "http://schema.org/InStock",
            "price": "${product.price}",
            "priceCurrency": "USD",
            "url": "https://www.laurenashpole.com/fonts/${product.slug}"
          },
          "brand": {
            "@type": "Thing",
            "name": "Lauren Ashpole"
          }
        }
      </script>
    `;
  }
};