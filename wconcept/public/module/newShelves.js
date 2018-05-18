	function Banner(img,btn){
			//选元素
			this.img=img;
			this.left=btn.left;
			this.right=btn.right;
			this.index=0;
			this.init();
			
		}
		Banner.prototype.init=function(){
			//绑定事件
			var that=this;
			this.left.onclick=function(){
				that.change("left");
			}
			this.right.onclick=function(){
				
				that.change("right");
			}
		
		}
		Banner.prototype.change=function(direct){
			//修改索引
			if(direct=="left"){
				
				if(this.index==0){
					this.index=this.img.length-1;
					console.log(this.index)
				}else{
					this.index--
				}
					console.log(1)
			}
			if(direct=="right"){
				if(this.index==this.img.length-1){
					this.index=0;
	
				}else{
					this.index++
				}
				this.move();
			}
			this.move();
		}
		
		Banner.prototype.move=function(){
			
			//让图动起来
			move(this.img[0].parentNode,{"left":-this.img[0].offsetWidth*this.index})
		
		}
		


	function move(ele, json, callback) {
		var timer = null;
		clearInterval(ele.timer);
		ele.timer = setInterval(function() {
			for(var attr in json) {
				//获取当前值
				if(attr == "opacity") {
					var inow = Math.round(getStyle(ele, attr) * 100);
				} else {
					var inow = parseInt(getStyle(ele, attr));
				}
				//算出步长
				var speed = (json[attr] - inow) /2;
				if(speed < 0) {
					speed = Math.floor(speed);
				} else {
					speed = Math.ceil(speed);
				}
				//判断所有属性到达终点才停止
	
				if(inow != json[attr]) {
					if(attr == "opacity") {
						ele.style[attr] = (inow + speed) / 100;
						ele.style.filter = "alpha(opacity=" + inow + speed + ")";
					} else {
						ele.style[attr] = inow + speed + "px";
					}
				} else {
					clearInterval(ele.timer);
					//动画结束后的操作
					if(callback) {
						callback();
					}
				}
			}
	
		}, 30)
	}
	
//获取非行内样式
	function getStyle(obj, attr) {
		if(obj.currentStyle) {
	
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}