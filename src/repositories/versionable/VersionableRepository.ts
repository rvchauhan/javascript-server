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
    return await this.modelType.findOne().lean();
  };

  public async create(options): Promise<D> {
    const id = await VersionableRepository.generateObjectId();
    delete options._id;
    return await this.modelType.create({
      _id: id,
      originalId: id,
      createdBy: id,
      ...options,

    })
  }

  public async update(id, data) {
    let record = await this.findOne(id);
    await this.delete(id);
    await this.create({
      ...record,
      ...data,
      updatedAt: new Date(),
      deletedAt:undefined
    })
  }

  public async list(skip, limit, sortBy, search) {
    console.log(search)
    return await this.modelType.find({ deletedAt: undefined, ...search }).limit(limit).skip(skip).sort(sortBy)
  }

  async delete(id) {
    return await this.modelType.update({ originalId: id }, { deletedAt: new Date() });
  }
}
