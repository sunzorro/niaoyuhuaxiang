new function (){
	//alert(123);
   var _self = this;
   _self.width = 640;
   _self.fontSize = 100;
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
   }
   _self.changePage();
   window.addEventListener('resize',function(){_self.changePage();},false);
	$(window).on("orientationchange",function(event){
   		//alert("方向变了");
    		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
  	});
};



// loading 加载进度百分比
$(document).ready(function() {

    for (var e = document.querySelectorAll("img"), t = [], o = 0; o < e.length; o++) t.push(e[o].src);
    new preLoader(t, {
        onProgress: function(t, o, n) {
            var a = (100 / e.length * .01 * n * 100).toFixed(0);
            $("#loadPer").html(a)
        },
        onComplete: function() {
            $("#loading").hide();
            $('.shou_t').addClass('open');
        },
    });


//百花争艳点击背景，手势隐藏
$('.back_opacty').click(function(event) {
   $('.dis_hid').css('display','none')
});
$('.back_opacty2').click(function(event) {
   $('.dis_hid2').css('display','none')
});
//百花争艳点击按钮1
$("#flower_btn1").click(function(event) {

  $('#case1_detial').fadeIn(500)

});
$("#case1_closed").click(function(event) {
  $('#case1_detial').fadeOut(500)
});

// 百花争艳点击按钮2
$("#flower_btn2").click(function(event) {
  $('#case1_detia2').fadeIn(500);
  $("#xianshi").find("#xsny").css("display","block");
});
$("#case1_detia2").click(function(event) {
   $('#case1_detia2').fadeOut(500);
});
// 百花争艳点击按钮2
$("#flower_btn3").click(function(event) {
   $('#case1_detia3').fadeIn(500);
});
$("#case1_detia3").click(function(event) {
  $('#case1_detia3').fadeOut(500);
    // document.getElementById('player').pause();
    // document.getElementById('player2').pause();
});



//点击细节隐藏图片
$("#enlarge2").click(function(event) {
  $("#xianshi2").find("#xstx").css("display","none");
});
$("#enla").click(function(event) {
  $("#xianshi").find("#xsny").css("display","none");
});
//茶梅迎春点击按钮1
$("#chamei_btn1").click(function(event) {
  $('#case2_detial').fadeIn(500);
  $("#xianshi2").find("#xstx").css("display","block");
});
$("#case2_closed").click(function(event) {
  $('#case2_detial').fadeOut(500);
});

// 茶梅迎春 点击按钮2
$("#chamei_btn2").click(function(event) {
   $('#case2_detia2').fadeIn(500);
});
$("#case2_detia2").click(function(event) {
   $('#case2_detia2').fadeOut(500);
});
// 茶梅迎春 点击按钮3
$("#chamei_btn3").click(function(event) {
  $('#case2_detia3').fadeIn(500);
});
$("#case2_detia3").click(function(event) {
  $('#case2_detia3').fadeOut(500);
  // document.getElementById('player3').pause();
  // document.getElementById('player4').pause();
});

// 页面切换
// 首页点击

$(".nav_btn1").click(function(event) {
  $("#shou_menu").css('display','none');
  $(".shou_t").css("display","none");
  $("#dsjz").css("display","block");
});
$(".nav_btn2").click(function(event) {
  $("#flower_case").css("display","none");
  $("#shou_menu").css('display','none');
  $(".shou_t").css("display","none");
  $("#chamei_case").css("display","block");
  // $("#xstx").fadeOut(5000);
});

$(".nav_btn3").click(function(event) {
  $("#shou_menu").css('display','none');
  $(".shou_t").css("display","none");
  $("#gypj").fadeOut(500);
  $("#flower_case").fadeIn(500);
  $("#xsny").css("display","block");
});
$(".nav_btn4").click(function(event) {
   $(".shou_t").fadeOut(500);
   $("#zzgy").fadeIn(500);
});
$(".nav_btn5").click(function(event) {
  $(".shou_t").fadeOut(500);
  $("#zwjb").fadeIn(500);
});


// 点击返回首页
$(".btn_return").click(function(event) {
  $('#flower_case').css('display','none');
  $('#shou_menu').css("display","block");
});
$(".btn2_return").click(function(event) {
  $("#chamei_case").css('display','none');
  $('#shou_menu').css("display","block");
});
$(".btn3_return").click(function(event) {
  $("#dsjz").css('display','none');
  $('#shou_menu').css("display","block");
});
$(".btn4_return").click(function(event) {
  $("#zwjb").css('display','none');
  $('#shou_menu').css("display","block");
  document.getElementById('player5').pause();
});
$(".btn5_return").click(function(event) {
  $("#zzgy").css('display','none');
  $('#shou_menu').css("display","block");
});

// 点击放大
$("#enlarge").click(function(event) {
 $("#zoom_ex3").fadeIn('400');
});
 $("#zoom_ex3").click(function(event) {
  $(this).hide("400");
 });











})









































