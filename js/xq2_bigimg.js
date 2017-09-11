;(function ($) {
		var xq2_bigimg=function(xq2_big){
			var self=this;
			this.xq2_big =xq2_big;
			this.width	=xq2_big.width();
			this.height	=xq2_big.height();
			//alert(this.height);
			this.top	=xq2_big.offset().top; 
			this.left	=xq2_big.offset().left;
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
			this.imgsrc	=this.setting.bigImg ? this.setting.bigImg : xq2_big.attr("src");
			this.xq2_big.hover(function(){
									self.createPchild(self.pdiv);
									self.imgsrc	=$(this).attr("src");
									self.createImg();
								},function(){
									var pdiv="#"+self.pdiv;
									$(pdiv).remove();
								});
			// this.xq2_big.mousemove(function(e){
			// 	var scrollTop=$(document).scrollTop();
			// 	var scaleX=(e.offsetX)/self.width;
			
			// 	//处于左边部分的距离
				

			// 	var scaleY=(e.offsetY)/self.height;//处于顶部部分的距离
			// 	self.updImg(scaleX,scaleY);
			// });
//addEventListener
// event.touches[0].clientX +"," + event.touches[0].clientY
			this.xq2_big[0].addEventListener('touchmove',function(e){
			e.preventDefault();
			var ofsetX=e.offsetX||e.touches[0].pageX-e.target.x;
			var ofsetY=e.offsetX||e.touches[0].pageY-e.target.y;

// 			console.log(" ofsetX : "+ofsetX+"+ofsetY :"+ofsetY);
// console.log("pageX : "+e.touches[0].pageX +" pageY :"+e.touches[0].pageY+" tagX : "+e.target.x+" tagY :"+e.target.y);
			// self.updImg(ofsetX,ofsetY);()
		
				var scrollTop=$(document).scrollTop();
				var scaleX=(ofsetX)/self.width;
			
				//处于左边部分的距离
				

				var scaleY=(ofsetY)/self.height;//处于顶部部分的距离
				self.updImg(scaleX,scaleY);

		});
		}
		
		/*
					'z-index':this.setting.zindex,
					'position':'fixed',
					'top':this.top+this.setting.margin_top-scrollTop,
					'left':this.left+this.width+this.setting.margin_left,
					'overflow':'hidden'
'width':this.width*this.setting.scale,
					'height':this.height*this.setting.scale,
					*/
		xq2_bigimg.prototype={
			createPchild:function(id){
				var ele=document.createElement("div");
				var img=document.createElement("img");
				var scrollTop=$(document).scrollTop();
				$("#xianshi2").append($(ele));
				$(ele).attr({'id':id}).css({
					'width':this.setting.pwidth+"px",
					'height':this.setting.pheight+"px"
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
				var setting=this.xq2_big.attr("setting");//节点属性配置参数
				if (setting && setting!="") {
					return $.parseJSON(setting);
				}else{
					return {};
				}
			}
		};
		xq2_bigimg.init=function($ele){
			var _this_=this;
			$ele.each(function(){
				new _this_($(this));
			});
		}
		window['xq2_bigimg']=xq2_bigimg;
	})(jQuery)
	$(function(){
		xq2_bigimg.init($("[xq2_big='true']"));
	});