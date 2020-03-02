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
<<<<<<< HEAD
  findOne(id: string): mongoose.Query<D> {
    return this.modelType.findOne({id:Number}).lean();
  };
  public create(options): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return this.modelType.create({
      ...options,
=======
  async findOne(id: string) {
    return await this.modelType.findOne({ _id: id, deletedAt: undefined }).lean();
  };
  public async create(options): Promise<D> {
    const id = await VersionableRepository.generateObjectId();
    return await this.modelType.create({
>>>>>>> 5c3c3c93bac60a71fd9f0f7234a2ec7cfb059572
      _id: id,
      originalId: options.id,
      createdBy: options.id
      
    })
  }
  public async update(id, data) {
    let record = await this.findOne(id);
<<<<<<< HEAD
    this.create({
=======
    await this.delete(id);
    await this.create({
>>>>>>> 5c3c3c93bac60a71fd9f0f7234a2ec7cfb059572
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