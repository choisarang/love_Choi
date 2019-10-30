// slide_01.js
(function($){
  // .view_indicator 내부의 li(a)를 선택하면,
  // #viewBox 내부의 .guide 박스가 이동하게 만들어라.

  // index() 순서 가져오는 것, eq() 순서를 주는것
  // margin-left: -100%, -200%  || position:relative; left:-100%, -200% ...

  const viewBox   = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi    = indicator.find('li');
  const indiLink  = indiLi.children('a');
  const slideForm = viewBox.find('.slide_form');
  const guideBox  = viewBox.find('.guide');
  const guideDiv  = guideBox.children('div');

  let timed = 500;
  let myn = 0, maxn = guideDiv.length;

  slideForm.css({'overflow':'hidden'});
  indicator.css({'zIndex': 500});  
  guideBox.css({'position':'relative','top':0,'left':0});




  const MoveSlide = function(n){                        // MoveSlide는 
    indiLink.removeClass('action');                     // indiLink(control버튼 'a')에 .action을 없애고
    indiLi.eq(n).children('a').addClass('action');      // indiLi(control버튼)의 1개(클릭하는 버튼)의 'a'에 .action을 생성
    guideBox.animate({'marginLeft':(-100 * n)+'%'},     // guideBox(슬라이드화면)에 애니메이션으로 왼쪽으로 이동(오른쪽 이미지)
    )};


    let go;                                             
    const GoSlide = function(){                         // GoSlide는
      go = setInterval(function(){                      // go는 setInterval(일정시간마다 반복하게 하는 기능)
        myn++;                                          // myn 1씩 더하고
        if(myn >= maxn){myn = 0;}                       // 만약 myn가 maxn(div갯수=4)보다 크거나 같을 경우 myn는 0
        MoveSlide(myn);                                 // MoveSlide를 myn만큼 실행해라
      }, timed *4);                                     // 최종 : myn를 1씩 더할때 실행되다가 maxn(4)가 되면 0으로 초기화
      };
  
    const StopSlide = function(){                       // StopSlide는
      clearInterval(go);                                // go를 지워라
    };
  GoSlide();                                            // 처음셋팅은 계속 실행될 수 있게 GoSlide();

  viewBox.on('mouseenter', StopSlide);  
  viewBox.on('mouseleave', GoSlide);



  indiLink.on('click focus', function(evt){
    evt.preventDefault();
    // let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();              // i는 indiLink의 부모인 li의 갯수(4)
    myn = i;                                           // myn = 4
    StopSlide();                                       // 클릭 or focus 됐을 때 자동 이동 멈춰있어라(StopSlide)
    MoveSlide(myn);                                    // MoveSlide 효과는 4개 그대로 적용(클릭하면 이동하게)
 
  });

})(jQuery);