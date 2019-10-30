// slide_01.js
(function($){
  // .view_indicator 내부의 li(a)를 선택하면,
  // #viewBox 내부의 .guide 박스가 이동하게 만들어라.

  // index() 순서 가져오는 것, eq() 순서를 주는것
  // margin-left: -100%, -200%  || position:relative; left:-100%, -200% ...

  const viewBox   = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi    = indicator.find('li');
  const indiLink  = indiLi.children('a');
  const slideForm = viewBox.find('.slide_form');
  const guideBox  = viewBox.find('.guide');
  const guideDiv  = guideBox.children('div');

  let timed = 500;
  let myn = 0, maxn = guideDiv.length;

  slideForm.css({'overflow':'hidden'});
  indicator.css({'zIndex': 500});  
  guideBox.css({'position':'relative','top':0,'left':0});




  const MoveSlide = function(n){
    indiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');
    
    guideBox.animate({'marginLeft':(-100 * n)+'%'},
    )};


    let go;
    const GoSlide = function(){
      go = setInterval(function(){
        myn++;
        if(myn >= maxn){myn = 0;}
        MoveSlide(myn);
      }, timed *4);
      };
  
    const StopSlide = function(){
      clearInterval(go);
    };
  GoSlide();

  viewBox.on('mouseenter', StopSlide);
  viewBox.on('mouseleave', GoSlide);



  indiLink.on('click focus', function(evt){
    evt.preventDefault();
    // let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    myn = i;
    StopSlide();
    MoveSlide(myn);
 
  });

})(jQuery);