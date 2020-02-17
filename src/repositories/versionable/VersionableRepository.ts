import * as mongoose from 'mongoose'
import { idText } from 'typescript';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;
  constructor(modelType) {
    this.modelType = modelType;
  }
  count(): mongoose.Query<Number> {
    return this.modelType.countDocuments();
  };
  findOne(query): mongoose.Query<D> {
    return this.modelType.findOne(query);
  };
  public create(options): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return this.modelType.create({
      ...options,
      _id: id,
      originalId: id
    })
  }
  public update(id, data) {
    console.log(id)
    this.modelType.findById(id)
      .then(user => {
        const updatedData = Object.assign(user,data);
        this.updateAndCreate(updatedData)
      })
      .catch(error => {
        error;
      });
    return this.modelType.updateOne(id, { updatedBy: id });
  }
  updateAndCreate(updatedData): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    const newObject = updatedData;
    delete newObject['_doc']._id;
    const Userid = newObject['_doc'].originalId;
    return this.modelType.create({
      ...newObject['_doc'],
      _id: id,
      originalId: Userid,
      createdBy: Userid,
      createdAt: new Date(),
      updatedAt: new Date(),
      updatedBy: Userid
    });
  }
  public list() {
    return this.modelType.find({ deletedAt: undefined })
  }
  async delete(_id) {
    const Oid = await this.modelType.findOne({ _id })
    const { originalId } = Oid['_doc'];
    const deleteddata = {
      deletedBy: originalId,
      deletedAt: new Date()
    }
    return await this.modelType.update(_id, deleteddata);
  }

}