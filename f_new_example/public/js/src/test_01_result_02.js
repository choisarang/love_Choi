(function($){

const product = $('.product');
const productUl = product.find('ul');
let productLi = productUl.find('li');

const btn = $('.btn').find('button');

// 가로형 슬라이드 
const HorizonSlide = function(){
productLi.eq(-1).clone().prependTo(productUl);
productLi = productUl.find('li');

let productLen = productLi.length;
productUl.css({'marginLeft':'-100%', 'width':100 * productLen + '%', 'position':'relative', 'left':0, });
productLi.css({'width':100 / productLen + '%'});

// --------------------------------------------------------------------------------
let i = 0;

btn.on('click', function(e){
  e.preventDefault();
  let btnL = $(this).hasClass('next');
  if(btnL){//다음버튼
    i++;
      if(i >= productLen-1){
        productUl.css({left:100+'%'})
      }
  productUl.animate({'left':-100 * i + '%'})
  }else{//이전버튼
    i--;
    productUl.animate({'left':-100 * i + '%'},function(){
      if(i <= -1){
        productUl.css({left:-100 * (productLen-2) + '%'});
        i = productLen-2;
      }
    }); //productUl.animate()
  }
})

};// HorizonSlide
// HorizonSlide();

// ====================================================================
// 세로형 슬라이드
productLi.eq(-1).clone().prependTo(productUl);
productLi = productUl.find('li');
let productH = product.outerHeight(); //padding, margin 값을 못가져와서 p를 가져오려면 innerHeight, m을 가져오려면 outerHeight
let productLen = productLi.length;

productUl.css({width:'100%', height: 100 * productLen + '%', transform:`translateY(${-productH}px)`, position:'relative', left:0, top:0});
productLi.css({width:'100%', height: productH});


let i = 0;
btn.on('click', function(e){
  e.preventDefault();
  let btnL = $(this).hasClass('next');
  if(btnL){//next버튼
    i++;
    if(i >= productLen-1){
      productUl.css({'top':productH + 'px'});
      i = 0;
    }
    productUl.animate({'top':-productH * i + 'px'});
  }else{//prev버튼
    i--;
    productUl.animate({'top':-productH * i + 'px'}, function(){
      if(i <= -1){
        i = productLen -2;
        productUl.css({'top':-productH * i + 'px'});
      }
    });
  }
});

})(jQuery);