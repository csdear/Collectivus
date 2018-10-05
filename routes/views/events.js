var keystone = require('keystone');

exports = module.exports = function (req, res) {
    //test - res.send('Hello from events');

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'events';

	// Load the events
	view.query('events', keystone.list('Event').model.find().sort('sortOrder'));

	// Render the view
	view.render('events');

};