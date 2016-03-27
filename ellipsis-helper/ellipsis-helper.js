/**
 * Created by Jasmine on 3/27/16.
 */
(function($) {

    $.fn.ellipsisBtn = function (options) {

        var config = $.extend({
                type: 'start',
                original_text: "跳转",
                ellipsis_text: "正在跳转",
                ellipsis_icon: ".",
                ellipsis_number: 3,
                ellipsis_interval: 500
            }, options),
            current_ellipsis = 0,
            type;

        var _start = function($target) {

            $target = $($target);

            if ($target.attr('data-interval')) {
                throw new Error("Ellipsis helper already used on target!");
            }

            if ($target.is('button')) {
                config.original_text = $target.html();
                $target.html(config.ellipsis_text);
                type = "button"
            } else if ($target.is('input')) {
                config.original_text = $target.val();
                $target.val(config.ellipsis_text);
                type = "input"
            } else {
                throw new Error("Invalid DOM type");
            }
            $target.addClass('disabled-btn');
            id = setInterval(function(){
                if (current_ellipsis < config.ellipsis_number) {
                    if (type=="button") {
                        $target.append(config.ellipsis_icon);
                    } else {
                        $target.val($target.val() + config.ellipsis_icon);
                    }
                    current_ellipsis++;
                } else {
                    if (type=="button") {
                        $target.html(config.ellipsis_text);
                    } else {
                        $target.val(config.ellipsis_text);
                    }
                    current_ellipsis = 0;
                }
            }, config.ellipsis_interval);
            $target.attr('data-interval',id);
            $target.attr('data-text', config.original_text);
        };

        var _stop = function($target) {
            $target = $($target);
            config.original_text = $target.attr('data-text') ? $target.attr('data-text') : config.original_text;
            if ($target.is('button')) {
                $target.html(config.original_text);
            } else if ($target.is('input')) {
                $target.val(config.original_text);
            } else {
                throw new Error("Invalid DOM type");
            }
            $target.removeClass('disabled-btn');
            clearInterval($target.attr('data-interval'));
        };

        return this.each(function(){
            if (config.type == "stop") {
                _stop(this);
            } else {
                _start(this);
            }
        });

    }

}(jQuery));