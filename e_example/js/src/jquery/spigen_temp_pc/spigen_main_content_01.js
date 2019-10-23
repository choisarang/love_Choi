// spigen_main_content_01.js
(function($){

  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDtBtn = conDt.children('button');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus', function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent();
    let parNext = btnParent.next('dd');

    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');

    /*
    // step1
    parNext.addClass('action');
    parNext.siblings('dd').removeClass('action');
    */

    //step2
    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    // action 클래스이름으로 구분만 할 수 있도록 처리하고, css에서 동작하지 않도록 처리
  });

  // 반복되는 text box 만들기 ===========================================================================



    let imgUrl = "../../img/spigen/";
    const mediaList = [
      {text:'[youtube] 아마존으로 2600억 매출', date:'2019.10.22', img:'media_01.jpg'},
      {text:'슈피겐코리아 미국 아마존 독점유통', date:'2019.10.20', img:'media_02.jpg'},
      {text:'[youtube]\'취업비자\'기업탐방', date:'2019.10.10', img:'media_03.jpg'}
      ];

      // mediaList[0].text => 1번째 가져오기

     const blogList = [
      {text:'아무리 급해도 놓칠 수 없는 한가지', date:'2019.10.21', img:'blog_01.jpg'},
      {text:'업무 중 즐기는 문화예술공연', date:'2019.10.16', img:'blog_02.jpg'},
      {text:'풀필먼트(fulfillment) 서비스', date:'2019.10.10', img:'blog_03.jpg'}
      ];

      // ForList([selector], [array]);
      const ForList = function(mySel, myList, myText){         // 함수라는 뜻을 가질 때에는 앞에 대문자
        let tabBox = conArea.find(mySel);
        const bmText = '\
        <div class="album">\
          <a href="#">\
            <h4>blog</h4>\
            <p class="con"></p>\
            <p class="date"></p>\
          </a>\
        </div>';
      for(let i = 0; i < myList.length; i++){      // for(최초의 값; 조건비교; 값의 증감;){}
      tabBox.append(bmText);
      let myNth = tabBox.children('.album').eq(i);
      myNth.find('h4').text(myText);
      myNth.find('.con').text(myList[i].text);
      myNth.find('.date').text(myList[i].date);  

      let myImg = imgUrl + myList[i].img;
      myNth.css({'backgroundImage':'url(' + myImg + ')', 'backgroundPosition':'50% 50%','backgroundSize':'contain', 'backgroundRepeat':'no-repeat'});  
      // or 
      // myNth.css({'backgroundImage':`url(${myImg})`});  
      }
    }; // ForList() End

    ForList('.media', mediaList, 'media');
    ForList('.blog', blogList, 'blog');



  // 키보드 방향키로 dt 제어하기 ===========================================================================
    conDtBtn.on('keyup', function(e){
      // console.log(e.keyCode);
      // 왼 37, 오 39, 위 38, 아래 40
      let num = e.keyCode;
      let beforeKey = num === 37 || num === 38 // || 는 둘 중 하나가 참이면 참 도출
      let afterKey = num === 39 || num === 40
      let pdt = $(this).parent(conDt);

      /*
      if(beforeKey){
        pdt.prevAll('dt').find('button').focus();
      }else if(afterKey){
        pdt.nextAll('dt').find('button').focus();
      }
      */
    //   or
     
     switch(num){
       case 37:
       case 38:
        pdt.prevAll('dt').find('button').focus();
       break;
       case 39:
       case 40:
        pdt.nextAll('dt').find('button').focus();
       break;
      }
    });


})(jQuery);