// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02'),
        indicator = viewBox2.find('.indicator'),
        indiLi = indicator.find('li'),
        indiLiLink = indiLi.children('a'),
        viewBtn = viewBox2.find('.view_btn'),
        pause  = viewBtn.find('.pause'),
        play  = viewBtn.find('.play');

  const slideForm = viewBox2.find('.slide_02_form'),
        slideGuide = slideForm.children('.guide'),
        slideEach = slideGuide.children('.banner_area');

  let timed = 500,
      myn = 0, maxn = slideEach.length,
      mybool = true, linkFocus = true,  go;
// ---------------------------------------------------------------
// action class이름 첨부기능수행
const MoveSlide = function(n){                                      // MoveSlide
  indiLiLink.removeClass('action');                                 // indiLiLink(control 버튼)의 .action을 지워라    
  indiLi.eq(n).children('a').addClass('action');                    // indiLi의 1개(n)의 자식'a'에 .action을 추가해라
  slideGuide.animate({'marginLeft':(-100 * n)+'%'}, function(){     // slideGuide가 애니메이션으로 왼쪽으로 이동(오른쪽 이미지)할때
    slideEach.removeClass('action');                                // slideEach(슬라이드)의 .action을 지워라
    setTimeout(function(){                                          // setTimeout(일정 시간이 지난 후에 적용)
      slideEach.eq(n).addClass('action');                           // slideEach 1개(n)에 .action을 추가해라
    }, timed);
  }); 
};// MoveSlide() ==============================================
MoveSlide(0);                                                       // 처음부터 MoveSlide 0(첫화면)으로 실행해라
// ------------------------------------------------------------
// 일정시간마다 광고배너 움직이게하기

const GoSlide = function(){                                         // GoSlide는
  go = setInterval(function(){                                      // go는 일정시간마다 반복하는데
    myn++;                                                          // myn을 1씩 더하고
    if(myn >= maxn){ myn = 0; }                                     // 만약 myn이 maxn(3)보다 크거나 같으면 0으로 바꿔라(1,2,3,0 반복하게)
    MoveSlide(myn);                                                 // MoveSlide(슬라이드를 myn에 맞춰 보여줘라)
  }, timed * 4);
}; // GoSlide();---------------------------------------

const StopSlide = function(){ clearInterval(go); };                 // StopSlide는 go효과를 정지(지우기)

const PlayBanner = function(bool){                                  // PlayBanner는 
  if(bool){                                                         // 만약 참이면 슬라이드 실행
    GoSlide();    
  }else{                                                            // 거짓이면 슬라이드 정지
    StopSlide(); 
  }
  mybool = bool;
};// PlayBanner()

// ----------------------------------------------------------
// 공통기능 수행 

// 버튼부 수행
const showBtn = function(bool){                                     // showBtn는
 // play, stop 버튼 동작유무 판단
 if(bool){                                                          // 만약 참이면
    play.hide();                                                    // play버튼 숨기기
    pause.show();                                                   // pause버튼 보이기
    console.log('play');
  }else{  
    pause.hide();  
    play.show();   
    console.log('stop');
  }
};// showBtn(true);
showBtn(mybool);
PlayBanner(mybool);

// ----------------------------------------------------------
viewBox2.on('mouseenter',function(){ 
  PlayBanner(false);
});
viewBox2.on('mouseleave',function(){ 
  (linkFocus) ? PlayBanner(true) :PlayBanner(false);
  console.log(linkFocus);
});
pause.on('click', function(){
  showBtn(false); play.show().focus();
});
play.on('click', function(){  
  showBtn(true); pause.show().focus();
});

// -----------------------------------------------------------
// 클릭시 배너 움직이게 만들기
indiLiLink.on('click focus', function(e){
  e.preventDefault();
  e.stopPropagation();
  myn = $(this).parent('li').index();
  linkFocus = false;
  PlayBanner(false);
  MoveSlide(myn);
});

indiLiLink.off('focus', function(){
  linkFocus = false;
})

})(jQuery);

// -----------------------------------------------------------

// 변수 i는 외부에서 공용으로 사용할 수 있도록 전역변수로 처리
// 인디케이터, 광고배너 이동 후 처리하는 부분등의 내용은 별도 함수로 처리

// setTimeout() : 일정시간 뒤에 수행
// setInterval() : 일정시간마다 수행
// clearInterval() : setInterval의 기능을 취소/정지

// let i = 0, maxi = 4, timed = 1000, go;
// let Goslide = function(){
//   go = setInterval(function(){ 
//   i++; 
//   if(i >= maxi){
//     i = 0;
//   }
//   console.log(i); 
// },timed);
// }; //Goslide()
// Goslide(); //최초의 수행
// // setTimeout(function(){  clearInterval(go); }, timed * 15);

// $(document).on('mouseenter', function(){
//   clearInterval(go);
// });
// $(document).on('mouseleave', function(){
//   Goslide();
// })