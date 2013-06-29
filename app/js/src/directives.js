app.directive("smoothScroll", function() {
	return function(scope, element, attr) {
		var offset = parseInt('-' + $('header').outerHeight(), 10);

		element.on("click", function(e) {
			e.preventDefault();
			$.smoothScroll({
				scrollTarget: attr.smoothScroll,
				offset: offset,
				easing: 'easeInOutExpo',
				speed: 1000
			});
		});
	};
});

app.directive("fancybox", function() {
	return function(scope, element) {
		element.fancybox({
			padding: 0
		});
	};
});

app.directive("menuActivation", function($timeout) {
	return function(scope, element) {
		var elName = element.attr('id'),
			menu = $('nav'),
			menuEl = menu.find('.' + elName);

		$timeout(function() {
			element.waypoint(function() {
				menu.find('.active').removeClass('active');
				menuEl.addClass('active');
			});
		}, 1000);
	};
});

app.directive("workHover", function() {
	return function(scope, element) {
		element.on('mouseenter', function() {
			element.find('.info').stop(true, true).show(300, 'easeInOutExpo', function() {
				element.find('.zoom').stop(true, true).show(300, 'easeInOutExpo');
			});
		});

		element.on('mouseleave', function() {
			element.find('.info').stop(true, true).hide(300, 'easeInOutExpo', function() {
				element.find('.zoom').stop(true, true).hide(300, 'easeInOutExpo');
			});
		});
	};
});

app.directive("changeLanguage", function() {
	return function(scope, element, attrs) {
		var language = 'en';

		if (attrs.changeLanguage) {
			language = attrs.changeLanguage;
		}

		element.on("click", function(e) {
			e.preventDefault();

			if (language == 'swap') {
				scope.swapLanguage();
			} else {
				scope.changeLanguage(language);
			}
		});
	};
});

app.directive("fitText", function() {
	return function(scope, element, attr) {
		var maxSize = "60px";

		if (attr.fitText) {
			maxSize = attr.fitText;
		}

		element.fitText(1, { maxFontSize: maxSize });
	};
});

app.directive("skillPercentage", function() {
	return function(scope, element) {
		var percentBar = element.find('.percent'),
			percentDiv = element.find('.right'),
			percentValue = 0;

		scope.$watch(function() {
			percentValue = percentBar.attr('data-percent');
		});

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
	};
});

app.directive("twitterStyling", function(jqtweet) {
	return function(scope, element) {
		scope.$watch(element, function () {
			var newEl = jqtweet.ify.clean(element.text());

			newEl.replace(/USER/g, scope.tweets[element.index()].user.screen_name)
				.replace(/ID/g, scope.tweets[element.index()].id_str);

			element.html(newEl);
		});
	};
});

app.directive("socialToggleIcons", function() {
	return function(scope, element) {
		element.hover(function() {
			$(this).find('.active').stop(true, true).transition({
				opacity: '1'
			}, 300, 'easeInOutExpo');
		}, function() {
			$(this).find('.active').stop(true, true).transition({
				opacity: '0'
			}, 300, 'easeInOutExpo');
		});
	};
});

app.directive("vertAlign", function($timeout) {
	return function(scope, element) {
		$timeout(function() {
			calculateHeight();

			$(window).resize(function() {
				calculateHeight();
			});
		});

		function calculateHeight() {
			if (scope.device == 'desktop') {
				var height = element.height(),
					parentHeight = element.parent().height(),
					padding = (parentHeight - height) / 2;
				element.css('padding-top', padding);
			} else {
				element.css('padding-top', '10px');
			}
		}
	};
});