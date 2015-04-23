Template.home.events({
	'keyup #emailAddress': function (){
		$('.editEntryBtn').attr('disabled', is.not.email($('#emailAddress').val()));
	},
	'click .editEntryBtn': function (){
		Meteor.call('addEmail', $('#emailAddress').val().toLowerCase(), function (err, data){
			Router.go('editEntry', {email: data});
		});
	}
});