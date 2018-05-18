
define(["module/tab"],function(tab){
	var olist=document.getElementsByClassName("list");
	var obtn=document.getElementsByClassName("level2");
	tab.init({
		btn:obtn,
		list:olist
	});

})	





//define(["module/jQuery.banner"],function(banner){
//		$("#banner").banner({
//			imgs:$("#banner").find("li"),            
//			dots:$("#banner").find("span"),
//			next:$(".next"),
//			prev:$(".prev"),
//			autoPlay:true
//		})
//})
//define(["module/table"],function(table){
//	var olist=document.getElementsByClassName("list");
//	var obtn=document.getElementsByClassName("level2");
//		table.init({
//			btn:obtn,
//			list:olist
//		})
//}