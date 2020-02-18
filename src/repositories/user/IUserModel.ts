import * as mongoose from 'mongoose'
import IVersionableDocuments from './../versionable/ IVersionableDocument'
export default interface Iusermodel extends IVersionableDocuments {
  name: string;
  address: string;
  dob: Date;
  mobile_number: number;
  email: string;
  hobbies: string[]
}