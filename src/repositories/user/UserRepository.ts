import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel, } from './UserModel'
import Iusercreate from '../entities/Iusercreate';
class UserRepository {
  private userModel: mongoose.Model<IUserModel>;
  constructor() {
    this.userModel = userModel;
  }
  create = (data: Iusercreate) => {
    return this.userModel.create(data)
  }
  count = () => {
    return this.userModel.countDocuments();
  }
  findone = (data) => {
    return this.userModel.findById(data);
  }
  update = (id, data) => {
    return this.userModel.updateOne(id, data);
  }
  list = () => {
    return this.userModel.find();
  }
  delete = (id) => {
    return this.userModel.findByIdAndDelete(id);
  }
}
export default UserRepository