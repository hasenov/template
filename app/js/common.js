$(function() {

	$('.showcase-slider__js').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		customPaging: function(slider, i) {
			return '<span class="slider__dot"></span>';
		},
		appendDots: '.showcase-slider__dots',
		fade: true,
	});

	$(".content-services__item").not(":first").hide();
	$(".service-tab").click(function() {
		$(".service-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-services__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.ba-slider').each(function() {
		$(this).beforeAfter();
	});

	$(".content-difference__item").not(":first").hide();
	$(".tabs-difference__tab").click(function() {
		$(".tabs-difference__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-difference__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.gallery').magnificPopup({
		delegate: 'a:not(.slick-cloned)',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Ошибка при загрузке картинки #%curr%</a>.'
		}
	});

});
