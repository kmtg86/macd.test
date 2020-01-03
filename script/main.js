$(function(){

  $('.slide-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.slide-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  });
});
