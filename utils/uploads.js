import fs from 'fs';
import path from 'path';

const UPLOADS_DIRECTORY = './public/uploads/misc/';

export async function create (req) {
  if (!req.files) {
    return null;
  }

  return await req.files.map(async (file) => {
    return await fs.renameSync(file.path, path.resolve(UPLOADS_DIRECTORY, file.originalname));
  });
}


export async function remove (req) {
  const exists = await fs.existsSync(path.resolve(UPLOADS_DIRECTORY, req.body.id));

  if (!exists) {
    return null;
  }

  return await fs.unlinkSync(path.resolve(UPLOADS_DIRECTORY, req.body.id));
}