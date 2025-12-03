import bcrypt from 'bcrypt-nodejs';

import { connectToDatabase } from '../utils/mongoose';

export default async () => {
  const client = await connectToDatabase();

  const UserSchema = new client.Schema({
    local: {
      username: String,
      password: String,
    },
  });

  UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  try {
    return client.model('User');
  } catch {
    return client.model('User', UserSchema);
  }
};
