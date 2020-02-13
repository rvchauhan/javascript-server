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
    console.log
    this.modelType
      .findById(id)
      .then(user => {
        const updatedData = Object.assign(user, data);
        this.updateAndCreate(updatedData);
        console.log('before update')
      })
      .catch(error => {
        throw error;
      });
    const deleteddata = {
      deletedBy: id,
      deletedAt: new Date()
    };
    return this.modelType.updateOne(id, deleteddata);
  }
  public updateAndCreate(options) {
    console.log(options);
    const id = VersionableRepository.generateObjectId();
    return this.modelType.create({
      originalId: options.originalId,
      ...options,
      _id: id,
      createdBy: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      updatedBy: options.id
    });
  }
  public list() {
    return this.modelType.find({ deletedAt: undefined })
  }
public delete(id) {
  const deleteddata ={
  deletedBy: id,
  deletedAt: new Date()
  };
  return this.modelType.update( id,deleteddata);
  }
}