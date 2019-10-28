// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children('.guide');
  const slideEach = slideGuide.children('.banner_area');

  let timed = 500;

  // --------------------------------------------------------------
  slideEach.eq(0).addClass('action');
  indiLiLink.eq(0).children(indiLiLink).addClass('action');

  indiLiLink.on('click', function(e){
    e.preventDefault();
    let myThis = $(this);
    let myThisPar = myThis.parent('li');
    let i = myThisPar.index();

    indiLiLink.removeClass('action');
    myThis.addClass('action');
    slideGuide.animate({'marginLeft':(-100 * i)+'%'}, function(){
      slideEach.removeClass('action');
      
      setTimeout(function(){
        slideEach.eq(i).addClass('action');
      }, timed);
    });
  });


})(jQuery);