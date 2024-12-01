
jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 300);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

	// Scroll to end

 	//collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });

	//  STICKY NAV
	 $( window ).scroll(function() {
		var height = $(window).scrollTop();
		if(height >= 100) {
			$('header').addClass('fixed-menu');
		} else {
			$('header').removeClass('fixed-menu');
		}
	});

	new WOW().init();

   















//main
});