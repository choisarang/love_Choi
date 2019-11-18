(function($){
  const wrap = $('#wrap');
  
  // headBox -------------------------------------------
  const headBox = wrap.children('#headBox');
  const gnbUl = headBox.find('ul');
  const gnbLi = gnbUl.children('li');
  const gnbDl = gnbLi.children('dl');
  const gnbDt = gnbDl.children('dt');
  const gnbDd = gnbDl.children('dd');
  const gnbDtLink = gnbDt.children('a');
  const gnbDdLink = gnbDd.children('a');
  
  gnbDl.on('mouseenter', function(){
    gnbUl.addClass('action');
    gnbDd.stop().slideDown();
    $(this).children('dt').children('a').addClass('active');
    $(this).children('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
  });
  gnbDl.on('mouseleave', function(){
    gnbDd.stop().slideUp();
    gnbUl.removeClass('action');
    $(this).children('dt').children('a').removeClass('active');
    $(this).children('dd').css({backgroundColor:"transparent"});
  });
  
  gnbDtLink.on('focus',function(){
    gnbUl.addClass('action');
    gnbDd.stop().slideDown();
    $(this).addClass('active');
    $(this).parent('dt').siblings('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
  });
  
  
  gnbDl.find('a').eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
    gnbUl.removeClass('action');
  });
  
  gnbDdLink.on('blur', function(){
    $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
    $(this).parent('dd').css({backgroundColor:"transparent"})
  })
  
  
  // gnbDd 효과
  gnbDd.children('a').on('mouseenter focus', function(){
    $(this).addClass('active');
  });
  
  gnbDd.children('a').on('mouseleave blur', function(){
    $(this).removeClass('active');
  });

})(jQuery);