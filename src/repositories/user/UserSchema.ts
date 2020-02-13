import * as mongoose from 'mongoose';
import VersionableSchema from './../versionable/VersionableSchema'
class UserSchema extends VersionableSchema {
  constructor(option) {
    const userSchema = {
      __id: String,
      name: String,
      address: String,
      email: String,
      dob: Date,
      mobile_number: Number,
      hobbies: [String],
    }
    super(userSchema, option);
  }
}
export default UserSchema;