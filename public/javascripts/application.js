var jQT = new $.jQTouch({
    icon: 'jqtouch.png',
    addGlossToIcon: false,
    startupScreen: 'jqt_startup.png',
    statusBar: 'black',
    preloadImages: [
        '../../themes/jqt/img/back_button.png',
        '../../themes/jqt/img/back_button_clicked.png',
        '../../themes/jqt/img/button_clicked.png',
        '../../themes/jqt/img/grayButton.png',
        '../../themes/jqt/img/whiteButton.png',
        '../../themes/jqt/img/loading.gif'
        ]
});
// Some sample Javascript functions:
$(function(){
    // Show a swipe event on swipe test
    $('#swipeme').swipe(function(evt, data) {                
        $(this).html('You swiped <strong>' + data.direction + '</strong>!');
    });
    $('a[target="_blank"]').click(function() {
        if (confirm('This link opens in a new window.')) {
            return true;
        } else {
            $(this).removeClass('active');
            return false;
        }
    });
    // Page animation callback events
    $('#pageevents').
        bind('pageAnimationStart', function(e, info){ 
            $(this).find('.info').append('Started animating ' + info.direction + '&hellip; ');
        }).
        bind('pageAnimationEnd', function(e, info){
            $(this).find('.info').append(' finished animating ' + info.direction + '.<br /><br />');
        });
    // Page animations end with AJAX callback event, example 1 (load remote HTML only first time)
    $('#callback').bind('pageAnimationEnd', function(e, info){
        if (!$(this).data('loaded')) {                      // Make sure the data hasn't already been loaded (we'll set 'loaded' to true a couple lines further down)
            $(this).append($('<div>Loading</div>').         // Append a placeholder in case the remote HTML takes its sweet time making it back
                load('ajax.html .info', function() {        // Overwrite the "Loading" placeholder text with the remote HTML
                    $(this).parent().data('loaded', true);  // Set the 'loaded' var to true so we know not to re-load the HTML next time the #callback div animation ends
                }));
        }
    });
    // Orientation callback event
    $('body').bind('turn', function(e, data){
        $('#orient').html('Orientation: ' + data.orientation);
    });
});