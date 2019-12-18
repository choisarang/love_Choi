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

    viewInner.on('mouseenter', function(){
      viewSpan.fadeIn(2500);
      viewP.fadeIn(5000);
    });


  // mainBox -----------------------------------------------------------------------
  
  // // 클릭하면 펼쳐지게

  // const proTitle = proBox.find('h3');

  // proTitle.on('click', function(e){
  //   e.preventDefault();

  // let has = $(this).hasClass('action');
  //   if(has){
  //     $(this).siblings('dl').stop().slideUp();
  //     $(this).removeClass('action');
  //   }else{
  //     $(this).siblings('dl').stop().slideDown();
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