// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');
  const viewBtn = viewBox2.find('.view_btn');
  const pause  = viewBtn.find('.pause');
  const play  = viewBtn.find('.play');
  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children('.guide');
  const slideEach = slideGuide.children('.banner_area');
  let timed = 500;
  let myn = 0, maxn = slideEach.length;
  let mybool = true;
// ------------------------------------------------------------
// 일정시간마다 광고배너 움직이게하기
let go;
const GoSlide = function(){
  go = setInterval(function(){
    myn++;
    if(myn >= maxn){ myn = 0; }
    MoveSlide(myn);
  }, timed * 4);
}; // GoSlide();
const StopSlide = function(){ clearInterval(go); };
const PlayBanner = function(bool){
  if(bool){ GoSlide(); }else{ StopSlide(); }
};// PlayBanner()
// ----------------------------------------------------------
// 공통기능 수행 
// 버튼부 수행
const showBtn = function(bool){
 // play, stop 버튼 동작유무 판단
 if(bool){  
    play.hide();  
    pause.show(); 
    PlayBanner(bool);
    console.log('play')
  }else{  
    pause.hide();  
    play.show(); 
    PlayBanner(bool);
    play.show();   
    console.log('stop')
  }
  PlayBanner(bool);
};// showBtn(true);
showBtn(true);

// action class이름 첨부기능수행
const MoveSlide = function(n){
  indiLiLink.removeClass('action');
  indiLi.eq(n).children('a').addClass('action');
  slideGuide.animate({'marginLeft':(-100 * n)+'%'}, function(){
    slideEach.removeClass('action');  
    setTimeout(function(){
      slideEach.eq(n).addClass('action');
    }, timed);
  });
 
};// MoveSlide()   //=========================================
MoveSlide(0);
// -----------------------------------------------------------
viewBox2.on('mouseenter',function(){ 
  showBtn(false); 
  mybool = false;
  showBtn(mybool); 
});
viewBox2.on('mouseleave',function(){ 
  showBtn(mybool); 
});
pause.on('click', function(){ 
  mybool = false;
  showBtn(false); 
  showBtn(mybool); 
});
play.on('click', function(){  
  mybool = true;
  showBtn(true);
  showBtn(mybool);
});

// -----------------------------------------------------------
// 클릭시 배너 움직이게 만들기
indiLiLink.on('click focus', function(e){
  e.preventDefault();
  e.stopPropagation();
  myn = $(this).parent('li').index();
  MoveSlide(myn);
  // MoveSlide(myn);
  PlayBanner(false);
});
// -----------------------------------------------------------

  // 변수 i는 외부에서 공용으로 사용할 수 있도록 전역변수로 처리
  // 인디케이터, 광고배너 이동 후 처리하는 부분등의 내용은 별도 함수로 처리

})(jQuery);



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