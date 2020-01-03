
$(function(){
	$('#mobile-menu').on('click', function(){
		$('.navbar').slideToggle()
	});

	$('.slide-btn').click(function() {
		$('.active').removeClass('active');
		$('.slide-btn img').css('border', 'none');
		var clickedIndex = $('.slide-btn').index($(this));
		$('.slide').eq(clickedIndex).addClass('active');
		$('.slide-btn img').eq(clickedIndex).css('border', 'orange 5px solid');
	});
});
