/**
 * Created by Jasmine on 4/6/16.
 */
(function($) {
    $.fn.extend({
        navbarSlider : function(options) {
            var defaults = {
            };
            var options = $.extend(defaults, options);
            var linkTimer,
                linkPanel = $(this),
                linkFocusStyle = linkPanel.find('.focus').prop('style');
            if (linkFocusStyle) {
                var position = $(linkPanel.find('.green')[0]);
                if (position && position.length == 1) {
                    linkFocusStyle.left = position.position().left + 'px';
                    linkFocusStyle.width = position.innerWidth() + 'px';
                }
                linkPanel.delegate('button', 'mouseenter', function() {
                        var self = $(this);
                        clearTimeout(linkTimer);
                        if (self.attr('data-focus')==false) {return;}
                        linkFocusStyle.left = self.position().left + 'px';
                        linkFocusStyle.width = self.innerWidth() + 'px';
                    })
                    .bind('mouseleave', function() {
                        clearTimeout(linkTimer);
                        if (!position || position.length != 1) {
                            linkTimer = setTimeout(function () {
                                linkFocusStyle.left = '-100px';
                                linkFocusStyle.width = '100px';
                            }, 500);
                        } else {
                            console.log(position);
                            linkTimer = setTimeout(function () {
                                linkFocusStyle.left = position.position().left + 'px';
                                linkFocusStyle.width = position.innerWidth() + 'px';
                            }, 240);
                        }
                    });
            }
        }
    });
})(jQuery);