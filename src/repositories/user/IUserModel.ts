import * as mongoose from 'mongoose'
export default interface Iusermodel extends mongoose.Document {
  name: string;
  address: string;
  dob: Date;
  mobile_number: number;
  email: string;
  hobbies: string[]
}