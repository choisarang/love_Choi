(function($){
  const wrap = $('#wrap');
  
  // headBox -------------------------------------------
  const headBox = wrap.children('#headBox');
  const gnbUl = headBox.find('ul');
  const gnbLi = gnbUl.children('li');
  const gnbDl = gnbLi.children('dl');
  const gnbDt = gnbDl.children('dt');
  const gnbDd = gnbDl.children('dd');
  const gnbDtLink = gnbDt.children('a');
  const gnbDdLink = gnbDd.children('a');
  
  gnbDl.on('mouseenter', function(){
    gnbUl.addClass('action');
    gnbDd.stop().slideDown();
    $(this).children('dt').children('a').addClass('active');
    $(this).children('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});
  });
  gnbDl.on('mouseleave', function(){
    gnbDd.stop().slideUp();
    gnbUl.removeClass('action');
    $(this).children('dt').children('a').removeClass('active');
    $(this).children('dd').css({backgroundColor:"transparent"});
  });
  

  gnbDl.find('a').on('focus',function(){
    gnbUl.addClass('action');
    gnbDd.stop().slideDown();
    $(this).addClass('active');
    $(this).parents('dl').find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"});

    
    $(this).closest('li').find('dd').find('a').eq(-1).on('blur', function(){
      // console.log('part dd last');
      $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
        $(this).parent('dd').css({backgroundColor:"transparent"})
    });  
    
  });
  
  gnbDl.find('a').eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
    gnbUl.removeClass('action');
  });
  
  // gnbDdLink.on('blur', function(){
  //   $(this).parent('dd').prevAll('dt').children('a').removeClass('active');
  //   $(this).parent('dd').css({backgroundColor:"transparent"})
  // });





  
  // gnbDd 효과
  gnbDd.children('a').on('mouseenter focus', function(){
    $(this).addClass('active');
  });
  
  gnbDd.children('a').on('mouseleave blur', function(){
    $(this).removeClass('active');
  });


  // 해당페이지 선택효과 =====================================
  gnbLi.eq(1).find('dt').children('a').addClass('select');
  gnbLi.eq(1).find('dd').children('a').eq(1).addClass('select');
  gnbLi.eq(1).find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"})

  

  // headBox_small------------------------------------------
  const small = $('.small');
  const barLink = small.find('a');
  const barBg = small.children('.bar_bg');
  const ex = barBg.find('.ex');
  
  barLink.on('click', function(){
    barBg.stop().fadeIn()
  });
  
  ex.on('click', function(){
    barBg.stop().fadeOut()
  });
  
  
  //accodian menu ===================
  const barList = $('.bar_list');
  const barDl = barList.children('dl');
  const barDt = barDl.children('dt');
  const barDd = barDl.children('dd');
  const barDdLink = barDd.children('a')
  
  barDt.on('click', function(){
    let dtC = $(this).hasClass('action');
    
    if(dtC){
      $(this).removeClass('action');
      $(this).siblings('dd').slideUp();
    }else{
      $(this).addClass('action');
      $(this).siblings('dd').stop().slideDown();
    }
  });
  
  barDdLink.on('focus',function(){
    $(this).parent('dd').siblings('dt').css({fontWeight:"bold"});
    $(this).parent('dd').siblings('dt').find('i').css({color:"#1b398f"});
  });
  
  barDdLink.on('blur', function(){
    $(this).parent('dd').siblings('dt').css({fontWeight:"normal"});
    $(this).parent('dd').siblings('dt').find('i').css({color:"#777"});
  });
  
  
  // menu list--------------------------------------------------------------------------------------
const url = "../img/menu/" 
const bestList = [{title:'오드리헵번',
             content:'그래놀라<br />블루베리<br />청포도<br />구운코코넛<br />벌꿀',
             price:'R 4,900  L 5,900',
             bgimg:'1.png'},
            {title:'오직무화과',
             content:'무화과',
             price:'R 4,900  L 5,900',
             bgimg:'2.png'},
            {title:'밀초바',
             content:'그래놀라<br />크리스피라이스<br />코코넛<br />연유<br />바나나<br />초코통물쿠키',
             price:'R 5,300  L 6,300',
             bgimg:'3.png'},
            {title:'요거트맨시그니처',
             content:'그래놀라<br />비스킷<br />청포도<br />시리얼<br />벌꿀',
             price:'R 5,500  L 6,500',
             bgimg:'4.png'},
            {title:'애리조나허니비',
             content:'애리조나 야생화 벌꿀<br />바나나<br />망고<br />청포도<br />시리얼<br />통곡물시리얼',
             price:'R 5,500  L 6,500',
             bgimg:'5.png'}
            ];
const yogurtList = [{title:'꿀라망코',
            content:'라즈베리<br />망고<br />코코넛<br />그래놀라<br />꿀',
            price:'R 4,900  L 5,900',
            bgimg:'9.png'},
           {title:'꿀바나나',
            content:'바나나<br />용과<br />아몬드<br />그래놀라<br />꿀',
            price:'R 4,900  L 5,900',
            bgimg:'8.png'},
           {title:'밀초바',
            content:'그래놀라<br />크리스피라이스<br />코코넛<br />연유<br />바나나<br />초코통물쿠키',
            price:'R 5,300  L 6,300',
            bgimg:'3.png'},
           {title:'오직무화과',
            content:'무화과',
            price:'R 4,900  L 5,900',
            bgimg:'2.png'},
           {title:'애리조나허니비',
            content:'애리조나 야생화 벌꿀<br />바나나<br />망고<br />청포도<br />시리얼<br />통곡물시리얼',
            price:'R 5,500  L 6,500',
            bgimg:'5.png'},
           {title:'애기입맛',
            content:'오레오<br />오레오 크러쉬<br />그래놀라<br />코코넛<br />연유',
            price:'R 4,900  L 5,900',
            bgimg:'6.png'},
            {title:'오드리헵번',
            content:'그래놀라<br />블루베리<br />청포도<br />구운코코넛<br />벌꿀',
            price:'R 4,900  L 5,900',
            bgimg:'1.png'},
           {title:'요거트맨시그니처',
            content:'그래놀라<br />비스킷<br />청포도<br />시리얼<br />벌꿀',
            price:'R 5,500  L 6,500',
            bgimg:'4.png'},
           {title:'지니어스',
            content:'블루베리<br />호두<br />아몬드<br />말린무화과<br />그래놀라<br />꿀',
            price:'R 4,900  L 5,900',
            bgimg:'7.png'}
           ];
const ToppingList = [{title:'블루베리',
           content:'단맛 신맛<br />스트레스해소<br />녹내장 눈 건강<br />다이어트',
           price:'50g당 700',
           bgimg:'blueberry.png'},
          {title:'아보카도',
           content:'비타민E<br />비타민B2<br />비타민B6<br />노화방지<br />피부 건강<br />다이어트',
           price:'50g당 700',
           bgimg:'abocado.png'},
          {title:'오렌지',
           content:'상큼함<br />비타민D<br />뼈 치아 건강<br />면역력',
           price:'50g당 700',
           bgimg:'orange.png'},
          {title:'천도복숭아',
           content:'신맛 단맛<br />피로회복<br />장 건강<br />숙취해소<br />노화방지<br />피부건강<br />다이어트',
           price:'50g당 700',
           bgimg:'peach.png'},
          {title:'바나나',
           content:'단맛<br />변비 예방<br />우울증 예방<br />소화개선<br />피부 건강<br />다이어트<br />빈혈 예방',
           price:'50g당 700',
           bgimg:'banana.png'},
           {title:'그래놀라',
           content:'고소함<br />성장 발육<br />성인병 예방<br />변비 예방<br />골다공증 예방<br />당뇨 예방<br />다이어트',
           price:'50g당 700',
           bgimg:'granola.png'},
           {title:'후르츠링',
           content:'단맛 상큼함<br />애기입맛 추천',
           price:'50g당 700',
           bgimg:'fruitring.png'},
          {title:'통밀쿠키',
           content:'고소함<br />바삭한 식감',
           price:'50g당 700',
           bgimg:'cookie.png'},
           {title:'초코통밀쿠키',
           content:'단맛 고소함<br />바삭한 식감<br />애기입맛 추천',
           price:'50g당 700',
           bgimg:'chococookie.png'},
           {title:'오레오',
           content:'단맛 + 단맛<br />바삭한 식감<br />애기입맛 추천',
           price:'50g당 700',
           bgimg:'oreo.png'},
           {title:'곰젤리',
           content:'단맛 상큼함<br />쫄깃한 식감',
           price:'50g당 700',
           bgimg:'jelly.png'}
          ];
const DrinkList = [{title:'요거트 스무디',
           content:'그릭요거트<br />설탕시럽<br />얼음',
           price:'R 3,500 L 4,500',
           bgimg:'pl_yogurt.png'},
           {title:'딸기요거트 스무디',
           content:'그릭요거트<br />딸기<br />설탕시럽<br />얼음',
           price:'R 3,900 L 4,900',
           bgimg:'st_yogurt.png'},
           {title:'망고요거트 스무디',
           content:'그릭요거트<br />망고<br />설탕시럽<br />얼음',
           price:'R 3,900 L 4,900',
           bgimg:'ma_yogurt.png'},
           {title:'아이스 아메리카노',
           content:'R 에스프레소 1샷<br />L 에스프레소 2샷',
           price:'R 1,500 L 2,000',
           bgimg:'americano.png'},
           {title:'아이스 카페라떼',
           content:'R 에스프레소 1샷<br />L 에스프레소 2샷<br />우유',
           price:'R 2,500 L 3,000',
           bgimg:'latte.png'},
          ];

const drinkArr = [bestList , yogurtList, ToppingList, DrinkList];

  const menuBox = $('.menu_box');
  const listBox = $('.list_box');

  const menuBar = $('.menu_bar');
  const menuBarLi = menuBar.find('li');
  const menuBarLink = menuBarLi.children('a');


  let i=0;
  const LiFun = function(arrVal){

    listBox.empty();

    let len = arrVal.length;
    let textBox = '<div class="textBox"><em></em><p></p><span></span></div>';
    for(let i=0; i<len; i++){
      listBox.append(`<li class="menu_0${i+1}"><a href="#"></a></li>`);
      let li_nth = listBox.children('li').eq(i);
      li_nth.children('a').append(textBox);
      li_nth.css({'backgroundImage': "url(" + url + arrVal[i].bgimg + ")"});
      
      li_nth.find('em').append(arrVal[i].title);
      li_nth.find('p').append(arrVal[i].content);
      li_nth.find('span').append(arrVal[i].price);
    }
    menuBarLi.eq(i).addClass('action');
    menuBarLi.eq(i).siblings().removeClass('action');
  };
  LiFun(bestList);
  // LiFun(yogurtList);

  menuBarLink.on('mouseenter', function(){
    $(this).addClass('action')
  });
  menuBarLink.on('mouseleave', function(){
    $(this).removeClass('action')
  });

  menuBarLink.on('click', function(e){
    e.preventDefault();
    $(this).addClass('action')
    i = $(this).parent('li').index();
    LiFun(drinkArr[i]);
  });

  const listLink = listBox.find('a');

  listLink.on('click', function(e){
    e.preventDefault();
  })


  // top 버튼 -------------------------------------------
  const topBtn = $('.top_btn').children('button');

  // 어느정도 위치했을 떄 보이기
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 800 ) {
      topBtn.show();
    } else {
      topBtn.hide();
    }
  } );

  // 버튼 이동
  topBtn.on('click', function(){
    $('html').animate({scrollTop:0},500);
  });

  

})(jQuery);