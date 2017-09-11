
$(document).ready(function(){

	//划屏
	var startX, startY, moveEndX, moveEndY, X, Y;

	$("#target").on("touchstart", function(e) {
	     startX = e.originalEvent.changedTouches[0].pageX,
	     startY = e.originalEvent.changedTouches[0].pageY;
	});
	$("#target").on("touchmove", function(e) {
	     moveEndX = e.originalEvent.changedTouches[0].pageX,
	     moveEndY = e.originalEvent.changedTouches[0].pageY,
	     X = moveEndX - startX,
	     Y = moveEndY - startY;

		if ( Math.abs(Y) > Math.abs(X) && Y > 0) {

		   // $("#target").hide();
       $("#shou_menu").fadeIn(1000,function(){
        $(this).addClass('open')
       });
        $("#target").addClass('active');
		}
		else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
    		 
       // $("#target").hide();
       $("#shou_menu").fadeIn(1000,function(){
        $(this).addClass('open')
       });
       $("#target").addClass('active');
		}
		   
	});

	$("#gypj").click(function(event) {
		$("#target").fadeOut(1000);
		$("#shou_menu").fadeIn(1000,function(){
		 $(this).addClass('open')
		});
	});
})