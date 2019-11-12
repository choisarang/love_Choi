(function($){
const wrap = $('#wrap');

// headBox -------------------------------------------
const headBox = wrap.children('#headBox');
const gnbUl = headBox.find('ul');
const gnbLi = gnbUl.children('li');
const gnbDt = gnbLi.find('dt');
const gnbDd = gnbLi.find('dd');
const gnbDtLink = gnbDt.children('a');
const gnbDdLink = gnbDd.children('a');

gnbLi.on('mouseenter', function(){
  gnbUl.addClass('action');
  gnbDd.stop().slideDown();
  $(this).find('a').addClass('action');
  $(this).find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
});
gnbLi.find('a').on('focus', function(){
  $(this).addClass('action');
  $(this).parent('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
})


gnbLi.on('mouseleave', function(){
  gnbDd.stop().slideUp();
  gnbUl.removeClass('action');
  $(this).find('a').removeClass('action');
  $(this).find('dd').css({backgroundColor:"transparent"});
});
gnbDtLink.on('focus', function(){
  gnbUl.addClass('action');
  gnbDd.stop().slideDown();
});
gnbDdLink.eq(-1).on('blur', function(){
  gnbDd.stop().slideUp();
  gnbUl.removeClass('action');
});

// sidebar -------------------------------------------
const sideBar = $('.side_bar');
const sideLi = sideBar.children('li');
const sideLink = sideLi.children('a');

sideLink.on('mouseenter focus', function(){
  $(this).addClass('action');
});

sideLink.on('mouseleave blur', function(){
  $(this).removeClass('action');
});

// viewBox -------------------------------------------
const product = $('.product');
const proLi = product.children('li');
const indicator = $('.indicator');
const indiLi = indicator.children('li');
const indiLink = indiLi.children('a');

product.css({position:'relative', width:'100%'})
proLi.css({position:'absolute', width:'100%'})
proLi.eq(0).nextAll().hide();

indiLink.eq(0).addClass('action');
let i = 0;

indiLink.on('focus click', function(e){
  e.preventDefault();
  i = $(this).parent().index();
  proLi.eq(i).css({zIndex:100});
  proLi.eq(i).stop().fadeIn(function(){
    proLi.css({zIndex:0});
  })
  proLi.eq(i).siblings().fadeOut();

  indiLink.eq(i).addClass('action');
  indiLink.eq(i).siblings().removeClass('action');
  });
  // 자동슬라이드 =========================================================
  let go, timed=5000;
  let indiLiLen = indiLi.length;
  console.log(indiLiLen);
  
  
  const slideGo = function(){
    go = setInterval(function(){
    i++;
    if(i >= indiLiLen){i=0;}
      proLi.eq(i).css({zIndex:100});
      proLi.eq(i).stop().fadeIn(function(){
        proLi.css({zIndex:0});
      })
      proLi.eq(i).siblings().fadeOut();

      indiLink.eq(i).addClass('action');
      // indiLink.eq(i).siblings('a').removeClass('action');
    }, timed);
  };
  const slideStop = function(){
    clearInterval(go)
  };

  slideGo();
  // 마우스 올리면 멈추기 ---------------------------------
  product.on('mouseenter', function(){
    slideStop();
  });
  product.on('mouseleave', function(){
    slideGo();
  });
  
// brandBox -------------------------------------------
const brandBox = $('#brandBox');
const brandLi = brandBox.find('li');
const brandLink = brandLi.children('a');

brandLink.on('mouseenter focus', function(){
  $(this).addClass('action');
});
brandLink.on('mouseleave blur', function(){
  $(this).removeClass('action');
})
// menuBox -------------------------------------------
// snsBox -------------------------------------------
const snsBox = $('#snsBox');
const snsUl = snsBox.find('ul');
const snsLi = snsUl.children('li');
const snsLink = snsLi.children('a');

const imgLen = snsLi.length;
// -------------------------------------------
// -------------------------------------------

for(let i=0; i<=imgLen; i++){
  i=0;
  const imgUrl = '../img/sns_0'+ (i+1) + '.jpg'
  snsLi.css({backgroundImage:'url('+ imgUrl + ')'})
}


})(jQuery);