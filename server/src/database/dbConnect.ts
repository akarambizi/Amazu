import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { logger } from '../monitor/logger';
import { getMongoUri } from '../utils';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Connects to MongoDB and handles any connection errors.
export const connectDB = async () => {
    try {
        logger.info('Connecting to MongoDB...');
        const mongoUri = getMongoUri();
        await mongoose.connect(mongoUri);
        logger.info('MongoDB Connected');
    } catch (error) {
        logger.error('Error connecting to MongoDB:', error);

        // Exit process with failure
        process.exit(1);
    }
};
