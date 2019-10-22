// spigen_test_result.js
(function($){
  const body = $('body');
  const header = $('#headBox');
  const adver = $('#viewBox');
  const content = $('#conBox');
  const footer = $('#footBox');

  let tempUrl = "./spigen_temp_pc/";
  let jsUrl = "../js/src/jquery/spigen_temp_pc/";

  header.load(tempUrl + 'spigen_header.html', function(){
    // body.append('<script src="../js/src/jquery/spigen_temp_pc/spigen_header.js"></script>');
  });

  adver.load(tempUrl + 'spigen_main_adver.html');

  content.load(tempUrl + 'spigen_main_content_01.html', function(){
    let conJS = jsUrl + 'spigen_main_content_01.js';
    body.append(`<script src="${conJS}"></script>`)
  });

  footer.load(tempUrl + 'spigen_main_footer.html');


  // setTimeout(function(){}, '시간'); // 일정 시간이 지난 후에 함수를 수행해라

  setTimeout(function(){
    body.append('<script src="../js/src/jquery/spigen_temp_pc/spigen_header.js"></script>');
  }, 100); 


})(jQuery);