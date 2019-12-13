(function($){

  // headBox ------------------------------------------------------------------------------
  const headBox = $('#headBox');
  const gnb = $('#gnb');
  const gnbDtLink = headBox.find('dt').children('a');
  const gnbDd = headBox.find('dd');
  const gnbDdLink = gnbDd.children('a');

  gnb.on('mouseenter', function(){
    headBox.addClass('action');
    gnbDd.stop().slideDown();
  });

  gnb.on('mouseleave', function(){
    headBox.removeClass('action');
    gnbDd.stop().slideUp();
  });
  
  gnbDtLink.on('mouseenter focus', function(){
    $(this).addClass('active')
    headBox.addClass('action');
    gnbDd.stop().slideDown();
  });

  gnbDtLink.on('mouseleave blur', function(){
    $(this).removeClass('active')
  });

  gnbDdLink.eq(-1).on('blur', function(){
    headBox.removeClass('action');
    gnbDd.stop().slideUp();
  });

  gnbDdLink.on('mouseenter focus', function(){
    $(this).addClass('active')
    $(this).parent('dd').siblings('dt').children('a').addClass('active');
  });

  gnbDdLink.on('mouseleave blur', function(){
    $(this).removeClass('active');
    $(this).parent('dd').siblings('dt').children('a').removeClass('active');
  });


})(jQuery);