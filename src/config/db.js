import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb://localhost:27017/Expedicao`)
      console.log('Conectou ao MongoDB')
    } catch (error) {
      console.error(error)
    }
}


export default connectDB;