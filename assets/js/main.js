(function ($) {
  "use strict";
    // mobile-menu


	$('.mobile-menu-btn').on("click",function(){
		$('.main-nav').addClass('show-menu');
	  });
	
	  $('.menu-close-btn').on("click",function(){
		$('.main-nav').removeClass('show-menu');
	  });

	  // mobile-drop-down
	
	  $(".main-nav .bi").on('click', function (event) {
		var $fl = $(this);
		$(this).parent().siblings().find('.sub-menu').slideUp();
		$(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
		if ($fl.hasClass('bi-chevron-down')) {
			$fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
		} else {
			$fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
		}
		$fl.next(".sub-menu").slideToggle();
	  });
   
//   // sticky header
// window.addEventListener('scroll',function(){
// 	const header = document.querySelector('header.style-1');
// 	header.classList.toggle("sticky",window.scrollY > 0);
//   });

// sticky header
window.addEventListener('scroll',function(){
  const header = document.querySelector('.header-area');
  header.classList.toggle("sticky",window.scrollY > 0);
});

// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-button')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.add('show-sidebar')
        })
    })
})
closeIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.remove('show-sidebar')
        })
    })
})

 window.onclick = function(event){
    // Menu Toggle button sidebar
    searchWrap.forEach((el)=>{
      if(event.target === el){
        el.classList.remove('show-sidebar')
      }
    })
}
  /* ---------------------------------------------
     Mobile-search-area
     --------------------------------------------- */

$('.search-btn').on("click", function(){
	$('.mobile-search').addClass('slide');
  });
  
  $('.search-cross-btn').on("click", function(){
	$('.mobile-search').removeClass('slide');
  });


  /* ---------------------------------------------
     Sliders
     --------------------------------------------- */
// service slider
var swiper = new Swiper(".service-slider", {
  slidesPerView: 1,
  speed: 3000,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000
},
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    386: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".banner-slider", {
  speed: 5000,
  spaceBetween: 30,
  loop: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
});



// Magnific Popup video

$(document).ready(function() {
$('.video-popup').magnificPopup({
  type: 'iframe'
  });
});

/// active  slider item
 $(".swiper-slide .nav-item .nav-link ").on("click",function(){  
        $('.swiper-slide .nav-item .nav-link').removeClass('active');
          $(this).addClass("active");
 })

var heroSliderTwo = new Swiper('.banner2', {
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  roundLengths: true,
  parallax: true,
  effect: 'fade',
  navigation: false,
  fadeEffect: {
      crossFade: true,
  },
  autoplay: {
      delay: 4000
  },
  pagination: {
      el: ".banner2-pagination",
      clickable: true,
  }
});


new WOW().init({
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
});
})(jQuery);