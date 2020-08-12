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

});
