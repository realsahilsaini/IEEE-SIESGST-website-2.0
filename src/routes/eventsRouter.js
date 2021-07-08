const express = require('express');
const getData = require('../functions/getData');
const eventDivision = require('../functions/subFunctions/eventDivision');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const domainData = {
			domain: 'events'
		};
		const homeResponse = await getData(domainData);
		const eventArray = await eventDivision(homeResponse, 2);
		res.render('events', {
			title: 'EVENTS | IEEE SIESGST',
			eventArray: eventArray
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: 'Fail',
			message: 'Server Error!'
		});
	}
});

module.exports = router;
