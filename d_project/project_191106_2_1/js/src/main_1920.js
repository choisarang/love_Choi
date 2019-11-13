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
  $(this).parent('dd').prevAll('dt').children('a').addClass('action')
  $(this).parent('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
});
gnbDdLink.on('blur', function(){
  $(this).parent('dd').prevAll('dt').children('a').removeClass('action');
  $(this).parent('dd').css({backgroundColor:"transparent"});
});


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

let viewLen = proLi.length;

for(let i=0; i<viewLen; i++){
  proLi.eq(i).css({backgroundImage:'url("../img/main_view_0' + (i+1) + '.jpg")'})
};

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

  $(this).addClass('action');
  indiLi.eq(i).siblings().children('a').removeClass('action');
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

      indiLi.eq(i).children('a').addClass('action');
      indiLi.eq(i).siblings().children('a').removeClass('action');
    }, timed);
  };
  const slideStop = function(){
    clearInterval(go)
  };

  slideGo();
  
// brandBox -------------------------------------------
const brandBox = $('#brandBox');
const brandLi = brandBox.find('li');
const brandLink = brandLi.children('a');

let brandLen = brandLi.length;

for(let i=0; i<brandLen; i++){
  brandLi.eq(i).css({backgroundImage:'url("../img/brand_0' + (i+1) + '.jpg")'})
};

brandLink.on('mouseenter focus', function(){
  $(this).addClass('action');
});
brandLink.on('mouseleave blur', function(){
  $(this).removeClass('action');
})
// menuBox -------------------------------------------
const menuBox = $('#menuBox');
const menuSlide = menuBox.find('.menu_slide');
const menuUl = menuSlide.children('ul');
let menuLi = menuUl.children('li');
const menuLink = menuLi.children('a');
const menuBtnWrap = menuBox.find('.arrow_btn');
const menuBtn = menuBtnWrap.children('button');

let mListLen = menuLi.length;
// img넣기 ======
for(let i=0; i<mListLen; i++){
  menuLi.eq(i).css({backgroundImage:'url("../img/' + (i+1) + '.png")'});
};

let menuLiw = menuLi.eq(0).outerWidth(true);
menuLi.clone(true).appendTo(menuUl);
menuUl.css({width: mListLen * 2 * menuLiw - (menuLiw - menuLi.eq(0).outerWidth()) + menuLiw});
menuUl.css({left:'50%', transform:'translateX(-50%)'});


const ActionGo = function(){ 
  menuLi = menuUl.children('li');
  let menuCenter = Math.floor(menuLi.length / 2);
  menuLi.removeClass('action');
  menuLi.eq(menuCenter).addClass('action');
};
ActionGo();



// btn ========
menuBtn.on('click', function(e){
  e.preventDefault();
  let next = $(this).hasClass('next');
  if(next){
    menuUl.animate({marginLeft: -menuLiw}, function(){
      menuLi.eq(0).appendTo(menuUl);
      menuUl.css({marginLeft:0});
      ActionGo();
    });
  }else{
    menuUl.animate({marginLeft: menuLiw}, function(){
      menuLi.eq(-1).prependTo(menuUl);
      menuUl.css({marginLeft:0});
      ActionGo();
    })
  }
});








// snsBox -------------------------------------------
const snsBox = $('#snsBox');
const snsUl = snsBox.find('ul');
const snsLi = snsUl.children('li');
const snsLiLen = snsLi.length;

for(let i=0; i<snsLiLen; i++){
  snsLi.eq(i).css({backgroundImage:'url("../img/sns_0' + (i+1) + '.jpg")'})
}
// -------------------------------------------




// -------------------------------------------



})(jQuery);