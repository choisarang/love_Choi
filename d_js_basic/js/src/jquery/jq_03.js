// jq_03.js
(function($){
// $()
  $("#myBox").css({"width":"80%", "height":"900px", "margin":"auto", "backgroundColor":"#ddd"});

// 생성(요소, 값) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  /* 
  const myBox = document.querySelector("#myBox");
  const myh2 = document.createElement("h2");
  let h2Text = document.createTextNode('jquery text 생성하기');
  myh2.appendChild(h2Text);
  myBox.appendChild(myh2); 
  */

  const myBox = $('#myBox');
  myBox.append("<h2></h2>");
  const myh2 = myBox.children('h2');
  myh2.text('<i>jquery를 통해 글자를 생성하였습니다.<i>');


// =========================================================================
// html() : 값을 내부에 삽입하는 기능. 기존 요소를 삭제하고 새롭게 추가
// append() : 값을 내부에 삽입하는 기능. 기존 요소 내부 뒤에 추가
// prepend() : 값을 내부에 삽입하는 기능. 기존 요소 내부 앞에 추가
// appendTo() : 값을 내부에 삽입하는 기능. 주어의 위치가 바뀐다. 
// prependTo() : 값을 내부에 삽입하는 기능. 주어의 위치가 바뀐다.


// let con = myBox.html(); // 내용을 파악
// console.log(con);

// myBox.html("<p>요소를 생성하였습니다.</p>"); 

// myBox.append("<p>요소를 추가로 생성하였습니다.</p>"); 

// myBox.prepend("<p>요소를 추가2로 생성하였습니다.</p>"); 

// myBox.append("<p>요소를 추가로 생성하였습니다.</p>"); //방에 아버지께서 들어가신다

// let myt = $("h2");
// myt.appendTo(myBox); //아버지께서 들어가신다 방에
// myt.prependTo(myBox);


// before, after ========================================================================

// myBox.before("<div class ='beforeBox'></div>");
// myBox.after("<div class ='beforeBox'></div>");

// let myBefore = myBox.before();
// let myAfter = myBox.after();
// console.log(myBofore, myAfter);




// 확인(크기, 속성) +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// width(), height()
// innerWidth(), outerWidth, outerWidth(true), innerHeight(), outerHeight(), outerHeight(true)
// 위와 유사 : css('width'), css('height')
// attr(), removeAttr()

// parseInt(), parseFloat()

const resultBox = $("#resultBox");
// let resultWidth = resultBox.width(); //padding, border를 제외한 width값
// console.log(resultWidth);
// let resultinnerWidth = resultBox.innerWidth(); //border를 제외한 padding + width값
// console.log(resultinnerWidth);
// let resultouterWidth = resultBox.outerWidth();
// console.log(resultouterWidth); //border + padding + width값
// let resultoutertrueWidth = resultBox.outerWidth(true);
// console.log(resultoutertrueWidth); //border + padding + margin + width값

/*
let resultBoxWidth = resultBox.css('width');
let resultPaddingWidth = parseInt(resultBox.css('paddingLeft')) + parseInt(resultBox.css('paddingRight'));
let pasWidth = parseInt(resultBoxWidth) + resultPaddingWidth;

console.log(pasWidth);
*/
let url = "http://www.naver.com";
let myat = resultBox.attr({'class':'adC','data-class':'http://www.naver.com'});
// console.log(myat);

resultBox.on('click', function(){
    // resultBox.after('<a href="' + url + '">클릭하면 이동합니다.</a>');
    resultBox.after(`<a href="${url}">클릭하면 이동합니다.2</a>`);
    resultBox.removeAttr('id');
});



// 변경 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myBox.empty(); //선택한 것 제외 내부의 기능을 삭제
// myBox.remove(); // 선택한 것을 그대로 삭제


// jquery 기초개념 : 
// - 메소드 체인 
// $().find().animate(); 
// 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것

// - 콜백 
// $().animate({}, function(){
//   $().animate({}, function(){
//     $().animate();
//   })
// }); 
// 하나의 함수내에서 다시 함수를 호출하여 사용하는 것



// 이벤트
// show(), hide(), fadeIn(), fadeOut(), slideUp(), slideDown(), toggle(), hasClass(), .......


})(jQuery);