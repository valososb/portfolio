var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
     initialSlide: 4,
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    on: {
        init: function(){
            var index = this.activeIndex;
  
            var target = $('.product-slider__item').eq(index).data('target');
  
            console.log(target);
  
            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }
  
  });

  swiper.on('slideChange', function () {
    var index = this.activeIndex;
  
    var target = $('.product-slider__item').eq(index).data('target');
  
    console.log(target);
  
    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');
  
  });