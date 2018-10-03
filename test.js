// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

const keys = require('./config/keys');


// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'collectivus',
	'brand': 'collectivus',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'mongo': keys.mongoURI,
	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();


// var user = req.user;
console.log(this.locals.user);
// Create a couple of test items
// keystone.createItems({
//     Item: [
//       { description: 'This is a test.', owner: user.id }
//     ]
// });
// keystone.createItems({
//     Item: [
//       { description: 'And another test.', owner: '123' }
//     ]
// });

// debugger;

var Item = keystone.list('Item');

  Item.model.find()
  .where('description', 'This is a test.')
  .exec()
  .then(function (items) { //first promise fulfilled
    //return another async promise
    console.log(items)
  }, function (err) { //first promise rejected
    throw err;
  }).then(function (result) { //second promise fulfilled
    //do something with final results
    console.log(result);
  }, function (err) { //something happened
    //catch the error, it can be thrown by any promise in the chain
    console.log(err);
  });

  