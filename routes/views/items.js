var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'items';

	// Load the items
	view.query('items', keystone.list('Item').model.find().sort('sortOrder'));

	// Render the view
	view.render('items');

};