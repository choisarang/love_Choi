// test_01_result.js
(function($){
  const miniProduct = $("#miniProduct");
  const indicator = miniProduct.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');
  let indiLiLen = indiLi.length;

  const adverBanner = miniProduct.find('.product').children('ul');
  const adverNth = adverBanner.children('li');

  indiLi.eq(0).addClass('active');
// ------------------------------------------------------------------------
  let i=0;

  indiLink.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    adverBanner.animate({'marginLeft':(-100 * i) +'%'});

    indiLi.eq(i).addClass('active'); //or
    // $(this).parent().addClass('active');

    indiLi.eq(i).siblings('li').removeClass('active');

    $(this).on('keyup', function(e){
      e.preventDefault();
      if(e.keyCode ==13){
      adverNth.eq(i).children('a').focus();
      }
    })
    
  });


  // 자동슬라이드 =========================================================
  let go, timed=1000;
  const slideGo = function(){
    go = setInterval(function(){
    i++;
    if(i >= indiLiLen){
      i=0;
    }
      adverBanner.stop().animate({'marginLeft':(-100 * i) +'%'});
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
    }, timed); // 일정시간마다
  };
  const slideStop = function(){
    clearInterval(go) //setInterval을 취소
  };

  slideGo();
  // 마우스 올리면 멈추기 ---------------------------------
  miniProduct.on('mouseenter', function(){
    slideStop();
  });
  miniProduct.on('mouseleave', function(){
    slideGo();
  })

})(jQuery);