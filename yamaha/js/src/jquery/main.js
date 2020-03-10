// main.js
(function($){
  // 메뉴 바
  const gnb = $('.gnb');
  const gnbBg = gnb.children('.gnb_bg');
  const ex = gnb.find('.ex');

  gnb.children('a').on('click', function(){
    gnbBg.stop().fadeIn();
  });

  ex.on('click', function(){
    gnbBg.stop().fadeOut();
  });


  //메뉴 바 메뉴 hover 효과
  const gnbDl = gnb.find('dl');
  const gnbDt = gnb.find('dt');
  const gnbDtLink = gnbDt.children('a');
  const gnbDd = gnb.find('dd');
  const gnbDdLink = gnbDd.children('a');

  gnbDtLink.on('mouseenter',function(){
    $(this).addClass('action');
  });

  gnbDtLink.on('mouseleave',function(){
    $(this).removeClass('action');
  });

  gnbDdLink.on('mouseenter',function(){
    $(this).parent('dd').siblings('dt').children('a').addClass('action');
  });

  gnbDdLink.on('mouseleave',function(){
    $(this).parent('dd').siblings('dt').children('a').removeClass('action');
  });

  gnbDtLink.on('focus',function(){
    $(this).addClass('action');
  });

  gnbDtLink.on('blur',function(){
    $(this).removeClass('action');
  });

  gnbDdLink.on('focus',function(){
    $(this).parent('dd').siblings('dt').children('a').addClass('action');
  });

  gnbDdLink.on('blur',function(){
    $(this).parent('dd').siblings('dt').children('a').removeClass('action');
  });

  let lastDdLink = gnbDl.eq(-1).children('dd').eq(-1).children('a');

  lastDdLink.on('blur', function(){
    ex.find('a').focus();
  });


  // sound
  const soundBtn = $('.sound').children('input');
  const on = $('.sound').children('.on');
  const off = $('.sound').children('.off');

  soundBtn.on('click', function(e){
    e.preventDefault();
    let btnOn = $(this).hasClass('on');
    if(btnOn){//on버튼
      $(this).css({display:'none'});
      off.css({display:'block'});
    }else{
      $(this).css({display:'none'});
      on.css({display:'block'});
    }
  });
  

  

  // viewBox 세로 슬라이드
  const viewBox = $('#viewBox');
  const slideUl = viewBox.find('ul');
  const slideLi = slideUl.children('li');
  const indi = viewBox.children('.indi');
  const btn = indi.children('button');

  slideLi.eq(-1).clone().prependTo(slideUl);

  let viewBoxH = viewBox.outerHeight();
  let slideLen = slideLi.length;
  
  slideUl.css({marginTop:-viewBoxH});
  

  let i = 0;
  btn.on('click', function(e){
  e.preventDefault();
  let btnL = $(this).hasClass('next');
  if(btnL){//next버튼
    i++;
    if(i >= slideLen){
      slideUl.css({'top':viewBoxH});
      i = 0;
    }    
    slideUl.animate({'top':-viewBoxH * i + 'px'});
  }else{//prev버튼
    i--;
    slideUl.animate({'top':-viewBoxH * i + 'px'}, function(){
      if(i <= -1){
        i = slideLen-1;
        slideUl.css({'top':-viewBoxH * i + 'px'});
      }
    });
  }
});



})(jQuery);