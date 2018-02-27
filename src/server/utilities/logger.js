const winston = require('winston');
// winston.emitErrs = true;

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
};
