"use strict";

jQuery(document).ready(function(){

    var js_bg_image = jQuery('.js_bg_image');
    if (jQuery(js_bg_image).length > 0) {
        jQuery(js_bg_image).each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

    // Up Button

    $('.up').on('click', function() {
        $('html, body').animate({scrollTop: 0},200);
        return false;
    })

    // Mobile Menu

        if (jQuery('.mobile_header').length > 0) {
        jQuery('.mobile_header').after('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
        jQuery('.mobile_menu').html(jQuery('.menu_cont').find('ul.menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.btn_mobile_menu').on('click', function () {
            jQuery('.mobile_menu_wrapper').stop().slideToggle(300);
            jQuery('.header').toggleClass('opened');
        });
    }

});

jQuery(window).on('load', function(){

    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.listing_cont.view_type_full_2')) {
        var port_cont = jQuery('.listing_cont.view_type_full_2'),
            all_item = jQuery(port_cont).attr('data-all-item'),
            trigger_height = window_height / all_item;

        jQuery('body').height(window_height);
        jQuery(port_cont).width(window_width).height(window_height);
        jQuery('.triggers_cont a').height(trigger_height);
        listing_view_type_fullscreen_type_2();
    }

});

jQuery(window).resize(function(){

    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.listing_cont.view_type_full_2')) {
        var port_cont = jQuery('.listing_cont.view_type_full_2'),
            all_item = jQuery(port_cont).attr('data-all-item'),
            trigger_height = window_height / all_item;

        jQuery('body').height(window_height);
        jQuery(port_cont).width(window_width).height(window_height);
        jQuery('.triggers_cont a').height(trigger_height);
    }
});
    

function listing_view_type_fullscreen_type_2() {
    jQuery('.listing_cont.view_type_full_2').each(function(){
        var container = jQuery(this),
            image_container = container.find('.thumbnails_container'),
            content_container = container.find('.content_container'),
            triggers_container = container.find('.triggers_cont'),
            items_count = image_container.children().length,
            thumb_item = image_container.find('.image_cont'),
            trigger_item = triggers_container.find('.trigger'),
            content_item = content_container.find('.cont_item');

        setTimeout("jQuery('.listing_cont.view_type_full_2').css('opacity', '1')", 600);

        if (thumb_item.is('.current_item')) {} else {
            thumb_item.first().removeClass('next_item').addClass('current_item');
            content_item.first().addClass('current_item');
            trigger_item.first().addClass('current_item');
        }

        jQuery(trigger_item).on('click', function(){
            var old_current_number = triggers_container.find('.current_item').attr('data-number'),
                current_number = jQuery(this).attr('data-number');

            if (current_number !== old_current_number) {
                jQuery(triggers_container).find('.current_item').removeClass('current_item');
                jQuery(this).addClass('current_item');
                jQuery(content_container).find('.current_item').removeClass('current_item');
                jQuery(content_container).find('[data-number="' + current_number + '"]').addClass('current_item');
                jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item');
                jQuery(image_container).find('[data-number="' + current_number + '"]').removeClass('next_item').addClass('current_item');

                setTimeout("jQuery('.thumbnails_container').find('.prev_item').removeClass('prev_item').addClass('next_item')", 600);
            }
        });

        jQuery('body').on('wheel swipeleft swiperight swipeup swipedown', function(){
            var current_thumb = image_container.find('.current_item'),
                thumb_number = current_thumb.attr('data-number'),
                counter = container.attr('data-counter');

            if (counter == '1') {
                counter++;
                jQuery(container).attr('data-counter', counter);

                if (thumb_number < items_count) {
                    jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item').next().removeClass('next_item').addClass('current_item');
                    jQuery(content_container).find('.current_item').removeClass('current_item').next().addClass('current_item');
                    jQuery(triggers_container).find('.current_item').removeClass('current_item').next().addClass('current_item');
                } else {
                    jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item');
                    jQuery(thumb_item).first().removeClass('next_item').addClass('current_item');
                    jQuery(content_container).find('.current_item').removeClass('current_item');
                    jQuery(content_item).first().addClass('current_item');
                    jQuery(triggers_container).find('.current_item').removeClass('current_item');
                    jQuery(trigger_item).first().addClass('current_item');
                }

                setTimeout("jQuery('.thumbnails_container').find('.prev_item').removeClass('prev_item').addClass('next_item')", 600);
                setTimeout("jQuery('.listing_cont.view_type_full_2').attr('data-counter', '1')", 1000);
            }
        });
    });
}