// slide_05.js
(function(e){
const slide_05 = $('#viewBox_05');
slide_05.append('<div class="slide_form"></div>');
const slideForm = slide_05.children('.slide_form');
slideForm.append('<ul></ul>');
const slideUl = slideForm.children('ul');

const url = "../img/slide_05/" 
const list = [{title:'tasty autumn fruits',
             content:'쌀쌀한 가을날씨에 잘 어울리는 향긋한 과일티 2종',
             linkText:'detail view',
             link:'http://naver.com',
             bgimg:'slideImage_01.jpg'},
            {title:'Cream & Cheese Muffin',
             content:'촉촉한 크림과 치즈, 다양한 토핑이 올라간 머핀',
             linkText:'detail view',
             link:'http://naver.com',
             bgimg:'slideImage_02.jpg'},
            {title:'bts pop-up house of bts',
             content:'방탄소년단 팝업스토어는 폴 바셋과 함께합니다',
             linkText:'detail view',
             link:'http://naver.com',
             bgimg:'slideImage_03.jpg'},
            ];

listlen = list.length;

const slideCon = '<dl>\
                  <dt></dt>\
                  <dd class ="con"></dd>\
                  <dd class ="link"><a href=""></a></dd>\
                  </dl>';


for(let i=0; i<listlen; i++){
  slideUl.append(`<li class="slide_0${i+1}"></li>`);
let li_nth = slideUl.children('li').eq(i);
li_nth.append(slideCon);
li_nth.find('dt').text(list[i].title);
li_nth.find('.con').text(list[i].content);
li_nth.find('a').text(list[i].linkText);
li_nth.find('a').attr({'href':list[i].link,'target':'_blank'});
li_nth.css({'backgroundImage':`url(${url + list[i].bgimg})`});

};

let cloneLi = slideUl.children('li').eq(-1).clone(true);
cloneLi.prependTo(slideUl);

listlen++;


// 좌우 버튼 만들기 =======================================================================

let num = 0;

let btnMake = '<div class="btn_area">\
              <button type="button" class="next"><span>다음내용</span><i class="fas fa-chevron-right"></i></button>\
              <button type="button" class="prev"><span>이전내용</span><i class="fas fa-chevron-left"></i></button>\
              </div>'

slide_05.prepend(btnMake);

const btnArea = btnMake.children('.btn_area');
const btn = btnArea.children('button');



btn.on('click', function(e){
  e.preventDefault();
  if($(this).index() == 0){        //button의 순서. 0은 첫번째이기 때문에 next버튼
    num++;
    if(num >= listlen-1){
      slideUl.css({'right':'100%'});
      num = 0;
    }else{num--;}
      slideUl.stop().animate({'right':-100 * num + '%'}, 1000, function(){
        if(num <= -1){
          num = listlen-2;
          slideUl.css({'right':-100 * num + '%'},1000);
        }
      })
  }
});

})(jQuery);
