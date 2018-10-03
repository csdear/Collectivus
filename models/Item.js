var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Item Model
 * ==========
 */

var Item = new keystone.List('Item', {
    autokey: { from: 'description', path: 'key', unique: true },
});

Item.add({
	description: { type: String, required: true, initial: false },
	owner: { type: Types.Relationship, ref: 'User', index: true },
	createdDate: { type: Types.Date, index: true, dependsOn: { state: 'created' } },
	image: { type: Types.CloudinaryImage },
});

Item.register();
