// index.js
(function($){

  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnb.find('li');
  const gnbDt = gnb.find('dt');
  const gnbDd = gnb.find('dd');

  const viewBox = $('#viewBox');
  const back = $('.back');

  let time = 1000;


  gnbUl.on('mouseenter', function(){
    gnbDd.stop().slideDown();
    viewBox.addClass('back');
  });

  gnbUl.on('mouseleave', function(){
    gnbDd.stop().slideUp();
    viewBox.removeClass('back');
  });

  gnbUl.find('a').on('focus', function(){
    gnbDd.stop().slideDown();
    viewBox.addClass('back');
  });

  gnbUl.find('a').eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
    viewBox.removeClass('back');
  });



  




})(jQuery);
