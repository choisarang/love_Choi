// test_01.js
(function($){

const miniPd = $('#miniProduct');
const indicator = miniPd.children('.indicator');
const indiLi = indicator.children('li');
const indiLink = indiLi.children('a');

const product = miniPd.children('.product');
const proUl = product.children('ul');
const proLi = product.find('li');

indiLink.on('mouseenter focus', function(){
  $(this).parent('li').css({'backgroundColor':'#777'});
});

indiLink.on('mouseleave blur',function(){
  $(this).parent('li').css({'backgroundColor':'#aaa'});
});


let s = 0;

indiLink.on('click', function(e){
  e.preventDefault();
  s = $(this).parent('li').index();
  proUl.animate({'left': -100 * s + '%'});
});

let proLen = proLi.length;

for(let i = 0; i < proLen; i++){
proLi.eq(i).css({'backgroundImage':'url("../img/test_01/slide_0' + (i+1) + '.png")'})
};

// miniProduct2 ======================================================
const miniProduct2 = $('#miniProduct2');
const btn = miniProduct2.children('.btn');
const nextBtn = btn.children('.next');
const prevBtn = btn.children('.prev');

const product2 = miniProduct2.children('.product2');
const proUl2 = product2.children('ul');
const proLi2 = proUl2.children('li');


let i=0;
let proLen2 = proLi.length;

nextBtn.on('click', function(e){
  e.preventDefault();
  i++;
  if(i >= proLen2){i=0;}
  proUl2.css({marginLeft: -100 * i + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

prevBtn.on('click', function(e){
  e.preventDefault();
  i--;
  if(i <= -1){i=proLen2-1;}
  proUl2.css({marginLeft: -100 * i + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

for(let i = 0; i < proLen2; i++){
  proLi2.eq(i).css({'backgroundImage':'url("../img/test_01/slide_0' + (i+1) + '.png")'})
  };


// miniProduct3 ======================================================
const miniProduct3 = $('#miniProduct3');
const btn3 = miniProduct3.children('.btn');
const nextBtn3 = btn3.children('.next');
const prevBtn3 = btn3.children('.prev');

const product3 = miniProduct3.children('.product3');
const proUl3 = product3.children('ul');
const proLi3 = proUl3.children('li');


let myi=0;
let proLen3 = proLi.length;

nextBtn3.on('click', function(e){
  e.preventDefault();
  myi++;
  if(myi >= proLen3){myi=0;}
  proUl3.stop().animate({marginLeft: -100 * myi + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

prevBtn3.on('click', function(e){
  e.preventDefault();
  myi--;
  if(myi <= -1){myi=proLen3-1;}
  proUl3.stop().animate({marginLeft: -100 * myi + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

for(let i = 0; i < proLen3; i++){
  proLi3.eq(i).css({'backgroundImage':'url("../img/test_01/slide_0' + (i+1) + '.png")'})
  };



// miniProduct4 ======================================================
const miniProduct4 = $('#miniProduct4');
const btn4 = miniProduct4.children('.btn');
const nextBtn4 = btn4.children('.next');
const prevBtn4 = btn4.children('.prev');

const product4 = miniProduct4.children('.product4');
const proUl4 = product4.children('ul');
const proLi4 = proUl4.children('li');


let n=0;
let proLen4 = proLi.length;

nextBtn4.on('click', function(e){
  e.preventDefault();
  n++;
  if(n >= proLen4){n=0;}
  proUl4.stop().animate({marginTop: -100 * n + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

prevBtn4.on('click', function(e){
  e.preventDefault();
  n--;
  if(n <= -1){n=proLen4-1;}
  proUl4.stop().animate({marginTop: -100 * n + '%'});
  $(this).children('i').addClass('active');
  $(this).siblings().children('i').removeClass('active');
});

for(let i = 0; i < proLen4; i++){
  proLi4.eq(i).css({'backgroundImage':'url("../img/test_01/slide_0' + (i+1) + '.png")'})
  };  

})(jQuery);