// slide_03.js

(function($){
  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');

// =====================================================
// li에 이름을 부여 (.slide_03_con_0$)
for(let i=0; i < slideLi.length; i++){
  let classname = 'slide_03_con' + (i+1);
  slideLi.eq(i).addClass(classname);
}
// =====================================================



  let cloneLi = slideLi.eq(-1).clone(true);
  // clone() 사용 시 true면 기능까지 복제

  cloneLi.prependTo(slideGuide); 


  /*  1. prepend, prependTo 의 역할을 정확하게 구분
         감싸는영역.prepend(담는 내용);
         담는 내용.prepend(감싸는영역);
      2. 마지막영역을 복제(clone)후에 앞에 담아야한다.
      3. css 작업 시 nth-child()를 이용하여 이미지/기능을 담으면 순서값에 의해 원하는 결과물이 나오지 않으므로 각각 class 이름을 부여하여 이미지/기능을 처리해야한다.
         (복제 전에 이름을 부여)
      4. 그 부모인 영역의 넓이는 기존 갯수 + 1만큼의 크기값으로 재설정해야한다.
  */ 

  // ======================================================
  const slide03Btn = $('.slide_03_btn');
  const nextBtn = slide03Btn.children('.next');
  const prevBtn = slide03Btn.children('.prev');
  slideLi = slideGuide.find('li'); //li가 새로 갱신된 내용으로 처리(6개)

  let myn = 0;
  const bannerLen = slideLi.length;
  console.log(bannerLen);
  
  nextBtn.on('click', function(e){                    // nextBtn 을 클릭하면 아래내용 실행
    e.preventDefault();                               // event 제거
    myn++;                                            // myn을 1씩 더해라(1, 2, 3, 4)
    if(myn >= bannerLen-1){                           // 만약 myn이 bannerlen-1(5)보다 크거나 같으면
      slideGuide.css({'left' : '100%'});              // slideGuide를 왼쪽 기준 100%(오른쪽으로 이동. 왼쪽 이미지) 띄워 복사한 앞 이미지로 티 안나게 이동
      myn = 0;}                                       // 복사한 앞 이미지에서 0(첫번째 이미지)로 이동
    let per = -100 * myn + '%';                       // 
    slideGuide.stop().animate({'left' : per},1000);   // -100(왼쪽으로 이동. 오른쪽 이미지)씩 애니메이션 효과주면서 1초씩 이동
  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    myn--;
    let per = -100 * myn + '%';                                 // per는 -100 * myn(현재위치) = ?%            
    slideGuide.stop().animate({'left' : per},1000, function(){  // slideGuide를 왼쪽 기준 ?%만큼 이동해라
      if(myn <= -1){myn = bannerLen-2;}                         // myn이 -1보다 작거나 같으면 myn은 4
      per = -100 * myn + '%';                                   // per는 -100 * 4 = -400%
      slideGuide.css({'left' : per});                           // 왼쪽 기준 -400% 이동
    });
  });

})(jQuery);