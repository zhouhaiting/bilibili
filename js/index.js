 //第一张轮播图
 $('#demo3').slideBox({

                 duration : 0.3,//滚动持续时间，单位：秒
  
                 easing : 'linear',//swing,linear//滚动特效

                 delay : 5,//滚动延迟时间，单位：秒

                 hideClickBar : false,//不自动隐藏点选按键

                 clickBarRadius : 10

});

//右侧的滚动条函数
$(document).scroll(function(){
	// console.log($(this).scrollTop())
	if ($(this).scrollTop()>200) {
		$("#module").css("top",0);
	}
	//直播
	if ($(this).scrollTop()>800 && $(this).scrollTop()<1000) {
		$(".scroll-ul li").eq(0).addClass("cur").siblings().removeClass("cur");
	}
	//动画
	else if ($(this).scrollTop()>1200 && $(this).scrollTop()<1400) {

		$(".scroll-ul li").eq(1).addClass("cur").siblings().removeClass("cur");
	}
	//番剧
	else if ($(this).scrollTop()>1600 && $(this).scrollTop()<2600) {
		$(".scroll-ul li").eq(2).addClass("cur").siblings().removeClass("cur");
	}
	//国创
	else if ($(this).scrollTop()>2500 && $(this).scrollTop()<2900) {
		$(".scroll-ul li").eq(3).addClass("cur").siblings().removeClass("cur");
	}
	//音乐
	else if ($(this).scrollTop()>2800 && $(this).scrollTop()<3300) {
		$(".scroll-ul li").eq(4).addClass("cur").siblings().removeClass("cur");
	}
	//舞蹈 
	else if ($(this).scrollTop()>3200 && $(this).scrollTop()<3618) {
		$(".scroll-ul li").eq(5).addClass("cur").siblings().removeClass("cur");
	}
	if ($(this).scrollTop()<100) {
        $("#module").css("top",232);
        $(".scroll-ul li").removeClass("cur");
	}
	

})

//点击返回顶部事件
$(".return-top").click(returnTop);
function returnTop() {
    	//scrollBy 是滚动到,后边的两个值是（x,y）,y轴-100的速度，如果-10滚动特别慢
        window.scrollBy(0,-100);
        //如果页面有一定的滚动距离>0
        if(document.body.scrollTop>0) { 
            var sdelay= setTimeout('returnTop()',50);
        }
}
//正在直播右侧的小轮播图(自动轮播函数)
     timer=autoslider();
	function autoslider(){
        var obj=$(".round").find(".active");
		var $k=$(".round span").index(obj);
		//如果小圆点到第5张，那么久返回第一张
		if($k>=$(".round span").length-1){
            $k=0;
        }
        //否则的话进行加1
        else{
            $k=$k+1;
        }

        timer=setTimeout(function(){
            $(".round span").eq($k).trigger("mouseover");
        },3000);
        return timer;
        
    }
      //鼠标移入下方的有序列表变换图片
		$(".round span").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var $k=$(".round span").index(this);
			$(".sma-slide ul li").hide().eq($k).show();
			clearTimeout(timer);
            timer=autoslider();

		})
	
//为你推荐选项卡		
$(".title2 li").click(function () {
	//当我点击每个li 的时候，当前的添加onclassname，其他的兄弟，移除classname
	$(".title2 li").eq($(this).index()).addClass("on").siblings().removeClass("on");
	// $(".three .tv-content").eq($(this).index()).addClass("show").siblings().removeClass("show");
	//同时移动three div，向左-260
	$(".three").css("marginLeft",-260*$(this).index());
})

//动画右侧的悬浮选项卡
$(".an-title li").mouseover(function () {
	//当我点击每个li 的时候，当前的添加onclassname，其他的兄弟，移除classname
	$(".an-title li").eq($(this).index()).addClass("on1").siblings().removeClass("on1");
    $(".two").css("marginLeft",-260*$(this).index());
	
})

//番剧的选项卡

var arr1=["最新","周一","周二","周三","周四","周五","周六","周日"];
var arr2=["最新","一","二","三","四","五","六","日"];
$(".drama-title ul li").click(function () {
	//当我点击每个li 的时候，当前的添加onclassname，其他的兄弟，移除classname
	// console.log($(".drama-title li").eq($(this).index()))
	$(".drama-title ul li").eq($(this).index()).addClass("on2").siblings().removeClass("on2");
	//点击每个li 的时候变化文字
	$(".drama-link").eq($(this).index()).addClass("show").siblings().removeClass("show");

    for (var i = 0; i < $(".drama-title ul li").length; i++) {
		$(".drama-title ul li:eq("+ i +") a").text(arr2[i]);
    }
    $(".drama-title ul li:eq("+ $(this).index() +") a").text(arr1[$(this).index()]);
})

//番剧动态选项卡
$("#news span").click(function () {
	//当我点击每个li 的时候，当前的添加onclassname，其他的兄弟，移除classname
	//console.log($(".tving-title span").eq($(this).index()))
	$("#news span").eq($(this).index()).addClass("on3").siblings().removeClass("on3");
	console.log($(".tving-left .tving-pics"));
	$("#fanju .tving-pics").eq($(this).index()).addClass("show1").siblings().removeClass("show1");
})
