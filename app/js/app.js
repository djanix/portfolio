angular.module('portfolio', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'views/item-list.html',   controller: PortfolioListCtrl}).
			when('/web/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioWebDetailCtrl}).
			when('/other/:title', {templateUrl: 'views/item-detail.html',   controller: PortfolioOtherDetailCtrl}).
			otherwise({redirectTo: '/'});
	}]);