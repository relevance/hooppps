#= require jquery

# hide address bar (scroll below)
setTimeout ->
  window.scrollTo(0, 1);
, 1000

# toggle content div and about div visibility
# also toggle button text about/close
# ------------------------------------------


$ ->
  navButton = $('.nav')
  nav = $('#nav')
  
  showNav = ->
    navButton.text 'close'
    nav.css {display: 'block'}
    nav.animate {opacity: 1, top: '45px'}, 250
  
  hideNav = ->
    navButton.text 'nav'
    nav.animate {opacity: 0, top: '30px'}, 250
    nav.fadeOut '250'
  
  $('.back_button').click ->
    nav.fadeOut 400, ->
      navButton.text 'nav'
      $('#content').fadeIn 400
  
  navButton.toggle showNav, hideNav
    