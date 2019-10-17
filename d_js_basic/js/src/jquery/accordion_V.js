(function($){
  const menuV = $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  // let t = menuDt.eq(0).contents(); // contents : 내용에 들어있는 모든 요소파악
  // menuDt.wrap('<div>'); //wrap : 부모요소를 생성하거나 파악

  menuDt.contents().wrap('<a href="#"></a>'); //js사용시에는 반복문으로 처리해야한다.
  const menuDdLink = menuDt.find('a');
  menuDdLink.css({'display':'block', 'width':'100%', 'height': '100%', 'color':'inherit'});

  // menuDt.on('click', function(){
    //   $(this).next('dd').siblings('dd').stop().slideUp();
    //   $(this).next('dd').stop().slideToggle();
    // 선택요소의 뒤에 오는 모든 dd부터 그 다음 dt이전의 요소인 dd까지
    $(this).nextAll('dd').next('dd').prev('dd')
  // });

  menuDt.on('click', function(){
    let i = $(this).index() /2;
  menuDd.eq(i).siblings('dd').slideUp();
  menuDd.eq(i).stop().slideToggle();
  });

  const addC = function(){
    $(this).addClass('action');
  };
  const removeC = function(){
    $(this).removeClass('action');
  };

  // menuDdLink.on('focus', addC);
  // menuDdLink.on('blur',removeC);
  // or
  menuDdLink.on({'focus' : addC, 'blur': removeC});


})(jQuery);