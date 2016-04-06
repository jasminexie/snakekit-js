/**
 * Created by Jasmine on 4/2/16.
 */
(function($) {

    $.fn.equalHeights = function () {

        var maxHeight = 0;
        var _this = this;

        var fixSidebar = function() {
            _this.each(function () {
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });

            _this.each(function () {
                $(this).outerHeight(maxHeight);
            });
        };

        return this.each(function() {
            $(window).on('load', fixSidebar);
            $(window).on('scroll', fixSidebar);
            $(window).on('resize', fixSidebar);
            $(window).on('click', fixSidebar);
        })
    }

}(jQuery));