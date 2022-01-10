jQuery(function ($) {
  //トップへスクロール
  var startPos = 0;
  $(window).scroll(function () {
    //windowがscrollされたら＝動作のきっかけ
    var currentPos = $(window).scrollTop(); //windowが何pxスクロールしたか取得して変数に書き込む
    $("#position").text(currentPos); //＃positionの中身の文章に変数currentoPosの中身を書き込む
  });
});

//ユーザーエージェントブラウザ判別
jQuery(function($){
var userAgent = window.navigator.userAgent.toLowerCase();
    
if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    //IE向けの記述

}else{
    //その他のブラウザ向けの記述
    //アニメーションファイル読み込み(pc)
     /*  $.ajax({
        url: 'https://newfolk.jp/testsite/bikeloveforum2030/js/sTrigger_pc.js',
        dataType: 'script',
        cache: false
      }); */
}
});

//ユーザーエージェント判別s スマホとタブレットでviewportを切替え
jQuery(function($){
  var ua = navigator.userAgent;
  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
      $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
        //アニメーションファイル読み込み(sp)
     /*  $.ajax({
        url: 'https://newfolk.jp/testsite/bikeloveforum2030/js/sTrigger_sp.js',
        dataType: 'script',
        cache: false
      }); */
  } else {
      $('head').prepend('<meta name="viewport" content="width=1040">');
  }
});

