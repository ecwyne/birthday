Template.gallery.rendered = function (){
	$(window).scroll(function() {
		return $("#soundtrack").get(0).play();
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