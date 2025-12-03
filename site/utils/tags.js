import Tag from '../../models/tag';

export async function findAll () {
  return await (await Tag()).find().sort({ name: 'asc' }).exec();
}

export async function findBySlug (slug) {
  return await (await Tag()).findOne({ slug });
}

export async function findByIds (ids) {
  return await (await Tag()).find({ _id: { $in: ids }}).sort({ name: 'asc' });
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

export async function addTaggedFont (id, fontId) {
  if (!id || !fontId) {
    return;
  }

  const tag = await (await Tag()).findById(id);
  const tagJSON = JSON.parse(JSON.stringify(tag));
  const fonts = [...tagJSON.fonts, fontId];
  return await tag.updateOne({ ...tagJSON, fonts });
}

export async function removeTaggedFont (id, fontId) {
  const tag = await (await Tag()).findById(id);
  const tagJSON = JSON.parse(JSON.stringify(tag));
  const fonts = tagJSON.fonts.filter((id) => id !== fontId);
  return await tag.updateOne({ ...tagJSON, fonts });
}