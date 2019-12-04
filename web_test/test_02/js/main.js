(function($){
	var headBox = $('#headBox');
	var menuUl = headBox.find('ul');
	var menuDt = headBox.find('dt');
	var menuDd = headBox.find('dd');
	
	menuUl.on('mouseenter', function(){
		menuDd.stop().slideDown();
	});
	menuUl.on('mouseleave', function(){
		menuDd.stop().slideUp();
	});
	menuDt.children('a').on('focus', function(){
		menuDd.stop().slideDown();
	});
	menuDd.children('a').eq(-1).on('blur', function(){
		menuDd.stop().slideUp();
	});
	
})(jQuery);