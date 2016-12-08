var toTop = document.getElementById('toTop');
// 大背景图变换函数 -- load()
window.onload = function(){
	var body = document.getElementsByTagName('body')[0];
        var paper = document.getElementById('paper');
	var imgNum = Math.ceil(Math.random()*17);
	body.style.background = '#fcf6ea top center no-repeat url(http://www.fanyikai.com/wp/wp-content/themes/seurat/images/'+imgNum+'.jpg)';
        if(document.body.clientWidth > 1600){
                paper.style.width = '1000px';
        }
}

//工具栏箭头图标的渐隐渐现效果	
window.onmousewheel = slide;
//Fiexfox兼容
document.body.addEventListener("DOMMouseScroll",slide);
function slide(){
	if(document.body.scrollTop){
		if(document.body.scrollTop>100){
			toTop.style.animation= 'fadeIn 1s ease forwards';		
		}else{
			toTop.style.animation= 'fadeOut 1s ease forwards';	
		}
	}else{
		if(document.documentElement.scrollTop>100){
			toTop.style.animation= 'fadeIn 1s ease forwards';		
		}else{
			toTop.style.animation= 'fadeOut 1s ease forwards';	
		}
	}
}	

//滚动条逐渐网上滑动效果
toTop.onclick = function buffer(){
	var time = setInterval(toTop,.5);
	var currentPosition;
  	document.body.scrollTop?currentPosition = document.body.scrollTop:currentPosition = document.documentElement.scrollTop;	
  	function toTop(){
  		if(currentPosition > 0){
  			currentPosition -= 20;
  			window.scrollTo(0,currentPosition);   //window对象上方法，HTMLElement/Element/Document上均无
  		}else{
  			clearInterval(time);
  		}
  	}
}
