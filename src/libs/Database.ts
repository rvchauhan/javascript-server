import * as mongoose from "mongoose";
import SeedData from './seedData'

class Database {
  static open = async (mongoURL: string) => {
    const connection = await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    if (connection) {
      console.log("DB is connected successfully")
      return await SeedData();
    }
  }
  static disconnect = () => {
    mongoose.connection.close();
    console.log("Disconnect mongoDb");
  };
}
export default Database;
