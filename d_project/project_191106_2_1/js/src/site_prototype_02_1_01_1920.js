(function($){
const wrap = $('#wrap');
const headBox = wrap.children('#headBox');
const gnbUl = headBox.find('ul');
const gnbLi = gnbUl.children('li');
const gnbDt = gnbLi.find('dt');
const gnbDd = gnbLi.find('dd');


const viewBox = wrap.children('#viewBox');
const conBox = wrap.children('#conBox');


// headBox -------------------------------------------
gnbUl.on('mouseenter', function(){
  gnbDd.stop().slideDown();
});
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------


})(jQuery);