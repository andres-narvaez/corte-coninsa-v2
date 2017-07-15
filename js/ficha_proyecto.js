$(document).ready(function() {
    /* active description tabs main description*/
    $( "#pg-describe-proyect-specs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#pg-describe-proyect-specs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    /*Init main gallery*/
    $('#lightgallery').lightGallery();

    /* active properties types tabs*/
    $( "#pg-property-types" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#pg-property-types > ul > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    /* active stage one properties tabs*/
    $( "#pg-stage-one" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "ul.pg-property-types-controlls > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    $( "#pg-stage-two" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "ul.pg-property-types-controlls > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    initializeGalleryAfter($('#pg-stage-one #image-gallery'));
    initializeGalleryAfter($('#pg-stage-two #image-gallery'));

    $(".pg-property-types-stage .ui-tabs-tab").on("click", function(event) {
        var element = $(event.currentTarget).parent().parent().find(".pg-main-container-tabs").find(".property-features-content:visible"),
            galleryElement = element.find("#image-gallery-after");

        if(element.find(".lSSlideOuter").length === 0) {
            initializeGalleryAfter(galleryElement);
        }

    });

    function updateGalleryLabels(el) {
        var labels = el.data("titles").split(",");

        _.each($(el.parent().parent().find(".lSPager li a")), function(el, index) {
            $(el).html(labels[index])
        })
    };

    function initializeGalleryAfter (element) {
        element.lightSlider({
            gallery:true,
            adaptiveHeight:true,
            item:1,
            thumbItem:5,
            vertical:true,
            slideMargin: 0,
            speed:500,
            auto:false,
            loop:true,
            galleryMargin: 0,
            thumbMargin: 0,
            onSliderLoad: function(el) {
                $(element).removeClass('cS-hidden');
                $(element).lightGallery();
                updateGalleryLabels(el);
            }  
        });
    }

});