// spigen_test.js
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


  // =============================================================

  const sidebar = $('#sidebar');
  const small = sidebar.children('.small');
  const big = sidebar.children('.big');
  const exit = big.children('.ex');
  const dl = big.children('dl');
  const dt = dl.children('dt');
  const dd = dl.children('dd');



  small.children('a').on('focus', function(){
    big.stop().fadeIn();
  });

 exit.children('a').on('focus', function(e){
    e.preventDefault();
    big.stop().fadeOut();
  });


  // =============================================================

  const contentBox = $('#contentBox');
  const textArea = contentBox.children('.text_area');
  const picArea = contentBox.children('.pic_area');
  const picDl = picArea.children('dl');
  const picDt = picDl.children('dt');
  const picDd = picDl.children('dd');


  picDt.children('a').on('focus', function(){
    
  });

})(jQuery);