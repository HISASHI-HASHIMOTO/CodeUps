
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
      $('html').css('overflow', ''); // スクロールを元に戻す
    } else {
      $('.js-drawer-menu').fadeIn();  
      $(this).addClass('is-open');
      $('html').css('overflow','hidden') // 背景スクロールを固定にする
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
    slidesPerView: "auto",
    spaceBetween: 24,
    breakpoints:{
     // 画面幅が600px以上の場合は3枚
          768:{
            spaceBetween: 40,
          }
        },
        // ナビボタンが必要なら追加
        navigation: {
          nextEl: ".campaign__button-next",
          prevEl: ".campaign__butto n-prev",
        },
  });


// ページトップボタン
function PageTopAnime() {

  var scroll = $(window).scrollTop(); 
  if (scroll >= 200){
    $('.page-top').removeClass('DownMove'); 
    $('.page-top').addClass('UpMove');      
  }else{
    if($('.page-top').hasClass('UpMove')){
      $('.page-top').removeClass('UpMove'); 
      $('.page-top').addClass('DownMove');  
    }
  }
  
  var wH = window.innerHeight; 
  var footerPos =  $('#footer').offset().top; 
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 
    $('.page-top').css('bottom',pos); 
  }else{
    if($('.page-top').hasClass('UpMove')){
      $('.page-top').css('bottom','10px');
    }
  }
}

// ページトップボタン
$(window).scroll(function () {
PageTopAnime();
});

$(window).on('load', function () {
PageTopAnime();
});

$('.page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});


// タブ
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});


// モーダル
$(".gallery__img img").click(function () {
  // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
  $("#graydisplay").html($(this).prop("outerHTML"));
  //そして、fadeInで表示する。
  $("body").addClass("no_scroll"); // 背景固定させるクラス付与
  $("#graydisplay").fadeIn(200);
  return false;
});
// コース画像モーダル非表示イベント
// モーダル画像背景 または 拡大画像そのものをクリックで発火
$("#graydisplay").click(function () {
  // 非表示にする
  $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
  $("#graydisplay").fadeOut(200);
  return false;
});


// アコーディオン
$(function () {
  $(".js-accordion__item .js-accordion__content").css(
    "display",
    "block"
  );
  $(".js-accordion__item .js-accordion__title").addClass(
    "is-open"
  );
  $(".js-accordion__title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});


});
