//AJAX的get请求方式
function ajaxGet(url,callback){
	//callback回调函数
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open("GET",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.status == 200 && ajax.readyState == 4){
			callback(ajax.responseText);
		}
	}
}
//AJAX的post请求方式
function ajaxPost(url,callback){
	//callback回调函数
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open("POST",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.status == 200 && ajax.readyState == 4){
			callback(ajax.responseText);
		}
	}
}

	