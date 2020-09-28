 AOS.init({
     duration: 800,
     easing: 'slide'
 });

 $('.curso-frequentar').on('click', function(){
    window.location.href = $(this).attr('data-url')
    //  alert($(this).attr('data-url'))
 })
 
 $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

 var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};
 $('#inscrever').click(function() {
    var notice = new PNotify({
        title: 'Veja o seu Email',
        text: 'Obrigado por inscrever-se na Nossa Plataforma, verifique o seu Email para continuar a sua subcrição.',
        type: 'success',
        addclass: 'stack-bar-top',
        stack: stack_bar_top,
        width: "70%"
    });
});


   
 var stack_bar_top_contacto = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};
 $("input[value='Confirmar']").click(function() {
    var notice = new PNotify({
        title: 'YetoÁfrica',
        text: 'Obrigado por escreveres para nós.',
        type: 'success',
        addclass: 'stack-bar-top',
        stack: stack_bar_top_contacto,
        width: "70%"
    });
});

 (function($) {

     "use strict";

     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });

     


     var fullHeight = function() {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function() {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function() {
         setTimeout(function() {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();

     var carousel = function() {
         $('.home-slider').owlCarousel({
             loop: true,
             autoplay: true,
             margin: 0,
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             nav: false,
             autoplayHoverPause: false,
             items: 1,
             navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 1
                 },
                 1000: {
                     items: 1
                 }
             }
         });
         $('.carousel-testimony').owlCarousel({
             autoplay: true,
             center: true,
             loop: true,
             items: 1,
             margin: 30,
             stagePadding: 0,
             nav: false,
             navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 1
                 },
                 1000: {
                     items: 2
                 }
             }
         });

     };
     carousel();

     var carouselcurso = function() {
         $('.carousel-curso').owlCarousel({
             items: 4,
             loop: true,
             margin: 10,
             autoplay: true,
             autoplayTimeout: 1000,
             autoplayHoverPause: true
         });
     }
     carouselcurso();

     $('nav .dropdown').hover(function() {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function() {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });


     var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
    };
    
    goToTop();

     $('#dropdown04').on('show.bs.dropdown', function() {
         console.log('show');
     });

     // scroll
     var scrollWindow = function() {
         $(window).scroll(function() {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap');

             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                 }
             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();


     var counter = function() {

         $('#nos').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number').each(function() {
                     var $this = $(this),
                         num = $this.data('number');
                     console.log(num);
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, { offset: '95%' });

     }
     counter();

     var contentWayPoint = function() {
         var i = 0;
         $('.ftco-animate').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function() {

                     $('body .ftco-animate.item-animate').each(function(k) {
                         var el = $(this);
                         setTimeout(function() {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, { offset: '95%' });
     };
     contentWayPoint();


     // magnific popup
     $('.image-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         fixedContentPos: true,
         mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 300 // don't foget to change the duration also in CSS
         }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
     });

 })(jQuery);