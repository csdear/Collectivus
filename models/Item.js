var keystone = require('keystone');
var Types = keystone.Field.Types;

// var Item = new keystone.List('Item', {
// 	map: { name: 'title' },
// 	autokey: { from: 'title', path: 'key', unique: true },
// });
var Item = new keystone.List('Item', {
	map: { name: 'title' },
	autokey: { from: 'ID', path: 'key', unique: true },
});


Item.add({
	title: { type: String, required: true },
	owner: { type: Types.Relationship, ref: 'User' },
	createdAt: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 400 }
});

Item.defaultColumns = 'title, owner|20%, author, createdAt|15%'
Item.register();