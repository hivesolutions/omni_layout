(function(jQuery) {
    jQuery.utemplate = function(value) {
        value = value.replace(/{{/g, "<b>");
        value = value.replace(/}}/g, "</b>");
        value = value.capitalize();
        return value;
    };
})(jQuery);
