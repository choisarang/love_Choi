(function($){
	var headBox = $('#headBox');
	var gnb = $('.gnb');
	var gnbDl = gnb.find('dl')
	var gnbDt = gnb.find('dt');
	var gnbDd = gnb.find('dd');

	
	gnbDl.on('mouseenter', function(){
		$(this).children('dd').stop().slideDown();
	});
	gnbDl.on('mouseleave', function(){
		$(this).children('dd').stop().slideUp();
	});
	
	gnbDt.children('a').on('focus', function(){
		gnbDd.stop().slideUp();
		$(this).parent().siblings('dd').stop().slideDown();
	});
	
		
	
	// viewBox =================================
	var viewBox = $('#viewBox');
	var viewUl = viewBox.children('ul');
	var viewLi = viewUl.children('li');
	
	
	viewLi.eq(-1).clone().prependTo(viewUl);
	viewUl.css({marginLeft:-100 + '%'});
	
	var viewLiLen = viewLi.length;
	
	var i=0;
	var go, timed = 3000;
	
	var slideGo = function(){
		go = setInterval(function(){
			i++;
			if(i>=viewLiLen){
				viewUl.css({left:100+'%'})
				i=0;
			}
			viewUl.stop().animate({left:-100 * i + '%'});
		},timed)
	};
	
	slideGo();
	
	// contentBox =================================
	var tabN = $('.tab').find('.tab_n');
	var tabG = $('.tab').find('.tab_g');
	var noti = $('.noti');
	var gall = $('.gall');
	
		
	tabN.on('click', function(e){
		e.preventDefault();
		$(this).siblings('li').find('a').removeClass('action');
		$(this).find('a').addClass('action');
		gall.css({zIndex:0})
		noti.css({zIndex:1})
	});
		
	tabG.on('click', function(e){
		e.preventDefault();
		$(this).siblings('li').find('a').removeClass('action');
		$(this).find('a').addClass('action');
		noti.css({zIndex:0})
		gall.css({zIndex:1})
	});
	

	var link = $('.link').children('a');
	var popup = $('.popup');
	var btn = popup.children('button');
	
	link.on('click', function(e){
		e.preventDefault();
		popup.fadeIn();
	});
	
	btn.on('click', function(){
		popup.fadeOut();
	});
	
	
	
})(jQuery);