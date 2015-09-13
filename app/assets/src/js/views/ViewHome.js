var util = require('util');

var smoothScroll = require('jquery-smooth-scroll');
var transit = require('jquery.transit');
var waypoints = require('waypoints');

module.exports = {
    _el: null,
    headerOffset: 0,

    init: function ($el) {
        var _this = this;

        _this._el = $el;
        _this.headerOffset = parseInt('-' + _this._el.find('header').outerHeight(), 10);

        _this.bindEvents();
        _this.menuActivation();

        _this.getPortfolioJson(function (err, res) {
            if (err) { return console.log(err); }
            _this.showPortfolioItem(res);
            _this.portfolioAnim();
            _this._el.find('.portfolio li').hover(function () {
                $(this).addClass('is-active');
            }, function () {
                $(this).removeClass('is-active');
            });
        });

        $.each(_this._el.find('.skillset').find('li'), function () {
            _this.skillPercent($(this));
        });
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
        var _this = this;

        _this._el.find('nav').find('a').on("click", function(e) {
            var clickedItem = $(this);
            e.preventDefault();
            $.smoothScroll({
                scrollTarget: $(this).attr('href'),
                offset: self.headerOffset,
                easing: 'easeInOutExpo',
                speed: 1000,
                afterScroll: function () {
                    _this._el.find('nav .active').removeClass('active');
                    clickedItem.addClass('active');
                }
            });
        });
    },

    skillPercent: function ($element) {
        var _this = this;
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
        var _this = this;
        var $menu = _this._el.find('nav');

        $.each(_this._el.find('.main').find('section'), function (index, value) {
            var elName = $(this).attr('id');
            var menuEl = $menu.find('.' + elName);

            $(this).waypoint(function() {
                $menu.find('.active').removeClass('active');
                menuEl.addClass('active');
            });
        });
    },

    getPortfolioJson: function (callback) {
        var _this = this;

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
        var _this = this;
        var html = '';
        var activeClass = '';

        if (window.deviceType == 'tablet' || window.deviceType == 'mobile') {
            activeClass = 'is-active';
        }

        $.each(data, function (index, value) {
            html +=
                '<li class="' + activeClass + '">' +
                    '<a href="' + value.link + '">' +
                        '<img src="/assets/img/portfolio/placeholder.jpg" data-src="/assets/img/portfolio/' + value.images.thumb + '" alt="" height="200" width="350" />' +
                    '</a>' +

                    '<div class="info">' +
                        '<p>' + value.title + '</p>' +
                        '<p class="link">Link: <a href="' + value.link + '">' + value.link + '</a></p>' +
                        '<p>Date: ' + value.date + '</p>' +
                        '<p>While working at: <a href="' + value.company.link + '">' + value.company.name + '</a></p>' +
                    '</div>' +
                '</li>';
        });

        _this._el.find('.portfolio').find('.portfolioList').html(html);
    },

    portfolioAnim: function () {
        var _this = this;

        _this._el.find('.portfolioList').find('li').waypoint(function (direction) {
            var $item = $(this);
            var itemsPerRow = 3;

            if (window.deviceType == 'tablet') {
                itemsPerRow = 2;
            } else if (window.deviceType == 'mobile') {
                itemsPerRow = 1;
            }

            var position = $(this).index() % itemsPerRow;
            var delay = Math.round((1/3 * position) * 500);

            setTimeout(function () {
                var $img = $item.find('img');
                $img.attr('src', $img.data('src'));
                $item.addClass('is-visible');
            }, delay);
        }, {
            offset: '100%',
            triggerOnce: true
        });
    }
};