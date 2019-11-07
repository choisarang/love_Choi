(function($){
  const miniProduct = $('#miniProduct');

  const btn = miniProduct.find('button');
  const nextBtn = miniProduct.find('.next')
  const prevBtn = miniProduct.find('.prev')

  const indicator = miniProduct.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');

  const productWrap = miniProduct.children('.product_wrap');
  const product = productWrap.children('.product');
  const proLi = product.children('li');


  let proLen = proLi.length;

  indiLi.eq(0).children('a').addClass('active');

  for(let i=0; i < proLen; i++){
  proLi.eq(i).css({backgroundImage:'url("../img/test_02/menu_0'+(i+1)+'.png")'});
  };

  let cloneLi = proLi.eq(-1).clone(true); // 위치 중요
  
  cloneLi.prependTo(product);

  let i = 0;
  indiLink.on('click focus', function(e){
    e.preventDefault();
    i = $(this).parent().index()
    product.animate({marginLeft:(-100 * i) + '%'})
    indiLi.eq(i).find('a').addClass('active');
    indiLi.eq(i).siblings().find('a').removeClass('active');
  });

  nextBtn.on('click', function(e){
    e.preventDefault();
    i++;
    if(i>=proLen){
      product.css({marginLeft:'100%'});
      i=0;
    }
    product.stop().animate({marginLeft:(-100 * i) + '%'})
    indiLi.eq(i).find('a').addClass('active');
    indiLi.eq(i).siblings().find('a').removeClass('active');

  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    i--;
    product.stop().animate({marginLeft:(-100 * i) + '%'},function(){
      if(i<=-1){
        i=proLen-1;
        product.css({marginLeft:(-100*i)+'%'});
      }
    });
    indiLi.eq(i).find('a').addClass('active');
    indiLi.eq(i).siblings().find('a').removeClass('active');
  });


  // 자동 슬라이드 -------------------------------------------------
  let go, timed = 3000;
  const slideGo = function(){
    go = setInterval(function(){
      i++;
      if(i>=proLen){
        product.css({marginLeft:'100%'});
        i=0;
      }
      product.stop().animate({marginLeft:(-100 * i) + '%'})
      indiLi.eq(i).find('a').addClass('active');
      indiLi.eq(i).siblings().find('a').removeClass('active');
    },timed)
  };
  slideGo();

  const slideStop = function(){
    clearInterval(go)
  }; //마우스 컨트롤 하려고 선언

  // 마우스 컨트롤 ------------------------------------------------
  product.on('mouseenter', function(){
    slideStop();
  });
  product.on('mouseleave', function(){
    slideGo();
  });


})(jQuery);