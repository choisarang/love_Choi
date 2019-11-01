// paul_conBox.js
(function($){
  const conBox = $('#conBox');
  const conBtn = conBox.find('button');
  const bar = conBox.find('.bar');

  conBtn.on('click', function(e){
    e.preventDefault();
    bar.toggleClass('hideBar');
    let view = bar.hasClass('hideBar'); // hasClass() : class 이름의 존재유(true)무(false) 판단
    if(view){
      bar.stop(true,false).animate({width:0});
    }else{
      bar.stop(true,false).animate({width: 100 + '%'});
    };
  });

})(jQuery);