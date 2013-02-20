app.directive("checkLast", function() {
	return function (scope, element) {
		if (scope.$last !== true) return;

		element.ready(function () {
			setTimeout(function() {
//				$('.slider ul').bxSlider({
//					easing: 'easeInOutExpo',
//					speed: 666,
//					minSlides: 4,
//					maxSlides: 4,
//					slideWidth: 220,
//					slideMargin: 20,
//					pager: false,
//					infiniteLoop: false,
//					hideControlOnEnd: false
//				});

				var container = $('.slider ul');

				container.isotope({
					itemSelector : 'li',
					layoutMode : 'fitRows'
				});

//				$container.infinitescroll({
//						navSelector  : '#page_nav',    // selector for the paged navigation
//						nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
//						itemSelector : '.element',     // selector for all items you'll retrieve
//						loading: {
//							finishedMsg: 'No more pages to load.',
//							img: 'http://i.imgur.com/qkKy8.gif'
//						}
//					},
//					// call Isotope as a callback
//					function( newElements ) {
//						$container.isotope( 'appended', $( newElements ) );
//					}
//				);
			}, 300);
		})
	}
});

app.directive("toggleIcons", function() {
	return function (scope, element) {
		element.on("mouseenter", function() {
			$(this).find('img').stop(true, true).animate({
				paddingTop: '-=10'
			}, 200, 'easeInOutExpo')
		});

		element.on("mouseleave", function() {
			$(this).find('img').stop(true, true).animate({
				paddingTop: '+=10'
			}, 200, 'easeInOutExpo')
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