//スクロール移動
jQuery(function($){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/*.protect設置でドラッグ＆ドロップ無効*/
/*.protect設置で右クリック無効*/
jQuery(function($){
  $('.protect').attr('onmousedown', 'return false');
  $('.protect').attr('onselectstart', 'return false');
  $('.protect').attr('oncontextmenu', 'return false');
});

          /*アイホン下部メニューバー対策 height:100vh*/
//          jQuery(function ($){
//$(document).ready(function () {
//  var hSize = $(window).height();
//  $('.top_mv_area ').height(hSize); // ブラウザの縦のサイズを取得
//});
//$(window).resize(function () { // ページをリサイズした時の処理
//  var hSize = $(window).height();
//  $('.top_mv_area').height(hSize); // ブラウザの縦のサイズを取得
//});
//});

// プラグインobject-fit
jQuery(function ($){
	objectFitImages('.top_staffBlog_btn img');
});

/* コンテンツによってPEGETOPの色を変える */
 jQuery(function($){
      $('.top_return').midnight();
    });
 
    /* MV下スライダー */
     jQuery(function($){
      $(".silickSlider1").slick({
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "8%",
        dots: false,
        slidesToShow: 4,
      });
  })
  
          /* スマホメニューアニメーションタイミング調整 */
  jQuery(function($){
    $('#nav-input').on('click',function(){
      if($('#nav-input').prop('checked')) { 
        $('.nav-content').css('transition-delay','0.3s');
        $('#nav-close').css('transition-delay','0s');
      }else{
        $('.nav-content').css('transition-delay','0s');
        $('#nav-close').css('transition-delay','0.3s');
    }
});
}); 

/* スマホメニュー表示の時に背景が動かないようにする */
      jQuery(function($){
        var scrollPos;//グローバルで初期かしておかないと上にもどっちゃう
        $('#nav-open,#nav-close').on('click',function(){ 
          if($('.common_wrapper').hasClass('navFixed')) { 
            $('.common_wrapper').removeClass('navFixed').css('top',0 + 'px');
           /*  $("#nav-open").removeClass("btn_bgw"); */
            window.scrollTo( 0 , scrollPos );
          }else{
            scrollPos = $(window).scrollTop();
          $('.common_wrapper').addClass('navFixed').css('top',-scrollPos + 'px');
          /* $("#nav-open").addClass("btn_bgw"); */
        }
    });
  });

         /*アイホン下部メニューバー対策 height:100vh*/
         //jQuery(function ($){
          //$(document).ready(function () {
          //  var hSize = $(window).height();
          //  $('.iphone-h ').height(hSize); / ブラウザの縦のサイズを取得
          //});
          //$(window).resize(function () { // ページをリサイズした時の処理
          //  var hSize = $(window).height();
          //  $('.iphone-h').height(hSize); // ブラウザの縦のサイズを取得
          //});
          //});

/* トップへ戻るボタンの動き */
          jQuery(function ($){
 $(".top_return").css({height: '70px' });
$('.top_return_text').hover(
    function() {  
        $(".top_return").css({height: '180px' }); 
    },
    function() {
        //マウスカーソルが離れた時の処理
        $(".top_return").css({height: '70px' }); 
    }
);
});

//スクロールしたらトップへ戻るボタン出現
//jQuery(function($){
  $(window).on('load scroll resize' , function(){
      /* var body_width = $('body').width(); */
          var scrollTop = $(window).scrollTop();
          var top = 800;
          if(scrollTop > top){
             $(".top_return").css({opacity: '1', visibility:'visible' });
          }else {
            $(".top_return").css({opacity: '0',visibility:'hidden' });
          }
});
//});

/* オーガナイザーパララックス */
jQuery(function($){
//初期設定
var $window = $(window),
    wh = window.innerHeight,
    nowScroll = $window.scrollTop(),
    reg = -7;//調整値、負の数だとスクロール時に上に動き、正の数だと下に動く。絶対値が大きいほど動く量が小さくなる。

$window.on('load resize', function () {
  wh = window.innerHeight;
  nowScroll = $window.scrollTop();
});
window.addEventListener('scroll', function () {
  nowScroll = $window.scrollTop();
}, { passive: true });

//トリガー
var $paraItem = $('.bg-full');
if ($paraItem.length) {
  parallax();
  $window.on('load resize', parallax);
  window.addEventListener('scroll', parallax);
}

//処理内容
function parallax() {
  $paraItem.each(function () {
    var $this = $(this),
      scroll_bottom = nowScroll + wh;
    $this.css('background-position-y', '');

    var nowpos = $this.offset().top;
    if (nowpos < scroll_bottom) {
      $this.css('background-position-y', (scroll_bottom - nowpos) / reg + -10 + 'px');
    }
  });
}
});

//jQuery(function($){
$(window).on('load',function(){
    /* $("#splash-logo").delay(1200).fadeOut('slow'); *///ロゴを1.2秒でフェードアウトする記述
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(100).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
	$('.under_content_line').addClass('line_trigger');
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {    
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる   
});
//});

/* イベント詳細ラインアニメーション */
//jQuery(function($){
  $(window).on('load scroll resize' , function(){
          var scrollTop = $(window).scrollTop();
          var top = 10;
          if(scrollTop > top){
             $(".event_detail__line").addClass("event_line_trigger");
          }
});
//});
/* jQuery(function($){
  $(window).on('load scroll resize' , function(){
          
             $(".event_detail__line").addClass("event_line_trigger");
          });
           }); */

/* イベント一覧ラインアニメーション */
//jQuery(function ($){
 $(window).on('scroll resize' , function(){
$('.event_listBox').each(function(){
      var body_width = $('body').width();
       if (body_width > 480){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			if (scroll > elemPos - 700){
				$(this).find('.event_listBox_line').addClass('eventList_line_trigger');
			}
    }else{
      var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
      	if (scroll > elemPos - 300){
				$(this).find('.event_listBox_line').addClass('eventList_line_trigger');
			}
    }
		});
    });
   // });

/* アバウトとロードマップの画像スライドインクラス付与 */
    jQuery(function ($){
      $('.imgBoxBg2').delay(3000).queue(function(){
            $(this).addClass('animate2');
            //$(this).addClass('opacity_animate2');
          });
        });
        

           
//スクロールしたら画像スライドイン
/* jQuery(function ($){
  $(window).load(function (){
		$('.slide_in').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + windowHeight/5){
				$(this).find('.imgBoxBg').addClass('animate');
        $(this).find('.imgBoxBg').addClass('opacity_animate');
			}
		});
    	});
      }); */