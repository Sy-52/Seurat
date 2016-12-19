/* 一言获取 -- getHitokoto() */
(function(){
	var receiver = document.getElementById('hitokoto');
	ajax('GET','http://api.hitokoto.cn/?c=a',getHitokoto);
	function getHitokoto(responseText){
		var result = JSON.parse(responseText);
		receiver.innerHTML = result.hitokoto;
	}
	/* 工具函数 -- ajax */
	function ajax(method,url,fn){
		var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft XHLHttp');/* IE5、6下的兼容方式 */
		xhr.open(method,url);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				fn(xhr.responseText)
			}
		}
	}
})();