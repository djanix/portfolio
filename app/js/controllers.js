app.controller("PortfolioGlobalCtrl", function($scope, $http) {
	$scope.getLanguage = function(language) {
		$http.get('data/i18n/' + language + '.json')
			.success(function(data) {
				$scope.copy = data;
			}).error(function(data) {
				console.log('error getting language copy from json file: ' + data);
			});
	};

	$scope.changeLanguage = function(language) {
		$scope.siteLanguage = language;
		$scope.getLanguage(language);
	};

	$scope.swapLanguage = function() {
		if ($scope.siteLanguage == 'en') {
			$scope.changeLanguage('fr');
		} else {
			$scope.changeLanguage('en');
		}
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
	$scope.siteLanguage = 'en';
	$scope.currentYear = new Date().getFullYear();
	$scope.getLanguage($scope.siteLanguage);
});



app.controller("PortfolioHomeCtrl", function($scope, $http) {
	$http.get('data/work.json')
		.success(function(data) {
			$scope.work = data;

			$.each($scope.work, function(index, value) {
				$scope.work[index].images.selected = $scope.work[index].images.medium;

				if ($scope.device == 'desktop') {
					$scope.work[index].images.selected = $scope.work[index].images.big;
				} else if ($scope.device == 'mobile') {
					$scope.work[index].images.selected = $scope.work[index].images.small;
				}
			});

		}).error(function(data) {
			console.log('error getting work from json file: ' + data);
		});
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