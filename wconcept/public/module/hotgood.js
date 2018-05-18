function hotGood(ele,url){
	this.ele=ele;
	this.url=url;
	this.msg="";
	this.load();
	

}
hotGood.prototype.load=function(){
	var that=this;
	$.ajax({
		type:"get",
		url:this.url,
		data:{count:2,page:1},
		success:function(res){
            // console.log(res);
			// that.msg=JSON.parse(res)
            // console.log(that)
			that.display(res);
			}
	})

}
hotGood.prototype.display=function(res){

    var str="";
	for(var i in res){
				str+=`<a href="#" class="good special">
				<span class="img">
				<img src="${res[i].image_url0}" alt="" >        
				</span>
				<span class="brand">${res[i].brand_name}</span>
				<span class="name">${res[i].name}</span>
				<span class="price">${res[i].final_price}</span>
			</a>`
}
	// this.ele[0].innerHTML+=str;
			this.ele.html(str);
			
		
			
			for(var i=0;i<$(".special").length;i++){
				
				$(".special")[i].setAttribute("index",i)
			}
//			$(".special")[1].getAttribute("index"));
			var index=null;
			$(".special").on("click",function(){
				this.getAttribute("index");
				console.log(this.getAttribute("index"));
				index=this.getAttribute("index");
				
				window.location="goods-detail.html?"+index;
			});
			
			
			
}	

