import Tag from '../models/tag';

export async function findAll () {
  return await (await Tag()).find().sort({ name: 'asc' }).exec();
}

export async function findBySlug (slug) {
  return await (await Tag()).findOne({ slug });
}

export async function create (req) {
  const slug = req.body.name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
  const tag = await new (await Tag())({ ...req.body, slug });
  return await tag.save();
}

export async function update (req) {
  const tag = await (await Tag()).findById(req.body.id);
  const slug = req.body.name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
  return await tag.updateOne({ ...req.body, slug });
}

export async function remove (req) {
  const tag = await (await Tag()).findById(req.body.id);
  return await tag.remove();
}

export function getTags (fonts) {
  return fonts.reduce((obj, font) => {
    font.tags.forEach((tag) => {
      const name = (tag[0].toUpperCase() + tag.substring(1)).replace('-', ' ');
      obj[tag] = name;
    });

    return obj;
  }, {});
}