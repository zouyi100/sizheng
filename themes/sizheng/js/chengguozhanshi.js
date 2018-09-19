(function ($) {
    if ($("body").hasClass('path-frontpage')) {
        $(".block-views-blockchengguozhanshi-block-1 .views-field-title").bind("click", function() {
            $(this).addClass('active');
        });
    }

    window.onscroll = function(e) {
        $(".block-views-blockchengguozhanshi-block-1 .views-field-title").removeClass('active');        
    }
}(jQuery));