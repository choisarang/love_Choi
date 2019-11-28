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
  
  gnbDl.find('a').eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
    gnbUl.removeClass('action');
  });
  
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


  // 해당페이지 선택효과 =====================================
  gnbLi.eq(0).find('dt').children('a').addClass('select');
  gnbLi.eq(0).find('dd').children('a').eq(0).addClass('select');
  gnbLi.eq(0).find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"})

  

  // headBox_small------------------------------------------
const small = $('.small');
const barLink = small.find('a');
const barBg = small.children('.bar_bg');
const ex = barBg.find('.ex');

barLink.on('click', function(){
  barBg.stop().fadeIn()
});

ex.on('click', function(){
  barBg.stop().fadeOut()
});


//accodian menu ===================
const barList = $('.bar_list');
const barDl = barList.children('dl');
const barDt = barDl.children('dt');
const barDd = barDl.children('dd');
const barDdLink = barDd.children('a')

barDt.on('click', function(){
  let dtC = $(this).hasClass('action');

  if(dtC){
    $(this).removeClass('action');
    $(this).siblings('dd').slideUp();
  }else{
    $(this).addClass('action');
    $(this).siblings('dd').stop().slideDown();
  }
});

barDdLink.on('focus',function(){
  $(this).parent('dd').siblings('dt').css({fontWeight:"bold"});
  $(this).parent('dd').siblings('dt').find('i').css({color:"#1b398f"});
});

barDdLink.on('blur', function(){
  $(this).parent('dd').siblings('dt').css({fontWeight:"normal"});
  $(this).parent('dd').siblings('dt').find('i').css({color:"#777"});
})


// landing -------------------------------------------------------------------

const win = $(window);
const brandBox = $('.brandBox');
const brDt = brandBox.find('dt');
const brDd = brandBox.find('dd');

const iconBox = $('.iconBox');
const iconLi = iconBox.children('li');

let winH = win.outerHeight();

// conBox 위치값 파악 ---------------------------------
// brandBox
let brandBox_offset = brandBox.offset().top;

// // iconBox
let iconBox_offset = iconBox.offset().top;
let iconScroll1 = iconBox_offset - (500);
let iconScroll2 = iconBox_offset - (300);
let iconScroll3 = iconBox_offset - (100);

win.on('scroll', function(){
  let winScroll = win.scrollTop();

// brandBox 나타나게 만들기 ----------------------------------------
  if(winScroll > winH/5){
    brDt.addClass('action');
  }else{
    brDt.removeClass('action');
  }

  if(winScroll > winH/4){
    brDd.addClass('action');
  }else{
    brDd.removeClass('action');
  }

  // iconBox ----------------------------------------

  if(winScroll > brandBox_offset){
    iconLi.addClass('action');
  }else{
    iconLi.removeClass('action');
  }


  });


  // top 버튼 -------------------------------------------
  const topBtn = $('.top_btn').children('button');

  // 어느정도 위치했을 떄 보이기
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 800 ) {
      topBtn.show();
    } else {
      topBtn.hide();
    }
  } );

  // 버튼 이동
  topBtn.on('click', function(){
    $('html').animate({scrollTop:0},500);
  });


})(jQuery);