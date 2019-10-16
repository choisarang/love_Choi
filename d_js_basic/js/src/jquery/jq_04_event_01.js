// jq_04_event.js
(function($) {
// jquery 이벤트 이해하기

// 선택.on('이벤트', function(){ 해당이벤트를 처리시(예:클릭) 수행하는 기능})
/* #contentBox:hover{background-color:#aaf;} */

/*
const conBox = $('#contentBox');
conBox.on('mouseenter', function(){
  $(this).css({"backgroundColor":"#aaf", "transition": "all 400ms ease"});
});

conBox.on('mouseleave', function(){
  $(this).animate({"backgroundColor":"transparent"}, 900);
});
*/

// click(마우스 왼쪽만), dblclick, mousedown(마우스 왼쪽, 오른쪽, 휠 누를 때), mouseup, mousewheel(파이어폭스 : DOMMouseScroll)
// keypress(문자 쪽 키보드 누를 떄), keydown(키보드 전체), keyup
// focus, hover, selected, changed
// scroll, resize
// load


const con = $('#contentBox');
const conUl = con.children('ul');
const conLi = conUl.children('li');

// console.log(conLi);
// conLi.eq(0).css({'backgroundColor':'#fff'});
conLi.eq(0).on('click', function(){
  $(this).css({'backgroundColor':'#fff'});
});

conLi.eq(1).on('dblclick', function(){
  $(this).css({'backgroundColor':'#777'});
});

conLi.eq(2).on('mousedown', function(evt){
  // console.log(evt.button);
  // $(this).css({'backgroundColor':'#07f'});

  /*
  switch(evt.button){
    case 0:
        $(this).css({'backgroundColor':'#07f'});
      break;
    case 1:
        $(this).css({'backgroundColor':'#f70'});
      break;
    case 2:
        $(this).css({'backgroundColor':'#000', 'color':'#fff'});
      break;
    default:
        $(this).css({'backgroundColor':'#aaa'});
      break;
    */

    if(evt.button === 0){
      $(this).css({'backgroundColor':'#07f'});
    } else if (evt.button === 1){
      $(this).css({'backgroundColor':'#f70'});
    } else if (evt.button === 2){
    $(this).css({'backgroundColor':'#000', 'color':'#fff'});
    } else{
      $(this).css({'backgroundColor':'#aaa'});
    }
    });


conLi.eq(2).on('mouseup', function(){
  $(this).css({'backgroundColor':'#fa0','color':'#333'});
});

conLi.eq(3).on('mousewheel DOMMouseScroll', function(evt){
  console.log(evt);
  
  $(this).css({'backgroundColor':'#04f'});
});

conLi.eq(4).on('mousemove', function(evt){
  // console.log(evt.offsetX, evt.offsetY); //$(this)의 왼쪽 상단을 기준 0,0
  // console.log(evt.pageX, evt.pageY); //

  let x = evt.offsetX;
  let y = evt.offsetY;

  // $('.ball').css({"transform":"translate("+ x +","+ y +")"});
  $('.ball').css({"transform":`translate(-${x}%,-${y}%)`});
  
});

conLi.eq(5).children('input').on('keyup', function(evt){
  console.log(evt.key, evt.keyCode);
  
});


})(jQuery);