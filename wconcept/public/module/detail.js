
function detail(){
	this.load();

}
detail.prototype.load=function(){
	var that=this;
	$.ajax({
		type:"get",
		url:"http://localhost/wconcept1/module/data.php",
		data:{"detail":"list"},
		success:function(res){
			that.msg=JSON.parse(res)
			console.log(that.msg)
			

			}
	})
}

	new detail();