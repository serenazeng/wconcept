$("#go-to-see").find("li").click(function(){
	$("html,body").animate({
		scrollTop:$("#floor").find(".floor").eq($(this).index()).offset().top	
	},500)
	})
$("#go-to-top").find("a").click(function(){
	$("html,body").animate({
		scrollTop:0,
	},1000)
})

