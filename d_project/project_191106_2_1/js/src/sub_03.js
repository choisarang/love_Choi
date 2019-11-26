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
  gnbLi.eq(0).find('dt').children('a').addClass('select');
  gnbLi.eq(0).find('dd').children('a').eq(0).addClass('select');
  gnbLi.eq(0).find('dd').css({backgroundColor:"rgba(140, 177, 200, 0.1)"})

  

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
  })
  
  
  // menu list------------------------------------------
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
             bgimg:'5.png'},
            ];
  const menuBox = $('.menu_box');
  const listBox = $('.list_box');
  const mBoxList = listBox.children('ul');

  const menuBar = $('.menu_bar');
  const mBLi = menuBar.find('li');
  const mBLink = mBLi.children('a');

  var tab = $('.tab_i').children('li');
	tab.on('click', function(e){
		e.preventDefault();
		var i = $(this).index();
		tab.removeClass('action');
		$(this).addClass('action');
		$('.tab_area').children('div').hide();
		$('.tab_area').children('div').eq(i).show();
	})

  mBLink.on('mouseenter', function(){
    $(this).css({color:"#1b398f", fontWeight:"bold", textDecoration:"underline"})
  });
  mBLink.on('mouseleave', function(){
    $(this).css({color:"#777", fontWeight:"normal", textDecoration:"none"})
  });
  mBLink.on('click', function(){
    e.preventDefault();
    $(this).css({color:"#1b398f", fontWeight:"bold", textDecoration:"underline"})
    let i = $(this).parent('li').index();
    mBoxList.hide();
    mBoxList.eq(i).show();
    $()

  });



  let bestLen = bestList.length;
  let textBox = '<div class="textBox">\
                 <em></em>\
                 <p></p>\
                 <span></span>\
                 </div>';
  
  for(let i=0; i<bestLen; i++){
    mBoxList.append(`<li class="menu_0${i+1}"><a href="#"></a></li>`);
    let li_nth = mBoxList.children('li').eq(i);
    li_nth.children('a').append(textBox);
    li_nth.css({'backgroundImage': "url(" + url + bestList[i].bgimg + ")"});

    li_nth.find('em').append(bestList[i].title);
    li_nth.find('p').append(bestList[i].content);
    li_nth.find('span').append(bestList[i].price);
  }



})(jQuery);