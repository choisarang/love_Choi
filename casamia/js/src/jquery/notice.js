(function($){
  // header sidebar ==================================
    // 보이게 ---------------------------------
    const barLink = $('.bar').children('a');
    const barBg = $('.bar_bg');
    const ex = barBg.find('.ex');
  
    barLink.on('click', function(){
      barBg.fadeIn();
    });
    ex.on('click', function(){
      barBg.fadeOut();
    });
  
    // accodian ---------------------------------
    const barList = $('.bar_list');
    const listDt = barList.find('dt');
   
  
    listDt.on('click', function(){
      let dtC = $(this).hasClass('action');
    
      if(dtC){
        $(this).removeClass('action');
        $(this).siblings('dd').slideUp();
      }else{
        $(this).addClass('action');
        $(this).siblings('dd').stop().slideDown();
      }
    });
  })(jQuery);