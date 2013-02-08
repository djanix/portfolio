app.controller("PortfolioGlobalCtrl", function($scope, $http) {
	$http.get('data/i18n/en.json')
	.success(function(data) {
		$scope.copy = data;
	}).error(function(data) {
		console.log(data);
	});
});

app.controller("PortfolioHomeCtrl", function($scope, $http) {
	getWork($http, 'web', function(err, data) {
		if (err) return console.log(err);
		$scope.web = data;
	});

	getWork($http, 'other', function(err, data) {
		if (err) return console.log(err);
		$scope.other = data;
	});
});

app.controller("PortfolioWorkDetailCtrl", function($scope, $http, $routeParams) {
	getWork($http, $routeParams.section, function(err, data) {
		if (err) return console.log(err);

		$.each(data, function(index, value){
			if (value.link == $routeParams.title) {
				$scope.item = data[index];
			}
		});
	});
});

function getWork(http, section, callback) {
	http.get('data/work/' + section + '.json')
	.success(function(data) {
		return callback(null, data);
	}).error(function(data) {
		return callback(data, null);
	});
}