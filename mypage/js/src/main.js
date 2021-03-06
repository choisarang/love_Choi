(function($){

  // headBox ------------------------------------------------------------------------------
  const headBox = $('#headBox');
  const gnb = $('#gnb');
  const gnbLiLink = headBox.find('li').children('a');
  const gnbDd = headBox.find('dd');
  const gnbDdLink = gnbDd.children('a');

  gnb.on('mouseenter', function(){
    headBox.addClass('action');
  });

  gnb.on('mouseleave', function(){
    headBox.removeClass('action');
  });
  
  gnbLiLink.on('mouseenter focus', function(){
    $(this).addClass('active');
    headBox.addClass('action');
  });

  gnbLiLink.on('mouseleave blur', function(){
    $(this).removeClass('active');
  });

  gnbLiLink.eq(-1).on('blur', function(){
    headBox.removeClass('action');
  });


  // 해당페이지 active 넣기
    const proBox = $('#proBox');
    const portBox = $('#portBox');
    const likeBox = $('#likeBox');

    let winScroll = $(window).scrollTop();
    let proH = proBox.offset().top;
    let portH = portBox.offset().top;
    let likeH = likeBox.offset().top;


    $(window).on('scroll',function(){

    winScroll = $(window).scrollTop();
    if(winScroll>proH && winScroll < portH){
      $('.port').children('a').removeClass('active');
      $('.like').children('a').removeClass('active');
      $('.pro').children('a').addClass('active');
    }else if(winScroll>portH && winScroll < likeH){
      $('.pro').children('a').removeClass('active');
      $('.like').children('a').removeClass('active');
      $('.port').children('a').addClass('active');
    }else if(winScroll > likeH){
      $('.pro').children('a').removeClass('active');
      $('.port').children('a').removeClass('active');
      $('.like').children('a').addClass('active');
    }else{
      $('.like').children('a').removeClass('active');
      $('.pro').children('a').removeClass('active');
      $('.port').children('a').removeClass('active');
    }

    
    })


  // viewBox ===============================================================
    const viewInner = $('.view_inner');
    const viewSpan = viewInner.children('span');
    const viewP = viewInner.children('p');

    $(window).scroll(function(){
      let scroll = $(window).scrollTop();
      if (scroll){
        viewSpan.fadeIn(4000);
        viewP.fadeIn(6000);
      }
    })
    viewInner.on('mouseenter', function(){
      
    });


  // mainBox -----------------------------------------------------------------------
  const mainBox = $('#mainBox');

  // proflie 나오게

  const proflie = mainBox.find('.proflie');
  const proPic = proflie.children('.pro_pic');
  const mouse = proPic.find('.mouse');
  const proText = proflie.children('.pro_text');

  let mainBox_offset = mainBox.offset().top;

  
proflie.on('mouseenter', function(){
  $(this).addClass('action');
  proText.fadeIn(4000);
  mouse.fadeOut();
});

  // // 클릭하면 펼쳐지게

  const mbti = $('.mbti');
  const mbtiH3 = mbti.children('h3');
  const mbtiGraph = mbti.children('.mbti_graph');
  const mbtiOne = mbtiGraph.children('.one');
  const mbtiTwo = mbtiGraph.children('.two');
  const mbtiThree = mbtiGraph.children('.three');
  const mbtiFour = mbtiGraph.children('.four');
  const mbtiFive = mbtiGraph.children('.five');

  // const character = $('.character');
  // const characterGraphTop = character.find('.character_graph_top')


  let mbtiH3_offset = mbtiH3.offset().top;
  // let character_offset = character.offset().top;


  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= mbtiH3_offset - (200)) {
      mbtiOne.addClass('action');
      mbtiTwo.addClass('action');
      mbtiThree.addClass('action');
      mbtiFour.addClass('action');
      mbtiFive.addClass('action');
    // }if (scroll >= character_offset - (100)) {
    //   characterGraphTop.addClass('action');
    }
  });
  

  // skills 그래프

  const skills = $('.skills');
  let skills_offset = skills.offset().top;
  let isSubmit = true;
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= skills_offset - (100) && isSubmit == true) {
      skill();
  }
  });

  function skill (){

  
  $(window).ready(function(){
    draw(76, '.illustrator', '#d3c3b8');
    draw(66, '.photoshop', '#d3c3b8');
    draw(51, '.indesign','#d3c3b8');
    draw(76, '.invision','#d3c3b8');
    draw(91, '.html','#d3c3b8');
    draw(76, '.css','#d3c3b8');
    draw(66, '.scss','#d3c3b8');
    draw(66, '.jquery','#d3c3b8');
    draw(51, '.git','#d3c3b8');

  });
  
  function draw(max, classname, colorname){
     let i=1;
      let func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
          clearInterval(func1);
        }
      },10);
  }
  function color1(i, classname,colorname){
     $(classname).css({
          "background":"conic-gradient("+colorname+" 0% "+i+"%, #f2eedd "+i+"% 100%)"
     });
  }
  isSubmit = false;
  
  
}
  // function replay(){
  //  draw(76, '.illustrator', '#d3c3b8');
  //  draw(66, '.photoshop', '#d3c3b8');
  //  draw(51, '.indesign','#d3c3b8');
  //  draw(76, '.invision','#d3c3b8');
  //  draw(91, '.html','#d3c3b8');
  //  draw(76, '.css','#d3c3b8');
  //  draw(66, '.scss','#d3c3b8');
  //  draw(66, '.jquery','#d3c3b8');
  //  draw(51, '.git','#d3c3b8');ß
  // }





  // infoH3.on('click', function(e){
  //   e.preventDefault();

  // let has = $(this).hasClass('action');
  //   if(has){
  //     $(this).siblings('dl').stop().slideUp(500);
  //     $(this).removeClass('action');
  //   }else{
  //     $(this).siblings('dl').stop().slideDown(800);
  //     $(this).addClass('action');
  //   }
  // });

  // imgH3.on('click', function(e){
  //   e.preventDefault();

  // let has = $(this).hasClass('action');
  //   if(has){
  //     $(this).siblings('div').fadeOut(500);
  //     $(this).removeClass('action');
  //   }else{
  //     $(this).siblings('div').fadeIn(800);
  //     $(this).addClass('action');
  //   }
  // });

    // portBox ==========================================================

    
    // yogurt --------------------------------
    const yogurt = $('.yogurt')
    const yPortLink = yogurt.find('.port_btn').children('a')
    const yPopupBg = $('.y_popup_bg');
    const yEx = $('button');
  
    yPortLink.on('click', function(e){
      e.preventDefault();
      yPopupBg.fadeIn();
    });
    
    yEx.on('click', function(){
      yPopupBg.fadeOut();
    });
    
    //  scroll 사라지기
    const yPort = yPopupBg.find('.port_area');
    const yScroll = yPopupBg.find('.scroll');
    const yPortUl = yPort.children('ul');
  
    let yPortScroll = yPort.scrollTop();
    let yPortUlH = yPortUl.outerHeight();
  
    
    yPort.on('scroll',function(){
      yPortScroll = yPort.scrollTop();
      yPortUlH = yPortUl.outerHeight();
  
      if(yPortScroll>yPortUlH/1.1){
        yScroll.fadeOut();
      }else{
        yScroll.fadeIn();
      }
     });


    // yamaha --------------------------------
    const yamaha = $('.yamaha')
    const hPortLink = yamaha.find('.port_btn').children('a')
    const hPopupBg = $('.h_popup_bg');
    const hEx = $('button');
  
    hPortLink.on('click', function(e){
      e.preventDefault();
      hPopupBg.fadeIn();
    });
    
    hEx.on('click', function(){
      hPopupBg.fadeOut();
    });
    
    //  scroll 사라지기
    const hPort = hPopupBg.find('.port_area');
    const hScroll = hPopupBg.find('.scroll');
    const hPortUl = hPort.children('ul');
  
    let hPortScroll = hPort.scrollTop();
    let hPortUlH = hPortUl.outerHeight();
  
    
    hPort.on('scroll',function(){
      hPortScroll = hPort.scrollTop();
      hPortUlH = hPortUl.outerHeight();
  
      if(hPortScroll>hPortUlH/1.1){
        hScroll.fadeOut();
      }else{
        hScroll.fadeIn();
      }
     });

    // casamia --------------------------------
    const casamia = $('.casamia')
    const cPortLink = casamia.find('.port_btn').children('a')
    const cPopupBg = $('.c_popup_bg');
    const cEx = $('button');
  
    cPortLink.on('click', function(e){
      e.preventDefault();
      cPopupBg.fadeIn();
    });
    
    cEx.on('click', function(){
      cPopupBg.fadeOut();
    });
    
    //  scroll 사라지기
    const cPort = cPopupBg.find('.port_area');
    const cScroll = cPopupBg.find('.scroll');
    const cPortUl = cPort.children('ul');
  
    let cPortScroll = cPort.scrollTop();
    let cPortUlH = cPortUl.outerHeight();
  
    
    cPort.on('scroll',function(){
      cPortScroll = cPort.scrollTop();
      cPortUlH = cPortUl.outerHeight();
  
      if(cPortScroll>cPortUlH/1.2){
        cScroll.fadeOut();
      }else{
        cScroll.fadeIn();
      }
     });



    // like 이미지 넣기 ==================================
    let likeUrl = "../img/jjorom/"
    like = ["jjorom_01","jjorom_02","jjorom_03","jjorom_04","jjorom_05","jjorom_06","jjorom_07","jjorom_08","jjorom_09","jjorom_10","jjorom_11"];
 
 
   //  li 생성 ===============================
    const likeUl = likeBox.children('ul');
    const likePopup = $('.like_pop');
    const likePic = $('.like_pic');
    const likeEx = likePopup.find('button');
 
    for(let i=0; i<like.length; i++){
      likeUl.append('<li><a href="#"></a></li>');
      const likeLi = likeUl.children('li');
      const likeLiLink = likeLi.children('a');
      likeLi.eq(i).css({backgroundImage:"url("+likeUrl + like[i]+".jpg)"});
      likeLi.on('click', function(e){
      let index = $(this).index();
       e.preventDefault();
       likePopup.fadeIn();
       likePic.css({backgroundImage:"url("+likeUrl + like[index] + ".jpg"});
      });
      likeEx.on('click', function(){
        likePopup.fadeOut();
      });

    };


    // btn 누르면 보이기
    const likeBtn = likeBox.children('button');

    likeBtn.on('click', function(){
      likeUl.children('li').fadeIn();
      $(this).fadeOut();
    })

    // website 이동
    // const webLink = $('.web_btn');
    // webLink.on('click', function(e){
    //   e.preventDefault();
    // });

    // // pdf 다운로드
    // const pdfLink = $('.pdf_btn');
    // pdfLink.on('click',function(e){
    //   e.preventDefault();
    // });





})(jQuery);