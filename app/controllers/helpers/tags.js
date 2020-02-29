module.exports.getTags = function (fonts) {
  return fonts.reduce((acc, cur) => {
    if (cur.tags.length) {
      cur.tags.forEach((tag) => {
        const slug = tag.replace(/\s+/g, '-').toLowerCase();
        const name = tag[0].toUpperCase() + tag.substring(1);

        const font = {
          _id: cur._id,
          name: cur.name,
          slug: cur.slug,
          image: cur.image
        };

        if (acc[slug] && acc[slug].fonts) {
          acc[slug].fonts.push(font);
        } else {
          acc[slug] = {
            name: name,
            fonts: [font]
          };
        }
      });
    }

    return acc;
  }, {});
};