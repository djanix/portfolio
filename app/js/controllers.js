app.controller("PortfolioGlobalCtrl", function($scope, $http) {
	$scope.defineDefaultLanguage = function() {
		$scope.siteLanguage = 'en';
	};

	$scope.defineLanguage = function(language) {
		$scope.siteLanguage = language;
	};

	$scope.getLanguage = function() {
		if (!$scope.siteLanguage) {
			$scope.siteLanguage = 'en';
		}

		$http.get('data/i18n/' + $scope.siteLanguage + '.json')
			.success(function(data) {
				$scope.copy = data;
			}).error(function(data) {
				console.log('error getting language copy from json file: ' + data);
			});
	};

	$scope.getWork = function(section) {
		$http.get('data/work/' + section + '.json')
			.success(function(data) {
				$scope[section] = data;
			}).error(function(data) {
				console.log('error getting ' + section + 'work from json file: ' + data);
			});
	};

	$scope.device = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	$scope.getLanguage();
});



app.controller("PortfolioHomeCtrl", function($scope) {
	$scope.getWork('web');
	$scope.getWork('other');
});



app.controller("PortfolioWorkDetailCtrl", function($scope, $routeParams) {
	$scope.getWork($routeParams.section);

	$.each($scope[$routeParams.section], function(index, value){
		if (value.link == $routeParams.title) {
			$scope.item = $scope[$routeParams.section][index];
		}
	});
});



app.controller("languageCtrl", function($scope) {
	$scope.swapLanguage = function() {
		if (!$scope.siteLanguage) $scope.defineDefaultLanguage();

		if ($scope.siteLanguage == 'en') {
			$scope.defineLanguage('fr');
			$scope.getLanguage();
		} else {
			$scope.defineLanguage('en');
			$scope.getLanguage();
		}
	};
});



app.controller("twitterFeedCtrl", function($scope, $http, jqtweet) {
	$scope.tweets = [];

	jqtweet.loadTweets(function(err, data) {
		if (err) {
			console.log('error getting tweets');
		} else {
			$scope.tweets = data;
			$scope.$apply();
		}
	});
});