export const getMongoUri = () => {
    const isDocker = process.env.DOCKER_ENV === 'true';
    const mongoUri = isDocker ? process?.env?.MONGO_URI_DOCKER : process?.env?.MONGO_URI_LOCAL;
    return mongoUri ?? '';
};

export const getZipkinUrl = (path: string) => {
    const isDocker = process.env.DOCKER_ENV === 'true';
    const url = isDocker ? 'http://zipkin:9411' : 'http://localhost:9411';
    return `${url}/${path}`;
};
