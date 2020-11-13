export function getTags (fonts) {
  return fonts.reduce((obj, font) => {
    font.tags.forEach((tag) => {
      const name = (tag[0].toUpperCase() + tag.substring(1)).replace('-', ' ');
      obj[tag] = name;
    });

    return obj;
  }, {});
}