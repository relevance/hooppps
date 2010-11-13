$(document).ready(function() {
  
  //fade action buttons
  $('.fadein').hover(function() {
		$(this).fadeTo("fast", 1);
	}, function() {
		$(this).fadeTo("fast", .8);
	});
	
	//fade footer links
  $('.footer a.fadein').hover(function() {
		$(this).fadeTo("fast", 1);
	}, function() {
		$(this).fadeTo("fast", .6);
	});
	
	$('#frame').hover(function() {
    $('#scroll-message').animate({opacity:1}, 300);
  }, function() {
    $('#scroll-message').animate({opacity:0}, 300);
  });
  
  
  $('#track').mousewheel(function(event, delta) {
    event.preventDefault();

    var margin = pixels($(this).css("margin-top")) || 0;
    var frameHeight = pixels($("#frame").css("height"));
    var contentHeight = pixels($("#content").css("height"));
    var maxHeight = contentHeight - frameHeight + 100;

    $(this).css("margin-top", newMargin(margin, delta, maxHeight));
  });
  
});