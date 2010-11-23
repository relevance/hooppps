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
  
  margin += delta*50
  margin = (margin > 0) ? 0 : margin;
  margin = (margin < maxHeight) ? maxHeight : margin;
  margin = margin + "px";
  
  return margin;
}

$(function() {
  
  $('.back_button').click(function() {
    $('#nav').fadeOut(400, function() {
      $('.nav').text('nav');
      $('#content').fadeIn(400);
    });
  });
  
  $('.nav').toggle(function() {    
    $('.nav').text('close');
    $('#nav').css({
      display: 'block',
    }).animate({
      opacity: 1,
      top: '45px'
    }, 250);
  }, function() {
    $('.nav').text('nav');
    $('#nav').animate({
      opacity: 0,
      top: '30px',
    }, 250).fadeOut('250');
  });
});
