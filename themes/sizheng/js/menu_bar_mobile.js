(function ($) {
    if ($(window).width() <= 768) {
        $(".region-secondary-menu").addClass('close');
        $("#block-yonghuzhanghucaidan-mobile .menu").addClass('close');
        $(".region-secondary-menu").append("<div class='hover-layer' style='position: fixed; top: 0; width: 100%; height: 100%; z-index: 10001;'></div>");
        $(".hover-layer").addClass('close');        
    }
    $(".region-header").append( "<a class='menu-mobile'>" + 
                                    "<span class='menu-icon-tab tab-1'></span>" +
                                    "<span class='menu-icon-tab tab-2'></span>" +
                                    "<span class='menu-icon-tab tab-3'></span>" +                                               
                                "</a>");
    $("#block-yonghuzhanghucaidan-mobile").before(  "<a class='close-tab'>" +
                                                        "<span class='close-icon-tab tab-1'></span>" +
                                                        "<span class='close-icon-tab tab-2'></span>" +
                                                        "<span class='close-icon-tab tab-3'></span>" + 
                                                    "</a>");

    $(".region-header .menu-mobile").bind("click", function() {
        $(".region-secondary-menu").removeClass('close');
    });

    $(".region-secondary-menu .close-tab").bind("click", function() {
        $(".region-secondary-menu").addClass('close');        
    });

    $("#block-yonghuzhanghucaidan-mobile .menu-toggle").bind("click", function(e) {
        $("#block-yonghuzhanghucaidan-mobile .menu").removeClass('close');        
        $(".hover-layer").removeClass('close');
    });

    $(".hover-layer").bind("click", function() {
        $("#block-yonghuzhanghucaidan-mobile .menu").addClass('close'); 
        $(".hover-layer").addClass('close');       
    });
}(jQuery));