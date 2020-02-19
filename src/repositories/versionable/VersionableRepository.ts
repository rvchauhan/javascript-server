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
  async findOne(id: string) {
    return await this.modelType.findOne({ email: id, deletedAt: undefined }).lean();
  };
  public create(options): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return this.modelType.create({
      _id: id,
      originalId: id,
      createdBy: options.id,
      ...options
    })
  }
  public async update(id, data) {
    let record = await this.findOne(id);
    this.delete(id);
    this.create({
      ...record,
      ...data,
      updatedAt: new Date()
    })
    return this.modelType.updateOne(id, { updatedBy: id, deletedBy: id, deletedAt: new Date() });
  }
  public list() {
    return this.modelType.find({ deletedAt: undefined })
  }
  async delete(id) {
    return await this.modelType.update(id, { deletedAt: new Date() });
  }

}