/** @format */

const cors = require('cors');

//module for configuring cors
module.exports = function (app) {
	//not the best in terms of security, but this is not a "productive" application anyway
	var corsOptions = {
		origin: '*',
		allowedHeaders: ['Content-Type', 'x-auth-token'],
	};

	app.use(cors(corsOptions));
};
