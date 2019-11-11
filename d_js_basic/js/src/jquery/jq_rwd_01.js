// jq_rwd_01.js
(function($){
// ------------------------------------
// 반응형 크기에 따라 불러오는 파일 정의
// mobile, tablet, pc, laptop, pcfull
const wrap = $('#wrap');
let tempFile = './rwd_temp/';
const LoadFile = function(w){
  switch(w){ // switch : 자세하게 실행하기위한 함수
    case 'mobile':
      wrap.load(tempFile + 'mob.html'); // wrap에 mob 파일 불러오기
    break;
      
    case 'tablet':
      wrap.load(tempFile + 'tab.html');
    break;

    case 'pc':
      wrap.load(tempFile + 'pcbase.html');
    break;

    case 'laptop':
      wrap.load(tempFile + 'laptop.html');
    break;

    case 'pcfull':
      wrap.load(tempFile + 'pcfull.html');
    break;
  }// switch
}// LoadFile
// ------------------------------------
// 현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(w){ // 매번 쓰기 복잡하니까 함수처리 //w는 사이즈가 매번 바꾸기 위해 정의해준 것
  if(w <= mob){nowDevice = 'mobile'; // 만약 윈도우 크기가 모바일과 같거나 작다면 'moblie'로 정의
  }else if(w > mob && w <= tab){nowDevice = 'tablet'; //따로 파악해야함 ex)mob < w <= tab는 X
  }else if(w > tab && w <= pc){nowDevice = 'pc';
  }else if(w > pc && w <= laptop){nowDevice = 'laptop';
  }else{nowDevice = 'pcfull';}
  // console.log(nowDevice);
  return nowDevice;
}// DeviceCheck
// ------------------------------------
const win = $(window)
let winW = win.outerWidth(); // 브라우저 사이즈
// console.log(winW);
let beforeDevice = DeviceCheck(winW); // 처음값이 들어가게 전달(winW)
LoadFile(beforeDevice);
console.log('beforeDevice', beforeDevice);
// ------------------------------------
// 새로고침
win.on('resize', function(){
  let nowWinW = win.outerWidth()
  let afterDevice = DeviceCheck(nowWinW); // 현재값이 들어가게 전달(nowWinW)
  console.log(afterDevice);
  // console.log(nowWinW);
  if(winW !== nowWinW && beforeDevice !== afterDevice){ // 이전 가로값과 현재 가로값이 같지 않으면 // 그리고 이전값과 나중값이 같지 않으면
  location.reload(); // 자동 새로고침
  }
})
})(jQuery);