// scroll_image.js

(function($){
  const win = $(window);
  const wrap = $('#wrap');
  const viewBox = $('#viewBox');
  viewBox.css({position:'fixed', top:0, backgroundColor:'#fff'});
  viewBox.find('.title').css({position:'relative', top:0});
  // 이미지 담기 =========================================
  const viewFix = viewBox.find('.fix_img');
  let url = '../img/apple/large_';

  let j;
  for(let i=0; i<123; i++){
    if(i<10){
      j = '000'+i;
    }else if(i<100){
      j = '00'+i;
    }else if(i<1000){
      j = '0'+i;
    }

    j += '.jpg'; //j에 .jpg를 더해라
    viewFix.append(`<img src="${url + j}" alt="이미지">`)
    viewFix.children('img').eq(i).css({zIndex:123-i});
  }
  viewFix.css({zIndex:50});
  viewFix.children('img').eq(0).show();

  // 스크롤 기능 =========================================
  win.on('scroll',function(){
    let thisS = $(this).scrollTop();
    // console.log(thisS);

  //글씨 투명해지게 만들기 =============================
  let op = 1 - (thisS * 0.01);
  if(op < 0){op=0}
  console.log(op);
  viewBox.find('.title').css({top:(-thisS / 2) + 'px', opacity: op}); // 스크롤 내릴 때 title 영역 보이게
  
  //이미지 교체하기 =============================
    let imgI = parseInt(thisS / 1700 * 123);
    if(imgI >= 122){imgI = 122;}
    viewFix.children('img').eq(imgI).siblings().hide();
    viewFix.children('img').eq(imgI).show();
    
  });

})(jQuery);