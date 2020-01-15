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
  // 첫 화면에 나타내기 
  indiLi.eq(0).addClass('active');
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
  let go, timed=4000;
  const slideGo = function(){
    go = setInterval(function(){
    i++;
    if(i >= indiLiLen){
      i=0;
      product.css({left:100 + '%'});
    }
      product.stop().animate({left:(-100 * i) +'%'});
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
    }, timed); // 일정시간마다
  };
  const slideStop = function(){
    clearInterval(go) //setInterval을 취소
  };

  // slideGo();

  // // 마우스 올리면 멈추기 ---------------------------------
  // viewBox.on('mouseenter', function(){
  //   slideStop();
  // });
  // viewBox.on('mouseleave', function(){
  //   slideGo();
  // });


// bestBox =====================================================================

textList = [{subtitle:'patio',
subtext:' series',
maintitle:'patio',
maintext:' IV1200'},
{subtitle:'muse',
subtext:' series',
maintitle:'muse',
maintext:' 1400 table'},
{subtitle:'beige',
subtext:' series',
maintitle:'beige',
maintext:' tea table'}
]
bestUrl = "../img/";
bestList = ['best_01', 'best_02', 'best_03']


// li 생성, 이미지,텍스트 넣기
const bestUl = $('.best_area');
for(let i=0; i<bestList.length; i++){
  bestUl.append('<li><div class="img_box"></div><div class="text_box"><div class="text_area"><div class="text_inner"><span><em></em></span><h3><em></em></h3></div></div></div></li>');
  let bestLi = bestUl.children('li');
  let bestImg = bestLi.children('.img_box');

  bestImg.eq(i).css({backgroundImage:"url(" + bestUrl + bestList[i] + ".png)"});
  let li_nth = bestLi.eq(i);

  li_nth.find('span').append(textList[i].subtext);
  li_nth.find('span').children('em').append(textList[i].subtitle);
  li_nth.find('h3').append(textList[i].maintext);
  li_nth.find('h3').children('em').append(textList[i].maintitle);
}

// indicator
const bestBtn = $('.best_indi').children('button');

const bestLi = bestUl.children('li');
const bestImg = bestLi.children('.img_box');
const bestText = bestLi.children('.text_box');

const bestLiLen = bestLi.length;

  bestBtn.on('click', function(e){
    e.preventDefault();
    let btnL = $(this).hasClass('next');
    if(btnL){//next
      i++;
      if(i>=bestLiLen){i=0}
    }else{//prev
      i--;
      if(i<0){i=bestLiLen-1}
      console.log(i);
    }
      bestLi.eq(i).css({'zIndex':100});
      bestLi.eq(i).fadeIn(function(){
        bestLi.css({'zIndex':10});
      });
      bestLi.eq(i).siblings().fadeOut();
  });


})(jQuery);