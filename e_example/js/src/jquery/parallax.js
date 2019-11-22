(function($){
let win = $(window);
let p00 = $('.par_00');
let p01 = $('.par_01');
let p02 = $('.par_02');
let p03 = $('.par_03');
let p04 = $('.par_04');
let p05 = $('.par_05');
let p06 = $('.par_06');
let p07 = $('.par_07');
let p08 = $('.par_08');
let par = []

const vb = $('#viewBox');

for(let i=0; i<vb.children().length; i++){
  let p = '.par_0' + i;
  par.push(p);
}

let winH = win.outerHeight();
win.on('scroll', function(e){
  e.preventDefault();
  let scroll = win.scrollTop();
  // console.log(scroll);
  for(let j=0; j < par.length; j++){
    $(par[j]).css({top:scroll / (par.length - j)});
  }
  // $(par[0]).css({top:-scroll/8})
  // $(par[1]).css({top:-scroll/7})
  // $(par[2]).css({top:-scroll/6})
  // $(par[3]).css({top:-scroll/5})
  // $(par[4]).css({top:-scroll/4})
  // $(par[5]).css({top:-scroll/3})
  // $(par[6]).css({top:-scroll/2})
  // $(par[7]).css({top:-scroll})
  // $(par[8]).css({top:-scroll})
})
// 스크롤시 이미지 움직이기 -------------------------------------------------------------
const conBox = $('#conBox');
const conList = conBox.find('li');
const liOffset = [];

for(let i=0; i<conList.length; i++){
  // liOffset.push(conList.eq(i).offset().top); or
  liOffset[i] = conList.eq(i).offset().top;
}
console.log(liOffset);


win.on('scroll', function(e){
  e.preventDefault();
  let scroll = win.scrollTop();
  let scRel = [];
  for(let i=0; i<conList.length; i++){
    scRel[i] = liOffset[i] - scroll - (winH/2);
    conList.eq(i).find('span').css({transform:'translateY('+ -scRel[i]/6 +'px)'})
  }
  console.log(scRel[0]);
  
})

})(jQuery);