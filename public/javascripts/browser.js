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
	
});