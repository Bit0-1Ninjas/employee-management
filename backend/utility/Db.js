import mongoose from "mongoose";
import { config } from "dotenv";
config();
class Db {
  static async connectToDb() {
    try {
      if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL environment variable is not defined");
      }
      const connection = await mongoose.connect(process.env.MONGO_URL, {
        dbName: "employeManagement",
      });
      console.log(`Connected to db ${connection}`);
    } catch (error) {
      console.log(`Error connecting DB: ${error}`);
      process.exit(1);
    }
  }
}

export default Db;
