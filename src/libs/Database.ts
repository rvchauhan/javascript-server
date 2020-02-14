import * as mongoose from "mongoose";
import SeedData from './seedData'
class Database {
  static open = async (mongoURL: string) => {
     const dbConnection= await mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true })
            if(dbConnection) {
              console.log("DB is connected successfully");
            }
           return await SeedData();
          }
  static disconnect = () => {
    console.log("Disconnect mongoDb");
    return mongoose.connection.close();
  }
}
export default Database;