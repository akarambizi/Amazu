import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Connects to MongoDB and handles any connection errors.
export const connectDB = async () => {
    try {
        await mongoose.connect(process?.env?.MONGO_URI ?? '');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

        // Exit process with failure
        process.exit(1);
    }
};
