var timer = null;
$(".search").find(".text").focus(function() {
	$(this).keydown(function() {
		var that = this;
		clearTimeout(timer);
		timer = setTimeout(function() {
			var val = $(that).val()
			$.ajax({
				type: "get",
				url: "http://search.wconcept.cn/v1/goods?limit=10&page=1&q=val&sort=-updated_at",
//				url:"http://www.ugoshop.com/search_reci.php?keywords=",
				async: true,
				success: function(res) {
					let nameArr = [];
					for(let i = 0; i < 10; i++) {
						nameArr.push(res.recommendedItems[i].name);
					}
					var str = "";
					for(let i in nameArr) {
						if(nameArr[i] != undefined) {
							str += `<a>${nameArr[i]}</a>`;
						}
					}
					$(".result").html(str);
					$(".result").find("a").css({
						display: "block"
					});
					$(".result").find("a").on("mousedown", function() {
						$(".search").find(".text").val($(this).html());
					})
					$(".result").find("a").on("mouseup", function() {
						$(".result").find("a").css({
							display: "none"
						});
					$(".submit").on("click",function(){
						$(".search").find(".text").val("");
					})
//						$(this).val('');
					})
				}

			});
		}, 500);

	})
})


//	$(".search").find(".text").blur(function() {
//		$(".result").find("a").css({
//			display: "none"
//		});
//		$(this).val('');
//		console.log($(this).val())
//
//	})


//$(".search").find(".text").focus(function() {
//	$(this).keydown(function() {
//		var that=this;
//	$.ajax({
//			type:"get",
//			url:"http://localhost/wconcept1/module/data.php",
//			data:{"detail":"list"},
//			success:function(res){
////				console.log(res);
//				that.msg=JSON.parse(res)
//				console.log(that.msg);
//				for(var i in that.msg.length){
//					
//					console.log(that.msg[i].name)
//				}
//				var searchdata=that.msg.name
//				console.log(searchdata);
//				if($(".text").val()==that.msg.name){
////					for()
//				}
//				}
//	})
//	})
//})


//	$(".search").find(".text").blur(function() {
//		$(".result").find("a").css({
//			display: "none"
//		});
//		$(this).val('');
//		console.log($(this).val())
//
//	})