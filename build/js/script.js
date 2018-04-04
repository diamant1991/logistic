$(window).scroll(function () {
	if ($(this).scrollTop() > 136) {
		$('.fixed-menu').addClass("black");
	} else {
		$('.fixed-menu').removeClass("black");
	}
});

$('.slideshow').slick({
    autoplay: false,
    dots: true,
    fade: true,
  	cssEase: 'linear',
  	prevArrow: $('.stock-prev'),
    nextArrow: $('.stock-next'),
    dotsClass: 'slider-paging-number',
    customPaging: function (slick) { return (slick.currentSlide + 1) + '/' + slick.slideCount; }
}).on('afterChange', function (event, slick, currentSlide) {
	$(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));
	$('.page--stock .page__number').text(slick.options.customPaging.call(this, slick, currentSlide));
});


$('.slideshow2').slick({
    autoplay: false,
    dots: true,
    fade: true,
  	cssEase: 'linear',
  	prevArrow: $('.services-prev'),
    nextArrow: $('.services-next'),
    dotsClass: 'slider-paging-number',
    customPaging: function (slick) { return (slick.currentSlide + 1) + '/' + slick.slideCount; }
}).on('afterChange', function (event, slick, currentSlide) {
	$(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));
	$('.page--services .page__number').text(slick.options.customPaging.call(this, slick, currentSlide));
});

$('.sidebar__btn').click(function(e) {
  e.preventDefault()
  if($('.fixed-menu').is(':hidden')){
    $(this).find('.hamburger-box').addClass('is-active')
    $('.fixed-menu').show()
  }
  else{
    $('.fixed-menu').hide()
    $(this).find('.hamburger-box').removeClass('is-active')
  }
});