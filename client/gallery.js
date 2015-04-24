Template.gallery.helpers({
	isAdmin: function (){
		return Router.current().data().admin;
	}
});

Template.gallery.rendered = function (){
	$(window).scroll(function() {
		if ($('#soundtrack').length)
			$('#soundtrack').get(0).play();
	});
	$('.friend, .word').waypoint(function (direction){
		$(this).css('opacity', '1');
	}, {
		offset: '50%'
	})
	$('.intro2-line').waypoint(function (direction){
		$(this).css('opacity', '1');
	}, {
		offset: '75%'
	})
}