Meteor.methods({
	addEmail: function (email){
		check(email, String);
		if (!Entries.findOne({email: email})){
			Entries.insert({email: email});
		}
		return email
	}
});