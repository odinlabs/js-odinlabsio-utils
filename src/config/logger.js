const logPath = process.env.LOG_DIRECTORY || __dirname;

const levelErrorLog = process.env.LOG_ERROR_LEVEL || 'info';
const fileErrorLog = process.env.LOG_ERROR_FILE || 'errors.log';

const levelAccessLog = process.env.LOG_ACCESS_LEVEL || 'info';
const fileAccessLog = process.env.LOG_ACCESS_FILE || 'access.log';

const levelAppLog = process.env.LOG_APP_LEVEL || 'info';
const fileAppLog = process.env.LOG_APP_FILE || 'app.log';