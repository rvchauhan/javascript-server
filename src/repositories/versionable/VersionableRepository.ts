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
    return await this.modelType.findOne({ _id: id, deletedAt: undefined }).lean();
  };
  public async create(options): Promise<D> {
    const id = await VersionableRepository.generateObjectId();
    return await this.modelType.create({
      ...options,
      _id: id,
      originalId: options.originalId,
      createdBy: options.id,

    })
  }
  public async update(id, data) {
    let record = await this.findOne(id);
    await this.delete(id);
    await this.create({
      ...record,
      ...data,
      updatedAt: new Date()
    })
  }
  public async list(skip,limit,sortBy) {
    return await this.modelType.find({ deletedAt: undefined }).limit(limit).skip(skip).sort(sortBy)
  }
  async delete(id) {
    return await this.modelType.update({ originalId: id }, { deletedAt: new Date() });
  }
}
