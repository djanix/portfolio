window.$ = require('jquery');
window.jQuery = window.$;

var easing = require('easing');
var AppObj = require('./App');

var ViewsObj = {
    Home: require('./views/ViewHome')
};

$(function () {
    var App = Object.create(AppObj).init($('#site'));
    var Views = {};

    $.each(ViewsObj, function (index, value) {
        if ($(`[data-view="${index}"]`).length) {
            Views[index] = Object.create(value).init($(`[data-view="${index}"]`));
        }
    });
});