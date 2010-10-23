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
});


