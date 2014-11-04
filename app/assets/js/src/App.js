window.$ = require('jquery');
window.jQuery = window.$;

require('easing');
require('../dest/modules/skills');
require('../dest/modules/portfolio');



//$.App = ring.create({
//    constructor: function (el) {
//        var self = this;
//        self.el = $(el);
//        self.init();
//    },
//
//    //-- Vars
//    //--------------------------------------------------------------
//    currentYear: new Date().getFullYear(),
//    view: null,
//    viewName: 'View',
//    modules: {},
//    moduleName: 'Module',
//
//
//    //-- Init
//    //--------------------------------------------------------------
//    init: function () {
//        var self = this;
//        var $view = self.el.find('[data-view]');
//
//        if ($view) {
//            self.viewName += $view.attr('data-view');
//            self.view = new $[self.viewName](self.el.find('[data-view="' + self.el.find('[data-view]').attr('data-view') + '"]'));
//        }
//
//        self.oldBrowserConsole();
//        self.setDeviceType();
//
//        $(window).resize(function () {
//            self.setDeviceType();
//        });
//
//        if (!$.support.transition) {
//            $.fn.transition = $.fn.animate;
//        }
//    },
//
//    setDeviceType: function () {
//        // IE FIX FOR getComputedStyle
//        if (!window.getComputedStyle) {
//            window.getComputedStyle = function (el) {
//                this.el = el;
//                this.getPropertyValue = function (prop) {
//                    var re = /(\-([a-z]){1})/g;
//                    if (prop == 'float') prop = 'styleFloat';
//                    if (re.test(prop)) {
//                        prop = prop.replace(re, function () {
//                            return arguments[2].toUpperCase();
//                        });
//                    }
//                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
//                };
//                return this;
//            };
//        }
//
//        var newDevice = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
//
//        // IE8 DEFAULT VALUE
//        if (!newDevice) {
//            newDevice = 'desktop';
//        }
//
//        // IE9-10 REMOVE QUOTE FROM CONTENT STRING
//        newDevice = newDevice.replace(/"/g, '');
//
//        if (newDevice != window.deviceType) {
//            window.deviceType = newDevice;
//        }
//    },
//
//    oldBrowserConsole: function () {
//        // Avoid `console` errors in browsers that lack a console.
//        var method;
//        var noop = function () {};
//        var methods = [
//            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
//            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
//            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
//            'timeStamp', 'trace', 'warn'
//        ];
//        var length = methods.length;
//        var console = (window.console = window.console || {});
//
//        while (length--) {
//            method = methods[length];
//
//            // Only stub undefined methods.
//            if (!console[method]) {
//                console[method] = noop;
//            }
//        }
//    }
//});
//
//$(function () {
//    window.App = new $.App($('#site'));
//});