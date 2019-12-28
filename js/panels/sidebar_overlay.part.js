(function(jQuery) {
    jQuery.fn.usidebaroverlay = function(options) {
        // sets the jquery matched object
        var matchedObject = this;

        // registers for the click in the sidebar overlay so that it's possible
        // to hide side left and right visibility
        matchedObject.click(function(event) {
            var _body = jQuery("body");
            _body.removeClass("side-left-visible");
            _body.removeClass("side-right-visible");
            event.preventDefault();
            event.stopPropagation();
        });
    };
})(jQuery);