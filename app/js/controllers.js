'use strict';

/* Controllers */

function PortfolioGlobalCtrl($scope, $http) {
	$http.get('data/i18n/en.json').success(function(data) {
		$scope.copy = data;
	}).error(function(data) {
		console.log(data);
	});
}

//portfolio.factory('Copy', function($http) {
//	$http.get('data/i18n/en.json').success(function(data) {
//		return data;
//	});
//});

function PortfolioHomeCtrl($scope, $http) {
	getWork($http, 'web', function(err, data) {
		if (err) return console.log(err);
		$scope.web = data;
	});

	getWork($http, 'other', function(err, data) {
		if (err) return console.log(err);
		$scope.other = data;
	});

	$scope.orderProp = $scope.copy['work_title'];
}

function PortfolioWebDetailCtrl($scope, $http, $routeParams) {
	getWork($http, 'web', function(err, data) {
		if (err) return console.log(err);

		$.each(data, function(index, value){
			if (value.link == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}

function PortfolioOtherDetailCtrl($scope, $http, $routeParams) {
	getWork($http, 'other', function(err, data) {
		if (err) return console.log(err);

		$.each(data, function(index, value){
			if (value.link == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
}

function getWork($http, section, callback) {
	$http.get('data/work/' + section + '.json')
	.success(function(data) {
		return callback(null, data);
	}).error(function(data) {
		return callback(data, null);
	});
}