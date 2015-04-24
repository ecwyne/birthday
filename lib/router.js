Router.route('/', function (){
	this.render('home');
});

Router.route('/edit/:email', {
	waitOn: function (){
		return Meteor.subscribe('entry-by-email', this.params.email);
	},
	data: function (){
		return Entries.findOne({email: this.params.email});
	},
	name: 'editEntry'
});

Router.route('/birthday',{
	waitOn: function (){
		return Meteor.subscribe('entries');
	},
	data: function (){
		return {
			entries: Entries.find(),
			admin: this.params.query.admin
		}
	},
	name: 'gallery'
});