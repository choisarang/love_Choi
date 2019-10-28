// spigen_test_result.js
(function($){


// 1. #gnb 내부에 있는 ul의 내용을 side_gnb_area에 복사해서 붙여넣기
// clone 메서드 사용

const gnb = $('#gnb');
const sideGnbArea = $('.side_gnb_area');

let gnbContents = gnb.contents().clone();
sideGnbArea.append(gnbContents);



const openGnbBtn = $('.gnb_btn > button');
const closeGnbBtn = $('.close_gnb_btn > button');
const sideGnb = $('.side_gnb');
const gnbUl = gnb.find('ul');
const gnbLi = gnb.find('li');
const gnbDl = gnb.find('dl');
const gnbDd = gnb.find('dd');
const gnbDt = gnb.find('dt');
const gnbTitleLink = gnbDt.children('a');
const gnbListLink = gnbDd.children('a');

let time = 600;

// 목록 만들기 ---------------------------------------------

const headerList = [
                    {title:'about', sub:['who we are', 'what we do', 'our locations']},
                    {title:'careers', sub:['careers', 'hr blog', 'apply']},
                    {title:'media', sub:'media'},
                    {title:'ir', sub:['inverstors', 'ir archive', 'ir meeting']}
                   ];


// -----------------------------------------------------
// 버튼 클릭시 side_gnb 나타나게 만들기
  
openGnbBtn.on('click', function(e){
  e.preventDefault();
  sideGnb.stop().fadeIn(time/2, function(){
    $(this).on('keyup', function(e){
      // esc => 27
      console.log(e.key.toLowerCase());
      
      // 영문글자를 강제로 대/소문자로 치환하는 함수
      // 대문자 toUpperCase() 
      // 소문자 toLowerCase()

      if(e.keyCode == 27){
        sideGnb.fadeOut(time/2);
        openGnbBtn.focus();
      }
    });
  });
  closeGnbBtn.focus();

});

closeGnbBtn.on('click', function(e){
  e.preventDefault();
  sideGnb.fadeOut(time/2);
});


// #gnb에 마우스 올렸을 때 dd 나오게 만들기

const addAction = function(){
  let li = $(this).parents('li');
  li.find(gnbTitleLink).addClass('action');
  li.siblings().find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideDown();
}
const removeAction = function(){
  $(this).parents('li').find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
}

// gnbDl.on('mouseenter', addAction);
// gnbDl.on('mouseleave', removeAction); 
// or 
gnbDl.on({'mouseenter': addAction, 'mouseleave': removeAction});

// #gnb dt에 focus 처리되면 dd가 나타나게 만들기

// a, button, form(input, textarea, select) 

gnbTitleLink.on('focus', addAction);

gnbListLink.eq(-1).on('blur', function(){
  gnbDd.stop().slideUp();
});

// .side_gnb_area 내부의 마지막 a요소에서 blur처리되면 .close_gnb_btn위치로 다시 focus 처리되게 만들기
// 단, 전체 페이지에서 추가로 focus 처리되는 항목이 있어야 가능

const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

// $('h1').find('a').on('focus'); // focus가 잡히면 
// $('h1').find('a').focus();


sideLastLink.on('blur', function(){
  closeGnbBtn.focus();
});

// .side_gnb_area에서 키보드 esc 키를 누르면 빠져 나가고 이전 위치로 돌아가게 만들기
// .side_gnb_area가 보이는 곳에서 수행
  

})(jQuery);