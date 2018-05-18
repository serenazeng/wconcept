define(function(){
	
	class Tab{
		constructor(){
		}
		init(ele){
			this.ele = ele;
			var that = this;
//			console.log(this.ele.btn)
			$(this.ele.btn).on("mouseenter", function(){
				that.change($(this).index('.level2'))
				$(that.ele.btn).on("mouseleave", function(){
					that.ele.list[$(this).index('.level2')].style.display = "none";
				})
			})
		}
		change(index) {
			for(var i = 0; i < this.ele.btn.length; i++) {
				this.ele.list[i].style.display = "none";
//				$(this.ele.list[i]).css({
//					"display":"none"
//				})
			}
			this.ele.list[index].style.display = "block";
		}

	}
	
	return new Tab();
})
//define(function(){
//	
//	class Tab{
//		constructor(){
//		}
//		init(ele){
//			this.ele = ele;
//			var that = this;
//
//			
//			for(var i=0;i<ele.btn.length;i++){
//				
//				this.ele.btn[i].onclick = (function(index){
//					return function(){
//						that.change(this,index);
//					}
//				})(i)
//			}
//		}
//		change(btn,index){
//			for(var i=0;i<this.ele.btn.length;i++){
//				this.ele.btn[i].className = "";
//				this.ele.list[i].style.display = "none";
//			}
//			btn.className = "active";
//			this.ele.list[index].style.display = "block";
//		}
//		
//	}
//	
//	
//	return new Tab();
//})
