import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
      await mongoose.connect(`${process.env.URI}`)
      console.log('Conectou ao MongoDB')
    } catch (error) {
      console.error(error)
    }
}


export default connectDB;