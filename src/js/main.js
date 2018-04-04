$(window).scroll(function () {
	if ($(this).scrollTop() > 136) {
		$('.fixed-menu').addClass("black");
	} else {
		$('.fixed-menu').removeClass("black");
	}
});
