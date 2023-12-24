import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { logger } from '../utils/logger';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const getMongoUri = () => {
    const isDocker = process.env.DOCKER_ENV === 'true';
    const mongoUri = isDocker ? process?.env?.MONGO_URI_DOCKER : process?.env?.MONGO_URI_LOCAL;
    return mongoUri ?? '';
};

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
