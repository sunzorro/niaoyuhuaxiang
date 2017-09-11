function postcheck(){ 	
	//表单提交验证
	try{
		if (document.form.name.value==""){   //name = "name"
			alert('请填写您的姓名！');
			document.form.name.focus();
			return false;
		}
		var name = /^[\u4e00-\u9fa5]{2,6}$/;  
		if (!name.test(document.form.name.value)){
			alert('姓名格式不正确，请重新填写！');
			document.form.name.focus();
			return false;
		}
    }
    catch(ex){
    }
  	
    try{
    	if(dom.form.mob.value == ""){
    		alert("请填写你的手机号")
    		document.form.mob.focus();
    		return false;
    	}
    	var form = /^1[3,4,5,6,7,8]\d{9}$/; //\d是取0-9的数字，{9}是取9位
    	if(!form.test(dom.form.mob.value)){
    		alert("手机号输入不正确，请重写输入")
    		return false;
    	}
    }
    catch(ex){

    }
    try{
		//验证选择地区，先验证select元素的值，在提交之前将其赋予隐藏域
		if (document.form.province_o.value==""){
			alert('请选择您的所在省份！');
			document.form.province_o.focus();
			return false;
		}
		if (document.form.city_o.value==""){
			alert('请选择您的所在城市！');
			document.form.city_o.focus();
			return false;
		}
		if (document.form.area_o.value==""){
			alert('请选择您的所在地区！');
			document.form.area_o.focus();
			return false;
		}
		if (document.form.address.value==""){
			alert('请填写您的详细地址！');
			document.form.address.focus();
			return false;
		}
		if (document.form.address.value=="请输入收货人的详细地址"){
			alert('请填写您的详细地址！');
			document.form.address.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		
    }
    catch(ex){
    }
	
	//将所选地区写入隐藏域，以备提交
	document.form.province.value = document.form.province_o.value;
	document.form.city.value = document.form.city_o.value;
	document.form.area.value = document.form.area_o.value;
	//将地区选择列表置空
	document.form.province_o.value = "";
	document.form.city_o.value = "";
	document.form.area_o.value = "";
	
	//表单提交
    return true;
}

 //初始化地区选择列表
try{	
	new PCAS("province_o","city_o","area_o");
}
catch(ex){
}

try{
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
}




var intervalId = 0; 
function pricea(){

	var product = document.form.product.alt;   // 获取价格  product name的属性 alt对应的有值
	for(var i=0;i<document.form.product.length;i++){
		if(document.form.product[i].checked==true){
			var product = document.form.product[i].alt;
			break;
		}
	}

	var count = document.form.count.alt;      //选择下拉*套数  count name的属性 alt对应的值
	for(var i=0;i<document.form.count.length;i++){
		if(document.form.count[i].checked==true){
			var count = document.form.count[i].alt;
			break;
		}
	}

    if(document.form.count.value=="" || document.form.count.value==0){	
		var count=1;
	}
	else{
		var count=document.form.count.value;
	}	
	var price=product*count;
    document.getElementById("b1").checked='checked';
	document.form.price.value=price;   // input 的name属性值price的；
	document.form.xgtprice.value=price;  // input 的name属性值xgtprice的；
}



function delayToCount()   //延迟计数
{
	clearInterval(intervalId); //连续按键则清除前一次计时器，最后一次按键后延迟一秒才开始计算
	var seconds = 1;	//需要延迟的秒数
	intervalId = setTimeout("count()",1000*seconds);
}

var llref = '';
if (document.referrer.length > 0){
	llref = document.referrer;
}
try{
	if (llref.length == 0 && opener.location.href.length > 0){
    llref = opener.location.href;
	}
}
catch (e){}

