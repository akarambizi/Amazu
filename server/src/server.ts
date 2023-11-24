import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
    await mongoose.connect(process?.env?.MONGO_URI ?? '');
    console.log('MongoDb Connected');
};
