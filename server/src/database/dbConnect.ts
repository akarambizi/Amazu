import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { logger } from '../utils/logger';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Connects to MongoDB and handles any connection errors.
export const connectDB = async () => {
    try {
        logger.info('Connecting to MongoDB...');
        await mongoose.connect(process?.env?.MONGO_URI ?? '');
        logger.info('MongoDB Connected');
    } catch (error) {
        logger.error('Error connecting to MongoDB:', error);

        // Exit process with failure
        process.exit(1);
    }
};
