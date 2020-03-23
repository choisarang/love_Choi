// sub_02.js
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



  // conBox 효과
  const conBox = $('#conBox');
  const one = conBox.children('.one');
  const line = one.children('.line');
  const text = one.children('.text');
  const two = conBox.children('.two');
  const two01 = two.children('.two_01');
  const two02 = two.children('.two_02');
  const two03 = two.children('.two_03');
  const three = conBox.children('.three');
  const three01 = three.children('.three_01');
  const three02 = three.children('.three_02');
  const three03 = three.children('.three_03');
  const btn = conBox.children('button');



  let one_offset = one.offset().top;
  let two_offset = two.offset().top;
  let three_offset = three.offset().top;


  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 500) {
      line.addClass('action');
      text.fadeIn(3500);
    } if(scroll > one_offset - (200)) {
      two01.fadeIn(3000);
      two02.fadeIn(4000);
      two03.fadeIn(5000);
    } if(scroll > two_offset - (100)) {
      three01.addClass('action');
    } if(scroll > two_offset + (300)) {
      three02.addClass('action');
    } if(scroll > two_offset + (700)) {
      three03.addClass('action');
    }if (scroll > three_offset + (1000)) {
      btn.fadeIn(3000);
    }
  });


  // 마지막 버튼 


  btn.on('mouseenter', function(){
    $(this).addClass('action');
  });


  })(jQuery);
  