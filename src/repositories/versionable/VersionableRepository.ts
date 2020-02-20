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
  findOne(id: string): mongoose.Query<D> {
    return this.modelType.findOne({id:Number}).lean();
  };
  public create(options): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return this.modelType.create({
      ...options,
      _id: id,
      originalId: options.id,
      createdBy: options.id
      
    })
  }
  public async update(id, data) {
    let record = await this.findOne(id);
    this.create({
      ...record,
      ...data,
      updatedAt: new Date()
    })
    return this.modelType.updateOne(id, { updatedBy: id, deletedBy: id, deletedAt: new Date() });
  }
  public async list(skip,limit,sortBy) {
    return await this.modelType.find({ deletedAt: undefined }).limit(limit).skip(skip).sort(sortBy)
  }
  async delete(id) {
    return await this.modelType.update(id, { deletedAt: new Date() });
  }

}