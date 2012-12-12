/* Author:
 Janic Beauchemin
 */

jQuery(document).ready(function() {

	//Lightbox
	$('#mycarousel a.tip').lightBox({
		imageLoading: '/images/design/lightbox/lightbox-ico-loading.gif',
		imageBtnClose: '/images/design/lightbox/lightbox-btn-close.gif',
		imageBtnPrev: '/images/design/lightbox/lightbox-btn-prev.gif',
		imageBtnNext: '/images/design/lightbox/lightbox-btn-next.gif',
		imageBlank: '/images/design/lightbox/lightbox-blank.gif',
		txtOf: 'sur'
	});
	$('#mycarousel2 a.tip').lightBox({
		imageLoading: '/images/design/lightbox/lightbox-ico-loading.gif',
		imageBtnClose: '/images/design/lightbox/lightbox-btn-close.gif',
		imageBtnPrev: '/images/design/lightbox/lightbox-btn-prev.gif',
		imageBtnNext: '/images/design/lightbox/lightbox-btn-next.gif',
		imageBlank: '/images/design/lightbox/lightbox-blank.gif',
		txtOf: 'sur'
	});

	//Hover images social
	$('#social img').each(function() {
		var t = $(this);
		var src1 = t.attr('src'); // initial src
		var newSrc = src1.substring(src1.lastIndexOf('/'), src1.lastIndexOf('.')); // let's get file name without extension
		t.hover(function() {
			$(this).attr('src', '/images/design' + newSrc + '_hover.' + /[^.]+$/.exec(src1)); //last part is for extension
			$(this).attr('height', '31');
			$('.imgHoverable').css('padding-top', '0');
		}, function() {
			$(this).attr('src', '/images/design' + newSrc + '.' + /[^.]+$/.exec(src1)); //removing '-over' from the name
			$(this).attr('height', '24');
			$('.imgHoverable').css('padding-top', '7px');
		});
	});

	//tooltip
	// $(".tip").tipTip({
	// 	maxWidth: "auto"
	// });

	//slider
	 $('.slider ul').bxSlider({
	 	easing: 'easeInOutExpo',
	 	speed: 666,
	 	displaySlideQty: 4,
	 	moveSlideQty: 4,
	 	infiniteLoop: false,
	 	hideControlOnEnd: false
	 });
});






