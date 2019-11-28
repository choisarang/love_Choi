(function($){

const wrap = $('#wrap');
// 각 디바이스별 크기 기준 설정
let mobile=480, tablet=768, laptop=970, pc=1280, pcfull=1920;
// 기본 디바이스 명칭설정
const device = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull'];

let nowSize;
let beforeW = $(window).outerWidth(true);//true쓰면 margin값까지 포함

// 디바이스 크기 체크
const DeviceSet = function(winW){
  if(winW <= mobile){
    nowSize = device[0];
  }else if(winW > mobile && winW <= tablet){
    nowSize = device[1];
  }else if(winW > tablet && winW <= laptop){
    nowSize = device[2];
  }else if(winW > laptop && winW <= pc){
    nowSize = device[3];
  }else{
    nowSize = device[4];
  }
  return nowSize;
}
let beforeDevice = DeviceSet(beforeW);
console.log(nowSize);
// DeviceDate(beforeDevice);

// 파이어폭스인가 아닌가 판단 -------------------------------------
let browser = navigator.userAgent.toLowerCase();
if(browser.indexOf('firefox') !== -1){
  nowb = 'firefox';
}else{
  nowb = 'other';
}
console.log(nowb);

// 사이즈 변경시마다 새로고침 -------------------------------------------

$(window).on('resize', function(){
  let afterW = $(window).outerWidth(true);
  let afterDecive = DeviceSet(afterW);

    if(beforeDevice !== afterDecive){
      if(nowb == 'firefox'){
        window.location = window.location;
      }else{
        location.reload();
      }
    // location.reload();
    window.location = window.location; //firefox가 안되서 강제 적용
    }
  });



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
  // $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
  // $(this).parent('dd').css({backgroundColor:"transparent"})
// });


// gnbDd 효과
gnbDd.children('a').on('mouseenter focus', function(){
  $(this).addClass('active');   
});

gnbDd.children('a').on('mouseleave blur', function(){
  $(this).removeClass('active');
});


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

for(let i=0; i<viewLen-1; i++){
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

// for(let i=0; i<brandLen; i++){
  // // brandLi.eq(i).css({backgroundImage:'url("../img/brand_0' + (i+1) + '.jpg")'})
// };


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
  menuLi.eq(i).css({backgroundImage:'url("../img/menu/' + (i+1) + '.png")'});
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
// 화면 스크롤 -------------------------------------------

const scroll = $('.scroll');
const scVal = [];
for(let i=0; i<scroll.length; i++){
  let j = scroll.eq(i).offset().top;
  scVal.push(j);
  
}
// console.log(scVal);

let rel = true;
let wheeln = 0;


$(window).on('mousewheel DOMMouseScroll', function(e){
  let oe = e.originalEvent;
  let oeDelta = oe.wheelDelta;
  let delta = null;
  if(!oeDelta){
    delta = oe.detail * 40;
  }else{
    delta = oeDelta * -1;
  }
  console.log(delta)
  if(rel){
    rel = false;
    
    if(delta>0){
      wheeln++;
      if(wheeln>=scVal.length){
        wheeln = scVal.length-1
      }
    }else{
      wheeln--;
      if(wheeln<=0){
        wheeln=0;
      }
    }
    
    $('html, body').stop().animate({scrollTop:scVal[wheeln]+'px'}, 700, function(){
      // setTimeout(function(){
        rel = true;
        // },1000);
        
      });
    }
  });
  
  // sidebar 이동 -------------------------------------------
  sideLink.on('click', function(){
    wheeln = $(this).parent().index();
    $('html, body').stop().animate({scrollTop:scVal[wheeln]})
  })
  
  // top 버튼 -------------------------------------------
  const topBtn = $('.top_btn').children('button');

  // 어느정도 위치했을 떄 보이기
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 500 ) {
      topBtn.show();
    } else {
      topBtn.hide();
    }
  } );

  // 버튼 이동
  topBtn.on('click', function(){
    $('html').animate({scrollTop:0},500);
  })

})(jQuery);