// spigen_test_result.js
(function($){

// 1. #gnb 내부에 있는 ul의 내용을 side_gnb_area에 복사해서 붙여넣기
// clone 메서드 사용

const gnb = $('#gnb');
const sideGnbArea = $('.side_gnb_area');

let gnbContents = gnb.contents().clone();
sideGnbArea.append(gnbContents);

// -----------------------------------------------------
// 버튼 클릭시 side_gnb 나타나게 만들기
const openGnbBtn = $('.gnb_btn > button');
const closeGnbBtn = $('.close_gnb_btn > button');
const sideGnb = $('.side_gnb');
const gnbDl = gnb.find('dl');
const gnbDd = gnb.find('dd');
const gnbDt = gnb.find('dt');
const gnbTitleLink = gnbDt.children('a');
const gnbListLink = gnbDd.children('a');

let time = 600;
  
openGnbBtn.on('click', function(e){
  e.preventDefault();
  sideGnb.fadeIn(time/2);
});

closeGnbBtn.on('click', function(e){
  e.preventDefault();
  sideGnb.fadeOut(time/2);
});


// #gnb에 마우스 올렸을 때 dd 나오게 만들기

const addAction = function(){
  $(this).parents('li').find(gnbTitleLink).addClass('action');
  gnbDd.stop().slideDown();
}
const removeAction = function(){
  $(this).parents('li').find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
}

gnbDl.on('mouseenter', addAction);
gnbDl.on('mouseleave', removeAction);

// #gnb dt에 focus 처리되면 dd가 나타나게 만들기

// a, button, form(input, textarea, select) 

gnbTitleLink.on('focus', addAction);

gnbListLink.eq(-1).on('blur', function(){
  gnbDd.stop().slideUp();
});



})(jQuery);