import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel, userSchema, } from './UserModel'
import Iusercreate from '../entities/Iusercreate';
import VersionableRepository from '../versionable/VersionableRepository'
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  private userModel: mongoose.Model<IUserModel>
  constructor() {
    super(userModel)
    this.userModel = userModel;
  }
  create(data: Iusercreate) {
    return super.create(data)
  };
  count() {
    return super.count();
  };
  findone(data) {
    return super.findOne(data);
  };
  update(id, data) {
    console.log("_--------",data)
    return super.update(id, data);
  };
  list() {
    return userModel.find();
  };
  delete(id) {
    return super.delete(id);
  };
}
export default UserRepository