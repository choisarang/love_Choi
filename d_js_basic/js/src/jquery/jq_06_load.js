// jq_06_load.js

(function($){
// jquery 기초
/**
 * js문서에서는 기준 경로가 작성하고 있는 js문서가 아니다.(html문서에서 불러왔을 경우)
 * html문서로 연결된 경우는 불러온 html문서 기준으로 경로를 설정
 */


const wrap = $("#wrap");
wrap.prepend('<div class = "head_wrap"></div>');
const headWrap = $('.head_wrap');
wrap.append('<div class = "foot_wrap"></div>');
const footWrap = $('.foot_wrap');


headWrap.load('./temp/header.html', function(data){
  console.log(data);
  const headBox = $('#headBox');
  headBox.css({'backgroundColor':'#3ff'});
});

footWrap.load('./temp/footer.html', function(data){
  console.log(data);
});


$.getJSON('../../../data/test.json', function(data){
  console.log(data);
  
});

})(jQuery);