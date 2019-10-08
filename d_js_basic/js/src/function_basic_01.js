// function_basic_01.js

/** 함수에 대해 => function () {}
 * 
 * 선언식, 표현식
 * 익명함수, 즉시실행함수(IIFE), (ES6: 화살표함수)
 * 복잡한 수식을 하나의 묶음으로 처리해서 간단하게 호출함으로 결과를 바로 얻을 수 있게 처리하는 방법
 * .hidden{}
 */
/*
function myCoffee(a) {
  return a * 100;
}

var rel_1 = myCoffee(100);
console.log(rel_1);

var rel_2 = myCoffee(2);
console.log(rel_2);

function useName(a){
  return a + "님 어서오십쇼";
}

var u_1 = useName('소연');
console.log(u_1);

function test(color){
  var web = document.getElementsByTagName('body')[0];
  return web.style.backgroundColor='#' + color;
}
// 브라우저 console에 test('12f') 입력
*/
/*
// 함수 선언식 : 함수에 이름을 붙여서 사용하는 것
// function t2(){}

// 함수 표현식 : 변수에 함수(익명함수)를 대입하여 사용하는 것
// var t3 = function(){}

var variableFn = function(n){
  return (n+100) * 10;
};

var v = variableFn(7);

console.log(v);

// -----------------------------------
// 즉시 실행함수 (외부접근을 못하게 하는 함수)
// ()();
var pr = 100;

(function(myp){
  console.log(myp+1);
})(pr);
*/

var f1 = function () {return 10;};
console.log(f1());

var f2 = () => {return 10;};
console.log(f2());

// =============================================

var myCon = {
  name : function(b){return b}
};
console.log(myCon.name('csr'));

// 함수는 여러기능을 하나로 묶어서 처리하는 것으로, 생성과 동시에 실행되지 않지만 호출하면 동작하게 한다. 이때, 함수를 객체 내부에 생성시킨 후에 해당객체를 실행하게 하면 함수가 동작한다. 동작하는 객체명은 메소드라고 부른다.
