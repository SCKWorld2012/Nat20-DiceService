/** @format */

const winston = require('winston');

//module for handling errors and exceptions
module.exports = function () {
	//logging an uncaught exception before shuting down the application
	process.on('uncaughtException', ex => {
		winston.error(ex.message, ex);
		process.exit(1);
	});
	//logging an unhanled promise rejection before shuting down the application
	process.on('unhandledRejection', ex => {
		winston.error(ex.message, ex);
		process.exit(1);
	});
};
