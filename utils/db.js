import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DB_URI;

const DbConnector = async () => {
  await mongoose.connect(URI);
  console.log("Db fired successfully");
};

export default DbConnector;
