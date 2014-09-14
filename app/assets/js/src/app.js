var app = angular.module('portfolio', []);

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'views/home.html', controller: "PortfolioHomeCtrl"}).
		otherwise({redirectTo: '/'});
});