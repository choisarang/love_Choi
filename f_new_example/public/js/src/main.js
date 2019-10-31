// main.js
(function($){
  const body = $('body'); // body
  const wrap = $('#wrap'); // #wrap
  // script 내용 간편작성함수 생성
  const JsLink = (temp) => {
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  };

  // 광고 영역 생성 ======================================================
  wrap.append('<section id="viewBox"></section>'); // #viewBox생성
  const viewBox = $('#viewBox');

  viewBox.load('./temp/slide_01.html', () => {
    JsLink('slide_01');
  });
// ======================================================
// 광고 영역 2 생성
wrap.append('<section id="viewBox_02"></section>');
const vB2 = $('#viewBox_02');
vB2.load('./temp/slide_02.html',() => {
  JsLink('slide_02');
});


//  ============================================================
// 광고 영역 3 생성
wrap.append('<section id="viewBox_03"></section>');
const vB3 = $('#viewBox_03');
vB3.load('./temp/slide_03.html',() => {
  JsLink('slide_03');
});

//  ============================================================
// 광고 영역 4 생성
wrap.append('<section id="viewBox_04"></section>');
const vB4 = $('#viewBox_04');
vB4.load('./temp/slide_04.html',() => {
  JsLink('slide_04');
});

//  ============================================================
// 광고 영역 5 생성(폴바셋)
wrap.append('<section id="viewBox_05"></section>');
const vB5 = $('#viewBox_05');
vB5.load('./temp/slide_05.html',() => {
  JsLink('slide_05');
});


})(jQuery);