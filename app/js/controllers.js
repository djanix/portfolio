'use strict';

/* Controllers */

function header($scope) {
	$scope.template = { name: 'header.html', url: 'views/sections/header.html'};
}

function footer($scope) {
	$scope.template = { name: 'footer.html', url: 'views/sections/footer.html'};
}

function preFooter($scope) {
	$scope.template = { name: 'bottomSection.html', url: 'views/sections/preFooter.html'};
}

function PortfolioGlobalCtrl($scope, $http) {
	$http.get('data/i18n/en.json').success(function(data) {
		$scope.copy = data;
	});
}

function PortfolioHomeCtrl($scope, $http) {
	$http.get('data/work/web.json').success(function(data) {
		$scope.web = data;
	});

	$http.get('data/work/other.json').success(function(data) {
		$scope.other = data;
	});

	$scope.orderProp = $scope.copy['work_title'];
}

function PortfolioWebDetailCtrl($scope, $http, $routeParams) {
	$http.get('data/work/web.json').success(function(data) {
		$.each(data, function(index, value){
			if (value.link == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}

function PortfolioOtherDetailCtrl($scope, $http, $routeParams) {
	$http.get('data/work/other.json').success(function(data) {
		$.each(data, function(index, value){
			if (value.link == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}