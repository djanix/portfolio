app.directive("loadIsotope", function($timeout) {
	return function(scope, element) {
		if (scope.$last !== true) return;

		$timeout(function() {
			var container = element.parent('ul');

			container.isotope({
				itemSelector : 'li',
				filter: '.web',
				masonry: {
					columnWidth: 346
				}
			});

			$.each(container.find('.link'), function() {
				if ($(this).find('a').text() == "") {
					$(this).hide();
				}
			});
		}, 500);
	}
});

app.directive("smoothScroll", function() {
	return function(scope, element, attr) {
		var offset = parseInt('-' + $('header').outerHeight()),
			navEl = $('nav');

		element.on("click", function(e) {
			e.preventDefault();
			$.smoothScroll({
				scrollTarget: attr.smoothScroll,
				offset: offset,
				easing: 'easeInOutExpo',
				speed: 1000
			});
		});
	}
});

app.directive("fancybox", function() {
	return function(scope, element) {
		element.fancybox({
			padding: 0
		});
	}
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
	}
});

app.directive("isotopeCategory", function() {
	return function(scope, element) {
		element.find('a').on('click', function(e) {
			e.preventDefault();

			element.find('.active').removeClass('active');
			$(this).addClass('active');

			$('.slider ul').isotope({
				filter: $(this).attr('data-filter')
			});
		});
	}
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
	}
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
	}
});

app.directive("fitText", function() {
	return function(scope, element, attr) {
		var maxSize = "60px";

		if (attr.fitText) {
			maxSize = attr.fitText
		}

		element.fitText(1, { maxFontSize: maxSize })
	}
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
				percentDiv.html(newWidth + '%');
			},20);

			percentBar.animate({
				width: percentValue + '%'
			}, 1100, function() {
				clearInterval(animateVal);
				percentDiv.html(percentValue + '%');
			});
		}, {triggerOnce: true, offset: '80%'});
	}
});

app.directive("twitterStyling", function(jqtweet) {
	return function(scope, element) {
		scope.$watch(element, function () {
			var newEl = jqtweet.ify.clean(element.text());

			newEl.replace(/USER/g, scope.tweets[element.index()].user.screen_name)
				 .replace(/ID/g, scope.tweets[element.index()].id_str);

			element.html(newEl);
		});
	}
});

app.directive("socialToggleIcons", function() {
	return function(scope, element) {
		element.on("mouseenter", function() {
			$(this).find('.active').stop(true, true).animate({
				opacity: '1'
			}, 300, 'easeInOutExpo')
		});

		element.on("mouseleave", function() {
			$(this).find('.active').stop(true, true).animate({
				opacity: '0'
			}, 300, 'easeInOutExpo')
		});
	}
});

app.directive("vertAlign", function($timeout) {
	return function(scope, element) {
		$timeout(function() {
			var height = element.height(),
				parentHeight = element.parent().height(),
				padding = (parentHeight - height) / 2;
			element.css('padding-top', padding);
		});
	}
});