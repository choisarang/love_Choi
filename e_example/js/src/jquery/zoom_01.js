// zoom_01.js
(function($){
  const thumnailImg = ['zoom_01.jpg','zoom_02.jpg','zoom_03.jpg','zoom_04.jpg']
  const big = $('.big');
  const smallLi = $('.small').find('li');
  const view = $('.view');
  const mylocation = $('.location');
  const mLocation = $('.mouse_location');
  const myper = $('.per');
  let bigW = big.outerWidth();
  let bigH = big.outerHeight();
  let url = "../img/zoom/";

  const imgSet = function(i){
    big.css({backgroundImage:'url(' + url + thumnailImg[i] + ')'});
    view.css({backgroundImage:'url(' + url + thumnailImg[i] + ')'});
    mLocation.css({backgroundImage:'url(' + url + thumnailImg[i] + ')'});
  }
  imgSet(0);

  
  smallLi.on('mouseenter focus', function(){
    let i = $(this).index();
    imgSet(i);
  });

  big.on('mousemove', function(e){
    let ofx = e.offsetX; // 위치값 파악
    let ofy = e.offsetY;
    
    mylocation.find('span').text(ofx + ',' + ofy); // span에 위치값 추가

    let perX = parseInt(ofx / bigW * 100); // parseInt => 정수로 변환(소수점 버리기)
    let perY = Math.round(ofy / bigH * 100); // Math.round => 정수로 변환(소수점 반올림)
    myper.find('span').text(perX + ',' + perY) // span에 퍼센트값 추가

    view.css({backgroundPosition: perX + '%' + ' ' + perY + '%'});
    mLocation.show();
    mLocation.css({top:(ofy + 5) + 'px', left:(ofx + 5) + 'px', backgroundPosition: perX + '%' + ' ' + perY + '%'});
  });

  big.on('mouseleave', function(){
    mLocation.hide();
  })


    
  // offsetX(), offsetY()
  // pageX(), pageY()
  // clientX(), clientY()
  // screenX(), screenY()

  // 위치값 %로 전환
  // 좌표 / 기준크기 * 100

  // Math 함수
  // Math.round() -> 반올림
  // Math.ceil() -> 올림
  // Math.floor() -> 내림
  // Math.random() -> 0~1까지 랜덤숫자

  // 소수점 3자리숫자에서 올림
  // Math.ceil( ()*100 ) / 100


})(jQuery);