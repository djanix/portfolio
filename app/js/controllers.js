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

	// IE8 fix for window.getComputedStyle
	if (!window.getComputedStyle) {
		window.getComputedStyle = function(el, pseudo) {
			this.el = el;
			this.getPropertyValue = function(prop) {
				var re = /(\-([a-z]){1})/g;
				if (prop == 'float') prop = 'styleFloat';
				if (re.test(prop)) {
					prop = prop.replace(re, function () {
						return arguments[2].toUpperCase();
					});
				}
				return el.currentStyle[prop] ? el.currentStyle[prop] : null;
			}
			return this;
		}
	}

	$scope.device = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	$scope.getLanguage();
});



app.controller("PortfolioHomeCtrl", function($scope, $http) {
	$http.get('data/work.json')
		.success(function(data) {
			$scope.work = data;
		}).error(function(data) {
			console.log('error getting work from json file: ' + data);
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