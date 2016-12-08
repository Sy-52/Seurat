function getHitokoto(){
	var receiver = document.getElementById('u-hitokoto');
	var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft XHLHttp');
	xml.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status >= 200 && xhr.status <= 300){
				receiver.innerHTML = xhr.responseText.hitokoto;
			}
		}
	}
	xhr.open('GET','http://api.hitokoto.us/rand?cat=a&charset=utf-8',true);
	xhr.send(null)
}