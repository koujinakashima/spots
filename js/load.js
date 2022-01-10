// loading
jQuery(function($){
	/* var h = $(window).height(); */
	/* $(".headerLogo").css({bottom: '-30px', opacity: '1'}); */
	/* $('body').css("overflow", "hidden"); */
	progress();
	$('#loader-bg ,#loader').css('display', 'block');
});
function progress() {
	var progress = 0;
	var imgCount = $('img').length;
	$("img").each(function(){
		var src = $(this).attr('src');
		$("<img>").attr('src',src).on('load',function(){
			progress++;
		});
	});
	setInterval(function(){
		 $("#progress-bar").css({
			 'width': (progress / imgCount) * 100 + '%'
		 });
	}, 1);
}

//全ての読み込みが完了したら実行
$(window).on("load",function(){
	/* $('body').css("overflow","visible"); */
  $('#loader-bg').delay(1500).fadeOut(1000);
});

/* $(window).on("load",function(){
	$('body').css("overflow","visible");
  $('#loader-bg').delay(1500).fadeOut(1000).queue(function() {
  $('.hImg').addClass('scrollin');
});
}); */

//15秒たったら強制的にロード画面を非表示
jQuery(function(){
  setTimeout('stopload()',15000);
});
function stopload(){
	/* $('body').css("overflow","visible"); */
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  /* $('#bgMovie,.btnVideo').css({"opacity":"1"});
  $('.headerLogo').css({"bottom":"0","opacity":"1"}); */
 /*  $('.headerPickup,.navBtnOpen,.btnReserve.pc').css({"right":"0","opacity":"1"});
  $('.header .spLogo').css({"left":"0","opacity":"1"}); */
}


