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
  

  gnbDl.find('a').on('focus',function(){
    gnbUl.addClass('action');
    gnbDd.stop().slideDown();
    $(this).addClass('active');
    $(this).parents('dl').find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});

    
    $(this).closest('li').find('dd').find('a').eq(-1).on('blur', function(){
      // console.log('part dd last');
      $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
        $(this).parent('dd').css({backgroundColor:"transparent"})
    });  
    
    });
  
  // gnbDl.find('a').eq(-1).on('blur', function(){
  //   gnbDd.stop().slideUp();
  //   gnbUl.removeClass('action');
  // });
  
  // gnbDdLink.on('blur', function(){
  //   $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
  //   $(this).parent('dd').css({backgroundColor:"transparent"})
  // });





  
  // gnbDd 효과
  gnbDd.children('a').on('mouseenter focus', function(){
    $(this).addClass('active');
  });
  
  gnbDd.children('a').on('mouseleave blur', function(){
    $(this).removeClass('active');
  });

  // headBox_small------------------------------------------
const small = $('.small');
const barLink = small.find('a');
const barView = small.children('.bar_view');
const ex = barView.children('.ex');

barLink.on('click', function(){
  barView.stop().fadeIn()
});

ex.on('click', function(){
  barView.stop().fadeOut()
});

barLink.on('mouseenter focus', function(e){
  e.preventDefault()
  $(this).css({color:"$main",fontWeight:"bold"})
});

barLink.on('mouseleave blur' ,function(e){
  e.preventDefault()
  $(this).css({color:"$textem",fontWeight:"normal"})
});
})(jQuery);