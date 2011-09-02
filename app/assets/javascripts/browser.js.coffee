//= require application
//= require jquery.mousewheel.js

pixels = (str) ->
  parseInt str.split("px")[0]

newMargin = (margin, delta, maxHeight) ->
  maxHeight = maxHeight * -1
  margin += delta*50
  margin = if margin > 0 then 0 else margin
  margin = if margin < maxHeight then maxHeight else margin
  margin = margin + "px"
  margin

$ ->
  # fade actions button
  $('.fadein').hover ->
    $(this).fadeTo 'fast', 1
  , ->
    $(this).fadeTo 'fast', .8
    
  # fade footer links
  $('.footer a.fadein').hover ->
    $(this).fadeTo 'fast', 1
  , ->
    $(this).fadeTo 'fast', .6
  
  # makes mocked up mobile devise in browser scroll 
  $('#track').mousewheel (event, delta) ->
    event.preventDefault()
    
    margin = pixels($(this).css("margin-top")) or 0
    frameHeight = pixels $("#frame").css("height")
    contentHeight = pixels $("#content").css("height")
    maxHeight = contentHeight - frameHeight + 100
    
    $(this).css "margin-top", newMargin(margin, delta, maxHeight)