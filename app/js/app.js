angular.module('portfolio', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'views/home.html',   controller: PortfolioHomeCtrl}).
			when('/web/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioWebDetailCtrl}).
			when('/other/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioOtherDetailCtrl}).
			otherwise({redirectTo: '/'});
	}]);