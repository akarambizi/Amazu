import winston from 'winston';

const customFormat = winston.format.printf((info) => `${info.timestamp} - ${info.level}: ${info.message}`);

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'hh:mm:ss A',
        }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error', format: customFormat }),
        new winston.transports.File({ filename: 'logs/combined.log', format: customFormat }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({
                    format: 'hh:mm:ss A',
                }),
                customFormat
            ),
        })
    );
}

export default logger;
