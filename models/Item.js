var keystone = require('keystone');
var Types = keystone.Field.Types;

// var Item = new keystone.List('Item', {
// 	map: { name: 'title' },
// 	autokey: { from: 'title', path: 'key', unique: true },
// });
var Item = new keystone.List('Item', {
	autokey: { from: 'key', path: 'key', unique: true, index: true },
	// map: {name: 'name' },
});


Item.add({
	name: { type: String, required: true },
	owner: { type: Types.Relationship, ref: 'User' },
	createdAt: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 400 }
});

Item.defaultColumns = 'name, owner|20%, createdAt|15%, image'
Item.register();
