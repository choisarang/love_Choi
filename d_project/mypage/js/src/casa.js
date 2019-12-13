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


   // mainBox ==========================================================
   const portLink = $('.portBox').children('a')
   const popupBg = $('.popup_bg');
   const ex = $('button');
 
   portLink.on('click', function(){
     popupBg.fadeIn();
   });
 
   ex.on('click', function(){
     popupBg.fadeOut();
   });


  // 이미지 객체
   let imgUrl = "../img/"
   img = ["port_01","port_02","port_03","port_04","port_05","port_06","port_07","port_08","port_09","port_10","port_11","port_12","port_13","port_14","port_15","port_16","port_17","port_18","port_19",];


  //  li 생성 ===============================
   const portUl = $('.port_area').children('ul');

   for(let i=0; i<img.length; i++){
   portUl.append('<li></li>');
   let portLi = portUl.children('li');
    portLi.eq(i).css({backgroundImage:"url("+imgUrl + img[i]+".png)"});
   }

   
  //  scroll 사라지기
  const port = $('.port_area');
  const scroll = $('.scroll');

  let portScroll = port.scrollTop();
  let portUlH = portUl.outerHeight();

  
  port.on('scroll',function(){
    portScroll = port.scrollTop();
    portUlH = portUl.outerHeight();

    if(portScroll>portUlH/1.2){
      scroll.fadeOut();
    }else{
      scroll.fadeIn();
    }
   });
  

})(jQuery);