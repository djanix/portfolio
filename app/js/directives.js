app.directive("checkLast", function() {
	return function (scope, element) {
		if (scope.$last !== true) return;

		element.ready(function () {
			setTimeout(function() {
				$('.slider ul').bxSlider({
					easing: 'easeInOutExpo',
					speed: 666,
					minSlides: 4,
					maxSlides: 4,
					slideWidth: 220,
					slideMargin: 20,
					pager: false,
					infiniteLoop: false,
					hideControlOnEnd: false
				});
			}, 300);
		})
	}
});

app.directive("toggleIcons", function() {
	return function (scope, element) {
		element.on("mouseenter", function() {
			$(this).find('img').stop(true, true).animate({
				paddingTop: '-=10'
			}, 200, 'easeInOutExpo')
		});

		element.on("mouseleave", function() {
			$(this).find('img').stop(true, true).animate({
				paddingTop: '+=10'
			}, 200, 'easeInOutExpo')
		});
	}
});

app.directive("changeLanguage", function($http) {
	return function(scope, element) {
		element.on("click", function(e) {
			e.preventDefault();

			if (scope.siteLanguage == "en") {
				getLanguage($http, "fr", function(err, data) {
					if (err) return console.log(err);
					scope.siteLanguage = "fr";
					//not working ( + using language in the address bar)
					scope.data = data;
				});
			} else {
				getLanguage($http, 'en', function(err, data) {
					if (err) return console.log(err);
					scope.siteLanguage = "en";
					//not working ( + using language in the address bar)
					scope.data = data;
				});
			}
		});
	}
});
