// hide address bar (or at least scroll below)
window.scrollTo(0, 1); 

// toggle content div and about div visibility
// also toggle button text about/close
// ------------------------------------------

function pixels(str) {
  return parseInt(str.split("px")[0]);
}

function newMargin(margin, delta, maxHeight) {
  maxHeight = maxHeight * -1;
  
  margin += delta;
  margin = (margin > 0) ? 0 : margin;
  margin = (margin < maxHeight) ? maxHeight : margin;
  margin = margin + "px";
  
  return margin;
}

$(function() {
  // $('.about').toggle(function() {
  //       $('.about').text('close');
  //       $('#nav').fadeOut(400);
  //       $('#about').fadeIn(400);
  //     }, function() {
  //     $('#about').slideUp(400, function() {
  //       $('.about').text('About Hoops');
  //     });
  //   }),
  
  $('.back_button').click(function() {
    $('#nav').fadeOut(400, function() {
      $('.nav').text('nav');
      $('#content').fadeIn(400);
    });
  });
  
  $('.nav').toggle(function() {
    $('#content').fadeOut(400, function() {
      $('.nav').text('close');
      $('#nav').fadeIn(400);
    });
  }, function() {
    $('#nav').fadeOut(400, function() {
      $('.nav').text('nav');
      $('#content').fadeIn('fast');
      $('#nav').fadeOut('fast');
    });
  });
});
