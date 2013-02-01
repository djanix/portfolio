'use strict';

/* Controllers */

function PortfolioGlobalCtrl($scope, $http) {
	$http.get('data/i18n/en.json').success(function(data) {
		$scope.copy = data;
	});
}

function PortfolioListCtrl($scope, $http) {
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
			if (value.title == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}

function PortfolioOtherDetailCtrl($scope, $http, $routeParams) {
	$http.get('data/work/other.json').success(function(data) {
		$.each(data, function(index, value){
			if (value.title == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}