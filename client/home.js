Template.home.events({
	'keypress #emailAddress': function (e){
		$('.editEntryBtn').attr('disabled', is.not.email($('#emailAddress').val()));
		if (e.keyCode == 13 && is.email($('#emailAddress').val())){
			Meteor.call('addEmail', $('#emailAddress').val().toLowerCase(), function (err, data){
				Router.go('editEntry', {email: data});
			});
		}
	},
	'click .editEntryBtn': function (){
		Meteor.call('addEmail', $('#emailAddress').val().toLowerCase(), function (err, data){
			Router.go('editEntry', {email: data});
		});
	}
});