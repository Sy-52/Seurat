(function(){
	var toTop = document.getElementById('toTop');
	/* 大背景图变换函数 */
	window.onload = function(){
		var body = document.getElementsByTagName('body')[0];
		var imgNum = Math.ceil(Math.random()*17);
		body.style.background = '#fcf6ea top center no-repeat url(wp-content/themes/Seurat/images/'+imgNum+'.jpg)';
		// 检测屏幕宽度，若>1600px的话，限制其宽度为1000px
		// var paper = document.getElementById('paper');
	    // if(document.body.clientWidth > 1600){
	    //         paper.style.width = '1000px';
	    // }
	}

	/* 工具栏箭头图标的渐隐渐现效果	*/
	window.onmousewheel = slide;	//IE10和其他浏览器
	document.body.addEventListener("DOMMouseScroll",slide);		//Fiexfox兼容
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

	/* 滚动条上滑 */
	addEvent(toTop,'click',buffer);
	function buffer(){
		var time = window.setInterval(toTop,.5);
		var currentPosition = document.body.scrollTop;
	  	function toTop(){
	  		if(currentPosition > 0){
	  			currentPosition -= 20;
	  			window.scrollTo(0,currentPosition);   //window对象上方法，HTMLElement/Element/Document上均无
	  		}else{
	  			window.clearInterval(time);
	  		}
	  	}
	}
	/* 事件绑定函数 */
	function addEvent(ele,type,fn){
		if(window.addEventListener){
			ele.addEventListener(type,fn);
		}else if(window.attachEvent){
			ele.attachEvent('on'+type,fn);
		}else{
			ele['on'+type] = fn;
		}
	}
})();