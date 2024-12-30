import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const mongoURI = process.env.MONGODB_URI

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI);    
  } catch (e) {
    console.log('Ha ocurrido un error', e);
  }
}

export default connectMongo;