;(function ($) {
		var xq_bigimg=function(xq_big){
			var self=this;
			var Pchiid;
			this.xq_big =xq_big;
			this.width	=xq_big.width();
			this.height	=xq_big.height();
			//alert(this.height);
			this.top	=xq_big.offset().top; 
			this.left	=xq_big.offset().left;
			this.pdiv	=Math.floor(Math.random()*this.width*this.height);
			this.setting={
				"pwidth"	: 	300,
				"pheight"	: 	200,
				"scale"		: 	3,
				"margin_top"	: 50,
				"margin_left" 	: 50,
				"pclass"		: ""
			}
			$.extend(this.setting,this.getSetting());
			this.imgsrc	=this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
			this.xq_big.hover(function(){
									self.createPchild(self.pdiv);
									// Pchiid = self.pdiv;
									self.imgsrc	=$(this).attr("src");
									self.createImg();
								},function(){
									var pdiv="#"+self.pdiv;
									$(pdiv).remove();
								});
			// this.xq_big.mousemove(function(e){
				var scrollTop=$(document).scrollTop();
			this.xq_big[0].addEventListener('touchmove',function(e){
			e.preventDefault();
			var ofsetX=Number(e.touches[0].pageX-e.target.x);
			var ofsetY=Number(e.touches[0].pageY-e.target.y);
			// console.log("pageX : "+e.touches[0].pageX +" pageY :"+e.touches[0].pageY+" tagX : "+e.target.x+" tagY :"+e.target.y);
			
				var scaleX=ofsetX/self.width;
				console.log(self.width);
				//处于左边部分的距离
				

				var scaleY=ofsetY/self.height;//处于顶部部分的距离

				self.updImg(scaleX,scaleY);
				
			});
		}
		
					
					
		xq_bigimg.prototype={
			createPchild:function(id){
				var ele=document.createElement("div");
				var img=document.createElement("img");
				var scrollTop=$(document).scrollTop();
				
				$("#xianshi").append($(ele));
				$(ele).attr({'id':id}).css({
					'width':this.setting.pwidth+"px",
					'height':this.setting.pheight+"px",
					// 'position':'absolute',
					// 'z-index':this.setting.zindex,
				
					// 'top': -(scaleY *this.height*this.setting.scale ),
					// 'left':-(scaleX*this.width - 1/this.setting.scale*this.width),

					// 'overflow':'hidden',
					// 'width':this.width*this.setting.scale,
					// 'height':this.height*this.setting.scale
				}).addClass(this.setting.pclass);

			},
			createImg:function(){
				var img=document.createElement("img");
				$(img).attr("src",this.imgsrc).css({
					
					'margin-top':'0px',
					'margin-left':'0px',
					'position':'absolute'
				});
				var pdiv="#"+this.pdiv;
				$(pdiv).append($(img));
			},
			updImg:function(scaleX,scaleY){
			//	var top=(scaleY*this.height*this.setting.scale)-(scaleY*this.setting.pheight);
			//	var left=(scaleX*this.width*this.setting.scale)-(scaleX*this.setting.pwidth);
				// var top=(scaleY*this.height*this.setting.scale)-(scaleY*this.setting.pheight);
				// var left=(scaleX*this.width*this.setting.scale)-(scaleX*this.setting.pwidth);
				
				
				var _width = this.width * this.setting.scale;
				// console.log("w:"+this.width + "Sca:" + this.setting.scale + "_width::"+_width);
				var top = -((scaleY *this.height ) * 3);
				var left = -((scaleX*_width - 1/this.setting.scale*this.width) * 1.05);
				// console.log(" x : "+scaleX+" y: "+scaleY+" top : "+top+"  left : "+left+"  width : "+this.width);
				var pdiv="#"+this.pdiv;
					$(pdiv).find("img").css({'top':top+"px",'width':_width + 'px'});
					$(pdiv).find("img").css({'left':left+"px"});
			},
			getSetting:function(){
				var setting=this.xq_big.attr("setting");//节点属性配置参数
				if (setting && setting!="") {
					return $.parseJSON(setting);
				}else{
					return {};
				}
			}
		};
		xq_bigimg.init=function($ele){
			var _this_=this;
			$ele.each(function(){
				new _this_($(this));
			});
		}
		window['xq_bigimg']=xq_bigimg;
	})(jQuery)
	$(function(){
		xq_bigimg.init($("[xq_big='true']"));
	});