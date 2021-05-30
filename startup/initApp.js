/** @format */

const helmet = require('helmet');
const express = require('express');
const dice = require('../routes/dice');

//this modules handles the initialization of the app
module.exports = function (app) {
	//using the json format for requests and setting general headers for requests via helmet
	app.use(express.json());
	app.use(helmet());

	//telling the app which router to user for which route
	app.use('/dice', dice);
};
