// paul_scroll.js
(function(){
  //offset().top : 브라우저 상단에서 얼만큼 떨어져있는가를 판단하는 기능
  //offset().left : 브라우저 왼쪽에서 얼만큼 떨어져있는가를 판단하는 기능
  //scrollTop() : 브라우저의 위치(스크롤)가 이동되었을 때 위치값을 판단하는 기능

  const viewBox = $('#viewBox');
  const con1 = $('#conBox');
  const con2 = $('#conBox2');
  let viewLocation = viewBox.offset().top;
  let con1Location = con1.offset().top;
  let con2Location = con2.offset().top;
  console.log(con1Location);
  
  let winScroll = $(window).scrollTop();
  console.log(winScroll);

  let scrollResult = 0;
  let n = 0;
  $(window).on('mousewheel DOMMouseScroll',function(e){
  // e.originalEvent.wheelDelta 크롬에만 존재하는 기능(120)
  // e.detail // fireFox에서만 값이 3으로 움직임을 가짐

  let delta = e.originalEvent.wheelDelta;
  (delta) ? scrollResult = delta : scrollResult = e.detail *-40;
  (scrollResult >= 0) ? n++ : n--;
    console.log(n);

  winScroll = $(window).scrollTop();
  if(winScroll >= con1Location){
    con2.stop().animate({backgroundColor:'#fff', marginLeft: '50vw'}, 500);
    // con2.css({backgroundColor:'#fa7', marginLeft: '50vw', transform:'rotate(45deg)', transition:'all 300ms ease'}, 500);
  }else{
    con2.removeAttr('style');
  }
  });
  

})(jQuery);