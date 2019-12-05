(function($){
	var gnb = $('#gnb');
	var gnbUl = gnb.find('ul');
	var gnbDt = gnb.find('dt');
	var gnbDd = gnb.find('dd');
	
	gnbUl.on('mouseenter', function(){
		$(this).addClass('action');
		gnbDd.stop().slideDown();
	});
	
	gnbUl.on('mouseleave', function(){
			$(this).removeClass('action');
		gnbDd.stop().slideUp();
	});
	
	gnbDt.children('a').on('focus', function(){
		$(this).parents('ul').addClass('action');
		gnbDd.stop().slideDown();
	});
	
	gnbDd.children('a').eq(-1).on('blur', function(){
	$(this).parents('ul').removeClass('action');
		gnbDd.stop().slideUp();
	});
		
	// viewBox =================================
	var viewBox = $('#viewBox');
	var viewUl = viewBox.children('ul');
	var viewLi = viewUl.children('li')
	viewLi.eq(-1).clone().prependTo(viewUl);
	
	viewUl.css({marginLeft:-100 + '%'});
	
	var viewLiLen = viewLi.length;
	
	var i=0;
	var go, timed=3000;
	
	var slideGo = function(){
		go = setInterval(function(){
			i++;
			console.log(i);
			if(i>=viewLiLen){
				viewUl.css({left:100+'%'});
				i=0;
			}
			 viewUl.stop().animate({left:-100 * i + '%'});
		},timed);
	};
	
	slideGo();
	
	// conBox ==================================
	var notiTab = $('.noti_tab');
	var gallTab = $('.gall_tab');
	var notiCon = $('.noti_con');
	var gallCon = $('.gall_con');
	
	notiTab.on('click', function(e){
		$(this).addClass('click')
		$(this).siblings().removeClass('click')
		gallCon.css({zIndex:0});
		notiCon.css({zIndex:1});
	});
	
	gallTab.on('click', function(e){
		$(this).addClass('click')
		$(this).siblings().removeClass('click')
		notiCon.css({zIndex:0});
		gallCon.css({zIndex:1});
	});

	// popup =========================
	var popupBg = $('.popup_bg');
	var popup = $('.popup');
	var btn = popup.children('button');
	
	notiCon.children('a').on('click', function(){
		popupBg.fadeIn();
	});
	
	btn.on('click', function(){
		popupBg.fadeOut();
	})
	
	
})(jQuery);