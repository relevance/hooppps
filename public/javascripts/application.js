// hide address bar (or at least scroll below)
window.scrollTo(0, 1); 

// toggle content div and about div visibility
// also toggle button text about/close
// ------------------------------------------

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
  
  $('#content').mousewheel(function(event, delta, deltaX, deltaY) {
    event.preventDefault();

    // SPIKE!!!  doesn't handle bounds-checking or scroll velocity
    var margin = $(this).css("margin-top") || 0;
    margin = parseInt(margin.split("px")[0]);
    margin = (delta > 0) ? margin+10 : margin-10;
    margin = margin + "px";
    // console.debug(margin);
    
    $(this).css("margin-top", margin);
  });
});


