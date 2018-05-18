
	function Enlarge(){}
	Enlarge.prototype.init = function(json){
		json.wall.get(0).onmouseenter = function(){
			json.mask.get(0).style.display = "block";
			json.showBox.get(0).style.display = "block";
			json.wall.get(0).onmousemove = function(ev){
				var ev = ev || event;
				var iX = ev.offsetX - json.mask.get(0).offsetWidth/2;
				var iY = ev.offsetY - json.mask.get(0).offsetHeight/2;
				if(iX < 0){
					iX = 0;
				}
				if(iY < 0){
					iY = 0;
				}
				if(iX > json.wall.get(0).offsetWidth - json.mask.get(0).offsetWidth){
					iX  = json.wall.get(0).offsetWidth - json.mask.get(0).offsetWidth;
				}
				if(iY > json.wall.get(0).offsetHeight - json.mask.get(0).offsetHeight){
					iY = json.wall.get(0).offsetHeight - json.mask.get(0).offsetHeight
				}
				json.mask.get(0).style.left = iX + "px";
				json.mask.get(0).style.top = iY + "px";
				var scaleL = iX/(json.wall.get(0).offsetWidth - json.mask.get(0).offsetWidth);
				var scaleT = iY/(json.wall.get(0).offsetHeight - json.mask.get(0).offsetHeight);
				json.imgBox.get(0).style.left = -scaleL *(json.imgBox.get(0).offsetWidth - json.showBox.get(0).offsetWidth)+"px";
				json.imgBox.get(0).style.top = -scaleT *(json.imgBox.get(0).offsetHeight - json.showBox.get(0).offsetHeight)+"px";
			};
		}
		json.wall.get(0).onmouseleave = function(){
			json.mask.get(0).style.display = "none";
			json.showBox.get(0).style.display = "none";
		} 
	}
	
