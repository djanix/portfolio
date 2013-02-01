$(document).ready(function () {
	//Lightbox
//	$('#mycarousel a.tip').lightBox({
//		imageLoading: '/images/design/lightbox/lightbox-ico-loading.gif',
//		imageBtnClose: '/images/design/lightbox/lightbox-btn-close.gif',
//		imageBtnPrev: '/images/design/lightbox/lightbox-btn-prev.gif',
//		imageBtnNext: '/images/design/lightbox/lightbox-btn-next.gif',
//		imageBlank: '/images/design/lightbox/lightbox-blank.gif',
//		txtOf: 'sur'
//	});
//
//	$('#mycarousel2 a.tip').lightBox({
//		imageLoading: '/images/design/lightbox/lightbox-ico-loading.gif',
//		imageBtnClose: '/images/design/lightbox/lightbox-btn-close.gif',
//		imageBtnPrev: '/images/design/lightbox/lightbox-btn-prev.gif',
//		imageBtnNext: '/images/design/lightbox/lightbox-btn-next.gif',
//		imageBlank: '/images/design/lightbox/lightbox-blank.gif',
//		txtOf: 'sur'
//	});

	//tooltip
	// $(".tip").tipTip({
	// 	maxWidth: "auto"
	// });

	//slider
	$('.slider ul').bxSlider({
		easing: 'easeInOutExpo',
		speed: 666,
		minSlides: 4,
		maxSlides: 4,
		slideWidth: 220,
		slideMargin: 20,
		pager: false,
		infiniteLoop: false,
		hideControlOnEnd: false
	});

	//contact_icons animation
	$('.contact_icons li').hover(function () {
		$(this).find('img').stop(true, true).animate({
			paddingTop: '-=10'
		}, 200, 'easeInOutExpo')
	}, function () {
		$(this).find('img').stop(true, true).animate({
			paddingTop: '+=10'
		}, 200, 'easeInOutExpo')
	})
});





