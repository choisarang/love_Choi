// sub_02.js
(function($){

  
// 메뉴 바
const gnb = $('.gnb');
const gnbBg = gnb.children('.gnb_bg');
const ex = gnb.find('.ex');

gnb.children('a').on('click', function(){
  gnbBg.stop().fadeIn();
});

ex.on('click', function(){
  gnbBg.stop().fadeOut();
});


//메뉴 바 메뉴 hover 효과
const gnbDl = gnb.find('dl');
const gnbDt = gnb.find('dt');
const gnbDtLink = gnbDt.children('a');
const gnbDd = gnb.find('dd');
const gnbDdLink = gnbDd.children('a');

gnbDtLink.on('mouseenter',function(){
  $(this).addClass('action');
});

gnbDtLink.on('mouseleave',function(){
  $(this).removeClass('action');
});

gnbDdLink.on('mouseenter',function(){
  $(this).parent('dd').siblings('dt').children('a').addClass('action');
});

gnbDdLink.on('mouseleave',function(){
  $(this).parent('dd').siblings('dt').children('a').removeClass('action');
});

gnbDtLink.on('focus',function(){
  $(this).addClass('action');
});

gnbDtLink.on('blur',function(){
  $(this).removeClass('action');
});

gnbDdLink.on('focus',function(){
  $(this).parent('dd').siblings('dt').children('a').addClass('action');
});

gnbDdLink.on('blur',function(){
  $(this).parent('dd').siblings('dt').children('a').removeClass('action');
});

let lastDdLink = gnbDl.eq(-1).children('dd').eq(-1).children('a');

  lastDdLink.on('blur', function(){
    ex.find('a').focus();
  });

// sound
const soundBtn = $('.sound').children('input');
const on = $('.sound').children('.on');
const off = $('.sound').children('.off');

soundBtn.on('click', function(e){
  e.preventDefault();
  let btnOn = $(this).hasClass('on');
  if(btnOn){//on버튼
    $(this).css({display:'none'});
    off.css({display:'block'});
  }else{
    $(this).css({display:'none'});
    on.css({display:'block'});
  }
});

const conBox = $('#conBox');
const conH2 = conBox.children('h2');
const conH3 = conBox.children('h3');
const conP = conBox.children('p');
const oneDl = conBox.children('.one');
const oneDt = oneDl.children('dt');
const oneDd = oneDl.children('dd');
const twoDl = conBox.children('.two');
const twoDt = twoDl.children('dt');
const twoDd = twoDl.children('dd');
const btn = conBox.children('button');

let conH2_offset = conH2.offset().top;
let conP_offset = conP.offset().top;
let oneDl_offset = oneDl.offset().top;
let oneDt_offset = oneDt.offset().top;
let twoDl_offset = twoDl.offset().top;
let twoDt_offset = twoDt.offset().top;
let twoDd_offset = twoDd.offset().top;

$(window).scroll(function() {
  let scroll = $(window).scrollTop();
  if (scroll > conH2_offset - (200)) {
    conH3.fadeIn(3000);
  }if (scroll > conH2_offset) {
    conP.fadeIn(3000);
  }if (scroll > oneDl_offset) {
    oneDt.addClass('action');
  }if (scroll > oneDt_offset + (400)) {
    oneDd.addClass('action');
  }if (scroll > twoDl_offset) {
    twoDt.addClass('action');
  }if (scroll > twoDt_offset + (400)) {
    twoDd.addClass('action');
  }if (scroll > twoDd_offset + (1800)) {
    btn.fadeIn(3000);
  }
});




// li 이미지 클릭시 이동 X
const conLi = conBox.find('li');

conLi.on('click',function(e){
  e.preventDefault();
});


// li 글씨
conLi.on('mouseenter', function(){
  $(this).find('h4').fadeIn();
});
conLi.on('mouseleave', function(){
  $(this).find('h4').hide();
});


// 마지막 버튼 

btn.on('mouseenter', function(){
  $(this).addClass('action');
});

})(jQuery);
