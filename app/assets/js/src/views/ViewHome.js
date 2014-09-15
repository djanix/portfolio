var twitterFetcher = require('twitterFetcher');
var smoothScroll = require('smooth-scroll');
var transit = require('jquery.transit');
var waypoints = require('waypoints');

$.ViewHome = ring.create([$.View], {
    constructor: function (el) {
        var self = this;
        self.$super(el);
    },

    //-- Vars
    //--------------------------------------------------------------
    headerOffset: 0,

    //-- Init
    //--------------------------------------------------------------
    initHook: function () {
        var self = this;
        self.$super();

        self.headerOffset = parseInt('-' + self.el.find('header').outerHeight(), 10);
        self.bindEventsHook();
        self.menuActivation();

        $.each(self.el.find('.skillset').find('li'), function (index, value) {
            self.skillPercent($(this));
        });

//        twitterFetcher.fetch('350782248980725760', 'tweets', 5, true, true, false, '', false, self.handleTweets());
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEventsHook: function () {
        var self = this;

        self.el.find('nav').find('a').on('click', function (e) {
            e.preventDefault();

            $(this).on("click", function(e) {
                e.preventDefault();
                $.smoothScroll({
                    scrollTarget: $(this).attr('href'),
                    offset: self.headerOffset,
                    easing: 'easeInOutExpo',
                    speed: 1000
                });
            });
        });
    },

    handleTweets: function () {
        var self = this;
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('tweets');
        var html = '<ul>';
        while(n < x) {
            html += '<li><span class="sprite icon_twitter_bird "></span>' + tweets[n] + '</li>';
            n++;
        }
        html += '</ul>';
        element.innerHTML = html;
    },

    skillPercent: function (element) {
        var self = this;

        var percentBar = element.find('.percent');
        var percentDiv = element.find('.right');
        var percentValue = percentBar.attr('data-percent');

        element.waypoint(function() {
            var animateVal = setInterval(function() {
                var newWidth = Math.round(percentBar.width() / element.width() * 100);
                percentDiv.text(newWidth + '%');
            },20);

            percentBar.transition({
                width: percentValue + '%'
            }, 1100, function() {
                clearInterval(animateVal);
                percentDiv.text(percentValue + '%');
            });
        }, {triggerOnce: true, offset: '80%'});
    },

    menuActivation: function () {
        var self = this;
        var $menu = self.el.find('nav');

        $.each(self.el.find('.main').find('section'), function (index, value) {
            var elName = $(this).attr('id');
            var menuEl = $menu.find('.' + elName);

            $(this).waypoint(function() {
                $menu.find('.active').removeClass('active');
                menuEl.addClass('active');
            });
        });




    },

    empty: null
});