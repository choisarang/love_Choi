// spigen_main_content_02.js
(function($){
  const conBox2 = $('#conBox2');
  const conBoxLink = $('#conBox2>ul>li>a');
  
  
// .action =================================================================
  conBoxLink.on('mouseenter focus', function(){
                $(this).addClass('action');
              })
            .on('mouseleave blur', function(){
                $(this).removeClass('action');
            });


/** 스크롤바가 일정량 움직였을 경우에 top button 생성되게 만들기 ===================================
 * 사용된 이벤트는 scroll. 
 * scrollTop(): 스크롤바의 움직인 위치값을 파악
 * offset().top , offset()left :
 * mousewheel, DOMMouseScroll :
 * BOM, DOM :
 * */ 

  let conBoxOffset = conBox2.offset().top;
  const topBtn = $('.top_move_btn');
  const win = $(window);
//  win.on('scroll', function(e){});
//  or
  win.on('scroll', (e) => {
    let scrollResult = $(this).scrollTop();
    // console.log(scrollResult);
    if(scrollResult > conBoxOffset){
      topBtn.fadeIn();  
    }else{
      topBtn.fadeOut();
    }
  });

  topBtn.on('click',(e) => {
    e.preventDefault();
    $('html, body').stop().animate({'scrollTop':0},1000,'easeInOutBack', ()=>{
      $('h1>a').focus();
    });
  });

/** 
 * ============================== 자주 사용하는 이벤트 ===============================
 * mouseenter, mouseleave
 * click, focus, blur
 * key up
 * ============================== 자주 사용하는 메소드 ===============================
 * 선택자(자식, 부모, 형제)
 * show, hide
 * addClass, removeClass
 * attr, removeaAttr
 * ============================== 불러오거나 삽입하는 기능 ===============================
 * text, append, prepend
 * load
 * ============================== 자주 사용하는 문법 ===============================
 * 연산자
 * if, switch
 * for
 * function(){}
 * var, const, let
 * parseInt()
 * =============================== 순서 =================================
 * eq(), index()
 */


})(jQuery);