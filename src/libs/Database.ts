import * as mongoose from "mongoose";
import SeedData from './seedData'
class Database {
  static open = (mongoURL: string) => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(mongoURL,
          { useNewUrlParser: true, useUnifiedTopology: true },
          err => {
            if (err) {
              console.log("Error in mongoDB connection");
              reject(err);
            }
            resolve();
            SeedData()
            .then (()=> {
            resolve(console.log("DB is connected successfully"));
            }) 
            .catch(()=> {
              console.log("DB is connected successfully");
              })
             } ) });
  };
  static disconnect = () => {
    mongoose.connection.close();
    console.log("Disconnect mongoDb");
  };
}
export default Database;