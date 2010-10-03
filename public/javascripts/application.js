// hide address bar (or at least scroll below)
window.scrollTo(0, 1); 

// add class on body when orientation changes
window.onorientationchange = function() {
  var orientation = window.orientation;
  switch(orientation) {
    case 0:
        document.body.setAttribute("class","portrait");
        break;          
    case 90:
        document.body.setAttribute("class","landscape");
        break;
    case -90:  
        document.body.setAttribute("class","landscape");
        break;
  }
}
// toggle content div and about div visibility
// also toggle button text about/close
// ------------------------------------------
$(function() {
  $('.about').toggle(function() {
    $('#content').fadeOut(400, function() {
      $('.about').text('close');
      $('#about').slideDown(400);
    });
  }, function() {
    $('#about').slideUp(400, function() {
      $('.about').text('about');
      $('#content').fadeIn('fast');
    });
  });
});
