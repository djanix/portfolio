window.$ = require('jquery');
window.jQuery = window.$;

var AppObj = require('./App');

var ViewsObj = {
    Home: require('./views/ViewHome')
};

$(function () {
    var App = Object.create(AppObj).init($('#site'));
    var $view = $('[data-view]');

    if (ViewsObj[$view.data('view')]) {
        Object.create(ViewsObj[$view.data('view')]).init($view);
    }
});