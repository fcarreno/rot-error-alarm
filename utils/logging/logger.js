const bunyan = require('bunyan');
const os = require('os');
const path = require('path');

// Assumes logging takes place on the same box - and logs target folder/directory exists...
// Otherwise separate logic may be required....
let logger = bunyan.createLogger({
    name: 'error',
    streams: [{
        path: process.env.SERVER_ERROR_LOG_FILE_PATH || path.resolve(os.tmpdir(), 'APIServerError.log'),
        level: 'error'
    }]
});


// Just simple logging using logger defaults when object is a js Error object (including custom message).
// Assumes no need to uniquely identify requests (e.g.: via dynamically generated uid) and not logging http req either (based on provided function signature)
// Does not consider any required log files rotation logic either...
exports.logError = (error) => {
    logger.error(error);
}