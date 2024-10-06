// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};

var swiper = new Swiper(".Swiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop:true,
	autoplay: {
	  delay: 4500,
	  disableOnInteraction: false,
	},
  });

  var swiper = new Swiper(".ourus", {
	slidesPerView: 4,
	loop:true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
		1: {
			slidesPerView: 1,
			spaceBetween: 0,
			slideToClickedSlide: true,
		},

		550: {
			slidesPerView: 1,
			spaceBetween: 0,
			slideToClickedSlide: true,
		},
		
		843: {
			slidesPerView: 3,
			spaceBetween: 0,
			slideToClickedSlide: true,
		},
		
		1060: {
			slidesPerView: 4,
			spaceBetween: 0,
			slideToClickedSlide: true,
		}
	}
  });