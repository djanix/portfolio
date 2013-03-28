app.directive("checkLast", function($timeout) {
	return function(scope, element) {
		if (scope.$last !== true) return;

		$timeout(function() {
			var container = $('.slider ul');

			container.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});

//			$container.infinitescroll({
//					navSelector  : '#page_nav',    // selector for the paged navigation
//					nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
//					itemSelector : '.element',     // selector for all items you'll retrieve
//					loading: {
//						finishedMsg: 'No more pages to load.',
//						img: 'http://i.imgur.com/qkKy8.gif'
//					}
//				},
//				// call Isotope as a callback
//				function( newElements ) {
//					$container.isotope( 'appended', $( newElements ) );
//				}
//			);
		}, 100);
	}
});

app.directive("menuToggleIcons", function() {
	return function(scope, element) {
		element.on("mouseenter", function() {
			element.find('span').addClass('hover');
		});

		element.on("mouseleave", function() {
			element.find('span').removeClass('hover');
		});
	}
});

app.directive("changeLanguage", function() {
	return function(scope, element) {
		element.on("click", function(e) {
			e.preventDefault();
			scope.swapLanguage();
		});
	}
});

app.directive("skillPercentage", function() {
	return function(scope, element) {
		scope.$watch(element, function () {
			element.css({width: element.attr('data-percent') + '%'});
		});
	}
});

app.directive("twitterStyling", function(jqtweet) {
	return function(scope, element) {
		scope.$watch(element, function () {
			var newEl = jqtweet.ify.clean(element.text());

			newEl.replace(/USER/g, scope.tweets[element.index()].user.screen_name)
				 .replace(/ID/g, scope.tweets[element.index()].id_str);

			element.html(newEl);
		});
	}
});

app.directive("socialToggleIcons", function() {
	return function(scope, element) {
		element.on("mouseenter", function() {
			$(this).find('.active').stop(true, true).animate({
				opacity: '1'
			}, 300, 'easeInOutExpo')
		});

		element.on("mouseleave", function() {
			$(this).find('.active').stop(true, true).animate({
				opacity: '0'
			}, 300, 'easeInOutExpo')
		});
	}
});

app.directive("vertAlign", function($timeout) {
	return function(scope, element) {
		$timeout(function() {
			var height = element.height(),
				parentHeight = element.parent().height(),
				padding = (parentHeight - height) / 2;
			element.css('padding-top', padding);
		});
	}
});