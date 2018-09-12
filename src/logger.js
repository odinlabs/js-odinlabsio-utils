const winston = require('winston');
const path = require('path');

// Set this to whatever, by default the path of the script.

const tsFormat = () => (new Date().toISOString());
var errorLog;
var appLog;
var accessLog;
if (process.env.NODE_ENV !== 'production') {
    errorLog = winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console({
            })
        ]
    });

    accessLog = winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console({
            })
        ]
    });

    appLog = winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console({
            })
        ]
    });
} else {
    errorLog = winston.createLogger({
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.File({
                filename: path.join(logPath, fileErrorLog),
                timestamp: tsFormat,
                level: levelErrorLog
            })
        ]
    });

    accessLog = winston.createLogger({
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.File({
                filename: path.join(logPath, fileAccessLog),
                timestamp: tsFormat,
                level: levelAccessLog
            })
        ]
    });

    appLog = winston.createLogger({
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.File({
                filename: path.join(logPath, fileAppLog),
                timestamp: tsFormat,
                level: levelAppLog
            })
        ]
    });
}
module.exports = {
    errorLog: errorLog,
    accessLog: accessLog,
    appLog: appLog,
};