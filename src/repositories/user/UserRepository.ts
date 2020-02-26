import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel, userSchema, } from './UserModel'
import Iusercreate from '../entities/Iusercreate';
import VersionableRepository from '../versionable/VersionableRepository'
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  private userModel: mongoose.Model<IUserModel>
  constructor() {
    super(userModel)
  }
  create(data: Iusercreate) {
    return super.create(data)
  };
  count() {
    return super.count();
  };
  async findone(data) {
    return await super.findOne(data);
  };
  update(id, data) {

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