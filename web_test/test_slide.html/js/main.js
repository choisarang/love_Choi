(function($){
	var slide = $('.slide');
	var i=0;
	var timed=3000;
	
	slide.eq(i).siblings().hide();
	
	setInterval(function(){
		i++;
		if(i>=3){i=0;}
		
		//slide.eq(i).fadeIn();
		//slide.eq(i).siblings().fadeOut(); or
		
		slide.eq(i).css({zIndex:10});
		slide.eq(i).fadeIn(function(){
			slide.eq(i).siblings().hide();
			slide.eq(i).css({zIndex:0});
		});
			
	},timed);
})(jQuery);