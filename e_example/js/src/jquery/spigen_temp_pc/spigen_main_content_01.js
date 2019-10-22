// spigen_main_content_01.js
(function($){

  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus', function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent();
    let parNext = btnParent.next('dd');

    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');

    parNext.addClass('action');
    parNext.siblings('dd').removeClass('action');

  });
  
  

})(jQuery);