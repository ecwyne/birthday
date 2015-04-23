if (Meteor.settings.gmail){
	process.env.MAIL_URL = Meteor.settings.gmail
}

Meteor.methods({
	addEmail: function (email){
		check(email, String);
		if (!Entries.findOne({email: email})){
			Entries.insert({email: email});
			Email.send({
				to: email,
				from: 'ecwyne@gmail.com',
				subject: 'Kathleen\'s Birthday Notes',
				html: Assets.getText('email.html').replace('EMAIL_ADDRESS', email)
			});
		}
		return email;
	}
});