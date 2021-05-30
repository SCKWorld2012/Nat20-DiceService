/** @format */

const express = require('express');

const role = require('./endpoints/role');

//this module is used for authentication and handles requests to /auth
const router = express.Router();

router.get(`/role`, role);

module.exports = router;
