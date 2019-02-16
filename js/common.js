$(function(){
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'fx-menu-slide', "fx-listitems-slide", "position-right"],
		navbar: {
			title: '<img src="img/logo.svg" alt="Ай-Ван лецензированная автошкола">'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	$('.instructors-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			}
		}
	});
	
	$('select').selectize({
		create: true,
	});
	
//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	
	$('.price-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	
	$('.feedback-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});
	$('.licenses-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	
	$(".popup").magnificPopup();
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
    // $('body').fadeOut();
});


$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});