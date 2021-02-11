import { connectToDatabase } from '../utils/mongoose';

export default async () => {
  const client = await connectToDatabase();

  const TagSchema = new client.Schema({
    name: {
      type: String,
      required: true
    },
    slug: String,
    description: String,
    fonts: []
  });

  try {
    return client.model('Tag');
  } catch {
    return client.model('Tag', TagSchema);
  }
};
