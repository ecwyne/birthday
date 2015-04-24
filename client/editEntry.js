Template.editEntry.helpers({
	photoUpOptions: function (){
		return {
			minDisplayWidth: '100px',
			minDisplayHeight: '100px',
			crop: true,
			jCrop: {
				aspectRatio: 1
			},
			loadImage: {
				maxWidth: 300,
				maxHeight: 300,
				canvas: true
			},
			showInfo: false,
			//showClear: true,
			callback: function (err, photo){
				if (!err){
					Entries.update(Router.current().data()._id, {$set: {photo: photo.src}});
					Flash.success('save-photo', 'Saved!', 3000)
				}
			}
		}
	}
});

Template.editEntry.events({
	'change .form-control': function (e){
		if ($(e.currentTarget).val()){
			var obj = {};
			obj[e.currentTarget.id] = $(e.currentTarget).val();
			Entries.update(Router.current().data()._id, {$set: obj});
			Flash.success('save-' + e.currentTarget.id, 'Saved!', 3000);
		} else {
			$(e.currentTarget).val(Router.current().data()[e.currentTarget.id])
			Flash.info('save-' + e.currentTarget.id, 'Not Saved', 3000);
		}
	},
	'click .saveBtn': function (){
		$('.form-control').change();
		PhotoUp.set(null);
	}
});

Template.editEntry.rendered = function (){
	var doc = Router.current().data();
	for (i in doc){
		$('#' + i).val(doc[i]);
	}
	$('textarea').autosize();
}

Flash.profiles.bootstrap.classes.push('text-center');
Flash.profiles.bootstrap.closeButton = null;
