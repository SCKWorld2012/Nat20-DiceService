/** @format */

const winston = require('winston');
//function to set up logging
module.exports = function () {
	//Logging errors to the console
	winston.add(
		new winston.transports.Console({
			level: 'silly',
		})
	);
};
