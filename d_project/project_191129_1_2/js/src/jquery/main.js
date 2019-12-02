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


  // viewBox slide ==================================================
  const viewBox = $('#viewBox');
  const indi = $('.indicator');
  const indiLi = indi.find('li');
  const indiLink = indiLi.children('a');
  const product = $('.product');
  let productLi = product.children('li');


  // slide 복제
  productLi.eq(-1).clone().prependTo(product);
  productLi = product.children('li');

  // indicator --------------------------------------------------
  let indiLiLen = indiLi.length;
  let i=0;

  product.css({marginLeft:'-100'+'%'}); //1번째화면보이게(실제2번째)

  indiLink.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    product.animate({left:(-100 * i) +'%'});

    indiLi.eq(i).addClass('active'); //or
    // $(this).parent().addClass('active');

    indiLi.eq(i).siblings('li').removeClass('active');

  });


  // 자동 슬라이드 ---------------------------------
  let go, timed=3000;
  const slideGo = function(){
    go = setInterval(function(){
    i++;
    if(i >= indiLiLen){
      i=0;
    }
      product.stop().animate({left:(-100 * i) +'%'});
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
    }, timed); // 일정시간마다
  };
  const slideStop = function(){
    clearInterval(go) //setInterval을 취소
  };

  slideGo();

  // 마우스 올리면 멈추기 ---------------------------------
  viewBox.on('mouseenter', function(){
    slideStop();
  });
  viewBox.on('mouseleave', function(){
    slideGo();
  });



})(jQuery);