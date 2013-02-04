angular.module('portfolio', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'views/home.html',   controller: PortfolioHomeCtrl}).
			when('/web/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioWebDetailCtrl}).
			when('/other/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioOtherDetailCtrl}).
			otherwise({redirectTo: '/'});
	}])

	.directive("checkLast", function() {
		return function (scope, element) {
			if (scope.$last === true) {
				element.ready(function () {
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
				})
			}
		}
	});