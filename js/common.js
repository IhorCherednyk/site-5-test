$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.main-head').addClass("sticky");
    }
    else{
        $('.main-head').removeClass("sticky");
    }
});

$(function() {

	$(".s-slider").owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:false,
		navSpeed:1000,
		dotsSpeed:1000
	});

	$(".bog-slider").owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:false,
		navSpeed:1000,
		dotsSpeed:1000
	});

	$(".main-nav ul li a").on("click",function(event){
		event.preventDefault();
		var id = $(this).attr('href')
		var top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".main-nav").is(":visible")) {
			$(".main-nav").fadeOut(600);
			$(".main-nav li").removeClass("fadeInDown animated")
		} else {
			$(".main-nav").fadeIn(600);
			$(".main-nav li").addClass("fadeInDown animated")
		};
	});


	$(".fa").animated("flip");
	$(".animate-l").animated("fadeInLeft");
	$(".animate-r").animated("fadeInRight");
	$(".animate-c").animated("zoomIn");

	$(".s-plans").waypoint(function() {
		$(".plan-items").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});



});
