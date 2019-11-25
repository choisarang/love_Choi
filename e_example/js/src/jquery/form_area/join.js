// join.js
(function($){
  // *(모든) 
  // 영문 대/소문자와 숫자를 포함하는지, 6글자에서 15글자까지 허용
  let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/
  // \는 .을 문자로 인식하기 위해
  // email 형식 체크(이름 @ 주소 . 지역(com, net, co.kr 등))
  let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
  // 전화번호 형식
  let munCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/

  // email 입력하지 않을 때 -----------------------------------------------
  const userEmail = $('#userEmail');
  userEmail.on('blur', function(){
    let thisVal = $(this).val();
    // console.log(thisVal);
    if(thisVal == ""){
      // console.log('내용을 입력하지 않았음');
      $(this).closest('li').addClass('error');
    }else if(!emailCk.test(thisVal)){
      $(this).closest('li').addClass('error');
      $(this).closest('li').find('.narr').text('이메일 형식에 맞게 내용을 입력하세요');
    }
  })
  // password -----------------------------------------------
  const userPw = $('#userPw');
  const userPwRe = $('#userPwre');
  const pwlabel = $('label[for="userPw"]');

  // =============================
  pwlabel.on('mousedown', function(e){
    if(e.which){
      userPw.attr({type:'text'});
    }
  });
  pwlabel.on('mouseup', function(e){
    userPw.attr({type:'password'});
  })

  let beforePwVal, afterPwVal;

  userPw.on('blur', function(){
    beforePwVal = userPw.val();
    let thisVal = $(this).val();
    let thisLi = $(this).closest('li')
    if(thisVal == ""){
      thisLi.find('.narr').text('비밀번호를 입력하세요'); // 아무것도 입력하지 않을 때
      thisLi.addClass('error'); 
    }if(thisVal.length > 0 && thisVal.length <= 5){
      thisLi.find('.narr').text('비밀번호는 6~15입니다'); //
      thisLi.addClass('error'); 
    }else if(!checkPw/test(thisVal)){
      thisLi.find('.narr').text('영문 대소문자, 특수문자 혼용'); //
      thisLi.addClass('error'); 
    }else{
      thisLi.find('.narr').removeClass('error');
    }
  });

  userPwRe.on('blur', function(){
    afterPwVal = userPwRe.val();
    // console.log(beforePwVal + ':' + afterPwVal);
    if(beforePwVal !== afterPwVal){
      $(this).closest('li').addClass('error');
      // console.log('비밀번호 입력이 일치하지 않음'); 
    }else{
      $(this).closest('li').removeClass('error');
    }
  });

  // 정규 표현식 : RegExp(regular expression)
  let a = 10;
  let b = 4;
  let c = 8;
  let re = /a + c/;
  let re2 = new RegExp(a + c);
  // console.log(re2);
  
  // 정규 표현식 메소드
  // 1. exec    : 대응되는 문자열을 찾는 메소드(배열반환)
  // 2. test    : 해당하는 문자열의 유무 파악(t/f)
  // 3. match   : 해당하는 문자열의 유무 파악(배열반환)
  // 4. search  : 해당하는 문자열의 유무 파악(인덱스반환)
  // 5. replace : 찾아 바꾸기
  // 6. split   : 문자열을 배열로 반환(string 메소드)

})(jQuery);