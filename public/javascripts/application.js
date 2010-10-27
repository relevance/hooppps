// hide address bar (or at least scroll below)
window.scrollTo(0, 1); 

// toggle content div and about div visibility
// also toggle button text about/close
// ------------------------------------------

function pixels(str) {
  // TODO: string.split() doesn't work on IE, right?
  return parseInt(str.split("px")[0]);
}

function newMargin(margin, delta, maxHeight) {
  maxHeight = maxHeight * -1;
  
  margin = (delta > 0) ? margin+30 : margin-30;
  margin = (margin > 0) ? 0 : margin;
  margin = (margin < maxHeight) ? maxHeight : margin;
  margin = margin + "px";
  
  return margin;
}

$(function() {
  $('.about').toggle(function() {
      $('.about').text('close');
      $('#about').slideDown(400);
    }, function() {
    $('#about').slideUp(400, function() {
      $('.about').text('About Hoops');
    });
  }),
  $('.nav').toggle(function() {
    $('#content').fadeOut(400, function() {
      $('.nav').text('close');
      $('#nav').slideDown(400);
    });
  }, function() {
    $('#nav').slideUp(400, function() {
      $('.nav').text('nav');
      $('#content').fadeIn('fast');
    });
  });
  
  $('#track').mousewheel(function(event, delta, deltaX, deltaY) {
    event.preventDefault();

    var margin = pixels($(this).css("margin-top")) || 0;
    var frameHeight = pixels($("#frame").css("height"));
    var contentHeight = pixels($("#content").css("height"));
    var maxHeight = contentHeight - frameHeight + 100;

    $(this).css("margin-top", newMargin(margin, delta, maxHeight));
  });
});
