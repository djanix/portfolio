var app = angular.module('portfolio', []);

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'views/home.html', controller: "PortfolioHomeCtrl"}).
		when('/work/:section/:title', {templateUrl: 'views/item-detail.html', controller: "PortfolioWorkDetailCtrl"}).
		otherwise({redirectTo: '/'});
});