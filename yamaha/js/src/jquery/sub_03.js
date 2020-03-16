// sub_03.js
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


  const conBox = $('#conBox');
  const ment = conBox.children('.ment');
  const h2 = conBox.children('h2');
  const imgBox = conBox.children('.imgBox');
  const textBox = conBox.children('.textBox');
  const textP = textBox.children('p');
  const video = conBox.children('p');
  const btn = conBox.children('button');

  let ment_offset = ment.offset().top;
  let h2_offset = h2.offset().top;
  let imgBox_offset = imgBox.offset().top;
  let textBox_offset = textBox.offset().top;


  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll >= 400) {
      ment.fadeIn(3000);
    }if (scroll > ment_offset + (1000)) {
      h2.fadeIn(3000);
    }if (scroll > ment_offset + (1500)) {
      imgBox.fadeIn(3000);
    }if (scroll > ment_offset + (2000)) {
      textP.addClass('action')
    }if (scroll > ment_offset + (2500)) {
      video.fadeIn(3000);
    }if (scroll > ment_offset + (3200)) {
      btn.fadeIn(3000);
    }
  })

  // 마지막 버튼 
  btn.on('mouseenter', function(){
    $(this).addClass('action');
  });

  })(jQuery);
  