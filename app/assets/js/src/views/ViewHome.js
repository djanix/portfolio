var util = require('util');
var twitter = require('twitter');

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

        self.getPortfolioJson(function (err, res) {
            if (err) { return console.log(err); }
            self.showPortfolioItem(res);
            self.el.find('.portfolio li').hover(function () {
                $(this).addClass('is-active');
            }, function () {
                $(this).removeClass('is-active');
            });
        });

        //self.getTwitterFeed();

        $.each(self.el.find('.skillset').find('li'), function (index, value) {
            self.skillPercent($(this));
        });
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

    skillPercent: function ($element) {
        var self = this;

        var $percentBar = $element.find('.percent');
        var $percentDiv = $element.find('.right');
        var percentValue = $percentBar.attr('data-percent');

        $percentBar.css({ width: percentValue + "%" });

        $element.waypoint(function() {
            $element.addClass('is-active');

            var intervalCalls = 0;
            var animateVal = setInterval(function() {
                intervalCalls ++;
                var newValue = Math.round(intervalCalls * (percentValue / 100));
                $percentDiv.text(newValue + '%');

                if (newValue >= percentValue) {
                    clearInterval(animateVal);
                }
            }, 20);
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

    getTwitterFeed: function () {
        var twit = new twitter({
            consumer_key: 'slsuTJu0kMivG0tvQnAPg',
            consumer_secret: 'cWHXoudWehashEzEcLE4qR3iPyGRwwetahaH0L6tQ',
            access_token_key: 'z1Rx12iWd4DpItW5eubhDlJzBKFm3TPrTfHGH3jw',
            access_token_secret: 'fN5uoG4YUT8TgI9QvQklB4S9P3OPxYpuU5eL5EE'
        });

        twit.stream('janiclb', {track:'nodejs'}, function(stream) {
            stream.on('data', function(data) {
                console.log(util.inspect(data));
            });
            // Disconnect stream after five seconds
            setTimeout(stream.destroy, 5000);
        });
    },

    getPortfolioJson: function (callback) {
        var self = this;

        $.ajax({
            url: '/data/work.json',
            dataType: 'json',
            contentType: 'application/json',
            data: null,
            type: 'POST'
        })
        .done(function (data, textStatus, jqXHR) {
            var result = ((typeof data) == "string") ? $.parseJSON(data) : data;
            return callback(null, result);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return callback(['fail', errorThrown], null);
        });
    },

    showPortfolioItem: function (data) {
        var self = this;
        var html = '';

        $.each(data, function (index, value) {
            html +=
                '<li>' +
                    '<a href="' + value.link + '">' +
                        '<img src="/assets/img/portfolio/' + value.images.thumb + '" alt="" />' +
                    '</a>' +

                    '<div class="info">' +
                        '<p>' + value.title + '</p>' +
                        '<p class="link">Link: <a href="' + value.link + '">' + value.link + '</a></p>' +
                        '<p>Date: ' + value.date + '</p>' +
                    '</div>' +
                '</li>';
        });

        self.el.find('.portfolio ul').html(html);
    },

    empty: null
});