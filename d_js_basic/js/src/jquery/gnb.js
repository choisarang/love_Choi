// gnb.js

/**
 * 1. 마우스 또는 키보드 포커스처리시, 하위메뉴 전체 나타나게 만들기 (배경 흰색)
 * 2. 마우스 또는 키보드 포커스처리시, 하위메뉴 전체 나타나게 만들기 (배경 없이)
 * 3. 마우스 또는 키보드 포커스처리시, 해당 하위메뉴 하나만 나타나게 만들기
 */

 (function($){

  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
  gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');
  let timed = 500;

  // 1번기능 ==================================================================
  /* gnb.css({'backgroundColor':'transparent'});
  gnbArea.css({'height':'auto', 'backgroundColor':'#fff', 'boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.5)'});
  // 포커스 잡히면 보이게 하기
  titleLink.on('focus', function(e){
    e.preventDefault(); //페이지 이동 기능이 있을 땐 사용 X
    partList.stop().slideDown(timed);
  });
  // 마지막요소 블러처리되면 사라지게
  subLink.eq(-1).on('blur', function(){
    partList.stop().slideUp(timed);
  });
  // gnbArea에 마우스 올렸을 경우 나타나게하기
  gnbArea.on('mouseenter', function(){
    partList.stop().slideDown(timed);
  });
  gnb.on('mouseleave', function(){
    partList.stop().slideUp(timed);
  })
  */
  // 2번기능 ==================================================================
  // gnbArea.css({'height': '100%'});
  // 이외 기능은 1번과 동일

  // 3번기능 ==================================================================
   titleLink.on('mouseenter focus', function(){
    let ulSlide = $(this).next(partList);
    ulSlide.parent().siblings().find(partList).slideUp();
    ulSlide.slideDown();
   
    ulSlide.find('a').eq(-1).on('blur', function(){
    ulSlide.slideUp();
   });
  });
  gnb.on('mouseleave', function(){
    partList.slideUp();
  });

 })(jQuery);