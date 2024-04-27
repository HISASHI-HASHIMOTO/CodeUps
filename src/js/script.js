
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //要素の取得とスピードの設定
var box = $('.colorbox'),
speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
       $(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
 });
});

  //ナビバートグル
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();  
      $(this).addClass('is-open');
    }
  });

// スワイパー
  const slide1 = new Swiper("#slide1", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
      autoplay: {
      delay: 3000,
    },
  });

  const slide2 = new Swiper("#slide2", {
    slidesPerView: 1,
    breakpoints:{
     // 画面幅が600px以上の場合は3枚
          768:{
            slidesPerView: 3,
          }
        },
        // ナビボタンが必要なら追加
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    spaceBetween: 40,
  });


});
