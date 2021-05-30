const crypto = require('crypto');
const isInteger = require('lodash.isinteger');

module.exports = async (req, res) => {
	const d = req.query.d;
	const roles = req.query.roles;
	const mod = req.query.mod;
	if (
		!isInteger(d) |
		!isInteger(roles) |
		!isInteger(mod) |
		(d < 2) |
		(roles < 1)
	)
		return res.status(400).send({ error: 'Bad query parameters' });

	let result;
	for (let index = 0; index < roles; index++) {
		result += crypto.randomInt(1, d + 1);
	}
	result += mod;
	res.status(200).send({
		d,
		roles,
		mod,
		result,
	});
};
