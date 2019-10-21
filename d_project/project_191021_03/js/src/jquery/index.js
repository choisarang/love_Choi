// index.js
(function($){

  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnb.find('li');
  const gnbDt = gnb.find('dt');
  const gnbDd = gnb.find('dd');

  const viewBox = $('#viewBox');

  
  gnbUl.on('mouseenter', function(){
    gnbDd.stop().slideDown();
    viewBox.css({'backgroundColor':'rgba(51, 119, 170, 0.5'});
  });

  gnbUl.on('mouseleave', function(){
    gnbDd.stop().slideUp();
    viewBox.css({'backgroundColor':'rgb(51, 119, 170'});
  });

  gnbUl.find('a').on('focus', function(){
    gnbDd.stop().slideDown();
    viewBox.css({'backgroundColor':'rgba(51, 119, 170, 0.5'});
  });

  gnbUl.find('a').eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
    viewBox.css({'backgroundColor':'rgb(51, 119, 170'});
  });



})(jQuery);
