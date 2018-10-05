var keystone = require('keystone');
var Types = keystone.Field.Types;

var Event = new keystone.List('Event', {
	autokey: { from: 'key', path: 'key', unique: true, index: true },
	// map: {name: 'name' },
});

Event.add({
    name: { type: String, required: true, initial: true },
    description: { type: Types.Html, wysiwyg: true },
    startTime: { type: Types.Datetime, required: true, initial: true, index: true },
    endTime: { type: Types.Datetime, required: true, initial: true, index: true },
    location: { type: Types.Location, initial: true },
    published: { type: Boolean },
    owner: { type: Types.Relationship, ref: 'User' },
    image: { type: Types.CloudinaryImage },
    publishDate: { type: Types.Date, index: true }
  });

  //virtual method determines whether class can access keystone admin or not.  
  Event.schema.virtual('canAccessKeystone').get(function () {
    return true;
  });

  //Affords us a save button, but appears mostly a convenience method
  //to set publish date now (when user didn't set one in the publish date field but they have checked 'published')
  Event.schema.pre('save', function (next) {
    let event = this;
    if (event.isModified('published') && event.published) {
      this.publishDate = Date.now();
    }
    return next();
  });

  
Event.defaultColumns = 'displayName, email';
Event.register();

