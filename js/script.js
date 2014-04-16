var initForm = function () {
	var clearElem = $(".clearForm")
	var submitElem = $(".submitForm")
	var form = $(".contactContent form");
	var input = $(".contactContent input");
	var textarea = $(".contactContent textarea");
	var succses = $(".contactContent .succses");
	clearElem.click(function() {
		input.val("");
		textarea.val("");
	});
	form.submit(function() {
		form.fadeOut(500);
		setTimeout(function () {
			succses.fadeIn(600);
		}, 500);
		return false;
	});
};

var initSlider = function () {
	if ($('.slider').length < 1) {
		return false;
	}
	$('.slider')._TMS({
		preset:'diagonalExpand',
		easing:'easeOutQuad',
		duration:800,
		pagination:true,
		slideshow:8000,
		banners:true,
		waitBannerAnimation:false,
		bannerShow:function(banner){
			banner
				.css({opacity:'0'})
				.stop()
				.animate({opacity:'1'},700, function(){$(this).css({opacity:'none'})})
		},
		bannerHide:function(banner){
			banner
				.stop()
				.animate({opacity:'0'},700)
		}
	});
};

$(document).ready(function(){
	initForm();
	initSlider();
});