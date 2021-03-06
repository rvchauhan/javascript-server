import * as mongoose from 'mongoose';
import VersionableSchema from './../versionable/VersionableSchema'
class UserSchema extends VersionableSchema {
  constructor(option) {
    const userSchema = {
      _id: String,
      name: String,
      address: String,
      email: String,
      dob: Date,
      role: String,
      mobile_number: Number,
      hobbies: [String],
      password: String
    }
    super(userSchema, option);
  }
}
export default UserSchema;
