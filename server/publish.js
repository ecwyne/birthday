Meteor.publish('entry-by-email', function (email){
	return Entries.find({email: email});
});

Meteor.publish('entries', function (){
	return Entries.find();
});