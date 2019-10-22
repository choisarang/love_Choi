// test_191019.js
(function($){


const gnb = $('#gnb');
const gnbUl = gnb.find('ul');
const gnbLi = gnb.find('li');
const gnbDt = gnb.find('dt');
const gnbDd = gnb.find('dd');


// ============

const gnbArea = $('.gnb_area');

let gnbContents = gnb.contents().clone();
gnbArea.append(gnbContents);

// ============

gnbLi.on('mouseenter', function(){
  $(this).find('a').addClass('action');
  gnbDd.stop().slideDown();
});

gnbLi.on('mouseleave', function(){
  $(this).find('a').removeClass('action');
  gnbDd.stop().slideUp();
});

gnbLi.find('a').on('focus', function(){
  gnbDd.stop().slideDown();
  $(this).addClass('action');
});

gnbLi.find('a').eq(-1).on('blur', function(){
  gnbDd.stop().slideUp();
});  

gnbLi.find('a').on('blur', function(){
  $(this).removeClass('action');  
});

const sideBar = $('.side_bar');
const sideBtn = $('.side_bar > button');
const sideGnb = sideBar.find('side_gnb');
const closeBtn = $('close_btn > button');



sideBtn.on('click', function(){
  sideGnb.fadeIn();
});

closeBtn.on('click', function(){
  sideGnb.fadeOut();
});


// const gnb = $('#gnb');
// const gnbUl = gnb.find('ul');
// const gnbLi = gnb.find('li');
// const gnbDt = gnb.find('dt');
// const gnbDd = gnb.find('dd');
// const gnbDtLink = gnbDt.children('a');


// gnbLi.on('mouseenter', function(){
//   $(this).find('a').addClass('action');
//   gnbDd.stop().slideDown();
// });

// gnbLi.on('mouseleave', function(){
//   $(this).find('a').removeClass('action')
//   gnbDd.stop().slideUp();
// });

// gnbLi.find('a').on('focus', function(){
//   $(this).addClass('action');
//   gnbDd.stop().slideDown();
// });


// gnbLi.find('a').on('blur', function(){
//   $(this).removeClass('action')
//   gnbDd.stop().slideUp();
// });




})(jQuery);