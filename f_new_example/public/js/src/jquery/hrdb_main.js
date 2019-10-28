// hrdb_main.js
(function($){

  const slideTemp = $('.slide_temp');
  const viewBtn = slideTemp.find('.view_btn');
  const indicator = viewBtn.find('.indicator');
  const indiUl = indicator.children('ul');
  const indiLi = indiUl.children('li');
  const indiLink = indiLi.children('a');
  const slideBox = slideTemp.find('.slide_box');
  const guide = slideTemp.find('.guide');

  console.log(indiLink);
  

  indiLink.on('focus click', function(){
    indiLink.removeClass('action');
    $(this).addClass('action');
  });

})(jQuery);