import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'hh:mm:ss A',
        }),
        winston.format.json()
    ),
    transports: [new winston.transports.File({ filename: 'error.log', level: 'error' }), new winston.transports.File({ filename: 'combined.log' })],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({
                    format: 'hh:mm:ss A',
                }),
                winston.format.printf((info) => `${info.timestamp} - ${info.level}: ${info.message}`)
            ),
        })
    );
}

export default logger;
