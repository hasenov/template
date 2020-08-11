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

});
