var portfolio = angular.module('portfolio', []);

portfolio.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'views/home.html', controller: PortfolioHomeCtrl}).
		when('/work/:section/:title', {templateUrl: 'views/item-detail.html', controller: PortfolioWorkDetailCtrl}).
		otherwise({redirectTo: '/'});
}]);

portfolio.directive("checkLast", function() {
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
			}, 50);
		})
	}
});

portfolio.directive("toggleIcons", function() {
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