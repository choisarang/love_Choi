// main.js
(function($){
	//menu
	$('#gnb').on('mouseenter', function(){
			$(this).find('dd').stop().slideDown();
	});
	$('#gnb').on('mouseleave', function(){
			$(this).find('dd').stop().slideUp();
	});

	//slide
	var j=0;
	setInterval(function(){
//		j++;
//		if(j > 2){j=0;}
//		$('.slide_guide').animate({'top':-300 * j + 'px'});
			$('.slide_guide').animate({'top':-100 + '%'},function(){
					$(this).find('div').eq(0).appendTo('.slide_guide');
					$(this).css({'top':0});
			});
	},3000);

		
		
	//탭메뉴 만들기
	var tab = $('.tab_i').children('li');
	tab.on('click', function(e){
		e.preventDefault();
		var i = $(this).index();
		tab.removeClass('action');
		$(this).addClass('action');
		$('.tab_area').children('div').hide();
		$('.tab_area').children('div').eq(i).show();
	})
	//popup창 만들기(모달윈도우)	
	$('.con_btn').on('click', function(e){
		e.preventDefault();
		$('.popup').fadeIn();
		$('.popup_bg').fadeIn();
	});
	$('.close').on('click', function(e){
		e.preventDefault();
		$('.popup').fadeOut();
		$('.popup_bg').fadeOut();
	});
})(jQuery);