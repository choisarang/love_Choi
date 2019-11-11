(function($){
// 스크롤시 header 영역 크기 바꾸기

const win = $(window);
const headBox = $('#headBox');
const viewBox = $('#viewBox');
const con_01 = $('#conBox_01');
const con_02 = $('#conBox_02');
const con_03 = $('#conBox_03');

let winH = win.outerHeight(); // 높이값 파악
let headBoxH = headBox.outerHeight();

// con_01의 위치에서 브라우저의 1/2 높이 전에서 구동처리
let con_01_offset = con_01.offset().top; // con_01이 얼만큼 떨어져있는지 파악
let myCon01_offset = con_01_offset - (winH/2);
// con_02의 위치에서 브라우저의 1/2 높이 전에서 구동처리
let con_02_offset = con_02.offset().top;
let myCon02_offset = con_02_offset - (winH/2);
// con_03 위치파악
let con_03_offset = con_03.offset().top;
let myCon03_offset = con_03_offset - (winH/2);

win.on('scroll', function(){
  let winScroll = win.scrollTop();
// headBox ----------------------------------------
  if(winScroll > headBoxH){
    headBox.addClass('action');
  }else{
    headBox.removeClass('action');
  }

// viewBox 나타나게 만들기 ----------------------------------------
  if(winScroll > headBoxH/2){
    viewBox.find('h2').addClass('action');
    viewBox.find('p').addClass('action');
  }else{
    viewBox.find('h2').removeClass('action');
    viewBox.find('p').removeClass('action');
  }

  // conBox_01 ----------------------------------------
  let conImg = con_01.find('.narr').children('.img_box');
  let conNar = con_01.find('.narr').children('.nar_box');
  
  if(winScroll > myCon01_offset){
    conImg.addClass('action');
    conNar.addClass('action');
  }else{
    conImg.removeClass('action');
    conNar.removeClass('action');
  }

  // conBox_02 ----------------------------------------
  if(winScroll > myCon02_offset){
    setTimeout(function(){
      $('.con_02').addClass('action');
    },200);
  }else{
    $('.con_02').removeClass('action');
  }

  // conBox_03 ----------------------------------------
  // scroll 처리시 03이미지가 왼쪽에서부터 오른쪽으로 이동
  let n = 0;
  if(winScroll > myCon03_offset){
    let myLeft = winScroll - myCon03_offset;
    let myn = Math.round(myLeft % 18);
    if(myn < 10){n = '00' + myn;
    }else if(myn < 100){n = '0' + myn;
    }else{n= myn;}
    
    con_03.find('.mv_bird').css({top: myLeft + 'px', left:myLeft + 'px', backgroundImage:'url(../../img/bird/bird_'+ n +'.png)'});
    }
  });



  //Math.random 랜덤 .round 반올림 .ceil 올림 .floor 내림 .abs 있는그대로
  // let r = Math.round(4.7);

  
})(jQuery);