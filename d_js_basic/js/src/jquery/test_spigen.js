// test_spigen.js
(function($){

  const gnb = $('#gnb');
  const gnbUl = gnb.children('ul');
  const gnbLi = gnbUl.children('li');

  const subUl = gnbLi.children('ul');
  const subLi = subUl.children('li');
  const subLink = subLi.children('a');

  let timed = 300;

  
  gnbLi.children('a').on('focus', function(){
    subUl.stop().slideDown(timed);
  });
  gnbLi.on('blur', function(){
    subUl.stop().slideUp(timed);
  });

  
  gnbLi.on('mouseenter', function(){
    subUl.stop().slideDown(timed);
  });
  gnbLi.on('mouseleave', function(){
    subUl.stop().slideUp(timed);
  });


})(jQuery);