// grammer_basic.js
// javascript 기초 이해하기

/** 문법
 *  조건문 : 특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 거짓이면 수행하지 않도록 처리
 *  반복문 : 2번 이상 반복수행할 경우 단순 반복이 아니라 자동으로 수행하도록 처리
 */

//  ===============================================
//  조건문 : 단순분기(하나의 조건을 기준으로 참/거짓) - if ~ else , 다수분기(다양한 조건 중에 하나) - switch

// -----------------------------------------
// if(조건을 비교){조건이 참일 경우 수행}

/*
var myNum = function(par){
  var i = par;
  if(i < 10){
    var text = "주어진 숫자는 10보다 작은 수 입니다.";
  } else if (i === 10){
    text = "주어진 숫자는 10입니다.";
  } else {
    text = "주어진 숫자는 10보다 큰 수 입니다."
  }
  return console.log(text);

};

myNum(1);
myNum(10);
myNum(30);
*/

// -------------------------------------------
//  switch case, break, default
var myMenu = function(){

  let coffee, text, menu;

  menu = ['americano', 'latte', 'mocha', 'vanilla', 'esspresso']

  coffee = prompt("원하시는 메뉴를 입력해주세요. \n 메뉴는 :" + menu);

  switch(coffee){
    case menu[0]:
      text = "찐커피";
    break;

    case menu[1]:
      text = "우유커피"
    break;

    case menu[2]:
      text = "초코커피";
    break;

    case menu[3]:
      text = "바닐라커피";
    break;

    case menu[4]:
      text = "원액";
    break;

    default :
      text = "물"
    break;  
      }

    console.log(text);
    
    };

  var myBtn = document.getElementById('coffeeMenu');
  myBtn.addEventListener('click', function(){
    myMenu();
  });






// ==================================================

