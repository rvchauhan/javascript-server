import * as mongoose from 'mongoose'
class UserSchema extends mongoose.Schema {
  constructor(option) {
    const userSchema = {
      id: String,
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