;
(function($) {
	"use strict";
	$.fn.extend({
		banner: function(options) {
			options.imgs.css({
				left: options.imgs.eq(0).width(),
			}).eq(0).css({
				left: 0,
			})
			this.LOCAL = {
				iNow: 0,
			}
			var that = this;
			//绑定事件
			if(typeof options.dots == "object" && options.dots.length != 0) {
				options.dots.on("click", function() {
					if(that.LOCAL.iNow == $(this).index()) {
						return 0;
					}
					//右按钮
					if(that.LOCAL.iNow < $(this).index()) {
						that.LOCAL.move(that.LOCAL.iNow, $(this).index(), 1);
					}
					//左按钮
					if(that.LOCAL.iNow > $(this).index()) {
						that.LOCAL.move(that.LOCAL.iNow, $(this).index(), -1);
					}

					that.LOCAL.iNow = $(this).index();

				})

			}

			//按钮运动
			//右按钮
			if(typeof options.next == "object" && options.next.length != 0 &&
				typeof options.prev == "object" && options.prev.length != 0) {
				var iPrev = options.imgs.length - 1; //第一张图的上一张是最后一张
				options.next.on("click.a", function() {
					if(that.LOCAL.iNow == options.imgs.length - 1) {
						that.LOCAL.iNow = 0;
						iPrev = options.imgs.length - 1;
					} else {
						that.LOCAL.iNow++;
						iPrev = that.LOCAL.iNow - 1;
					}
					that.LOCAL.move(iPrev, that.LOCAL.iNow, 1)
				})
				//	左按钮
				options.prev.on("click", function() {
					if(that.LOCAL.iNow == 0) {
						that.LOCAL.iNow = options.imgs.length - 1;
						iPrev = 0;

					} else {
						that.LOCAL.iNow--;
						iPrev = that.LOCAL.iNow + 1;
					}
					that.LOCAL.move(iPrev, that.LOCAL.iNow, -1)

				})

			}

			//按钮，下标共用的运动函数
			this.LOCAL.move = function(iNow, target, direct) {
				options.imgs.eq(iNow).stop(false, true).animate({
					left: -options.imgs.eq(0).width() * direct,
				})
				options.imgs.eq(target).css({
					left: options.imgs.eq(0).width() * direct,
				}).stop(false, true).animate({
					left: 0,
				})
				options.dots.removeClass().eq(target).addClass("active");

			}

			//计时器
			if(options.autoPlay == undefined || options.autoPlay == true) {
				clearInterval(this.LOCAL.timer);
//				this.LOCAL.timer = setInterval(function() {
////					options.next.trigger("click.a");
//					if(that.LOCAL.iNow == options.imgs.length - 1) {
//						that.LOCAL.iNow = 0;
//						iPrev = options.imgs.length - 1;
//					} else {
//						that.LOCAL.iNow++;
//						iPrev = that.LOCAL.iNow - 1;
//					}
//					that.LOCAL.move(iPrev, that.LOCAL.iNow, 1)
//				}, 2000)
				
				
				this.LOCAL.timer = setInterval(function() {
//					options.next.trigger("click");
					if(that.LOCAL.iNow == options.imgs.length - 1) {
						that.LOCAL.iNow = 0;
						iPrev = options.imgs.length - 1;
					} else {
						that.LOCAL.iNow++;
						iPrev = that.LOCAL.iNow - 1;
					}
					that.LOCAL.move(iPrev, that.LOCAL.iNow, 1)
					that.hover(function() {
						clearInterval(that.LOCAL.timer);
					}, function() {
						clearInterval(that.LOCAL.timer);
						that.LOCAL.timer = setInterval(function() {
//							options.next.trigger("click");
							if(that.LOCAL.iNow == options.imgs.length - 1) {
								that.LOCAL.iNow = 0;
								iPrev = options.imgs.length - 1;
							} else {
								that.LOCAL.iNow++;
								iPrev = that.LOCAL.iNow - 1;
							}
							that.LOCAL.move(iPrev, that.LOCAL.iNow, 1)
						}, 2000)
					})
				}, 2000)
				
				

			}
		}

	})

})(jQuery)