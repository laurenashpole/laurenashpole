import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

export async function connectToDatabase () {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await mongoose.connect(`${uri}${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  cachedClient = client;
  return client;
}