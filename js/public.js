$(function(){
	//导航背景切换
    $(".menu dl").on("mouseenter mouseleave",function(e) {  
        var w = $(this).width();  
        var h = $(this).height();  
        var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);  
        var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);  
        var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;  
        var eventType = e.type;  
        var aPos=[{left:0,top:-332},{left:332,top:0},{left:0,top:332},{left:-332,top:0}];  
        if(eventType == 'mouseenter'){  
            $(this).find("dt").css(aPos[dirNum]).stop(true,true).animate({left:0,top:0},200);  
        }else{
            $(this).find("dt").stop(true,true).animate(aPos[dirNum],200);
        }
    });
	
	//导航菜单
	
	$(".navBox").hover(function(){
		$(this).find(".navDl").stop().slideDown();
		$(this).find(".navAh").addClass("hover");
	},function(){
		$(this).find(".navDl").stop().slideUp();
		$(this).find(".navAh").removeClass("hover");	
	})
	
	//四大栏目切换
	$(".devHc:first").show();
	$(".devTit a").hover(function(){
		var index=$(this).index();
		$(".devTit .hover").removeClass("hover");
		$(this).addClass("hover");
		$(".devHc").hide();
		$(".devHc").eq(index).show();
		if(index>=2){
			$("body").addClass("body2")
			$(".dev").addClass("devClick");
			$(".devTit").addClass("devTit2");
		}
		else{
			$("body").removeClass("body2")
			$(".devTit2").removeClass("devTit2");
			$(".devClick").removeClass("devClick");
		}
	})














	/*
	$(".devTit a").mouseover(function(){
		index=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".devHc").eq(index).show().siblings().hide();
		if(index>1){
			$("body").addClass("body2");
			$(".dev").addClass("devClick");
			$(".devTit").addClass("devTit2");
		}
		else{
			$(".body2").removeClass("body2");
			$(".devTit2").removeClass("devTit2");
			$(".devClick").removeClass("devClick");
		}
	})
	$(".dev2 .devTit a").mouseover(function(){
		$(".body2").removeClass("body2");
		$(".devTit2").removeClass("devTit2");
		$(".devClick").removeClass("devClick");
	})*/
	
	//四大栏目点击
	$(".devCont dl").click(function(){
		topH=$(".devCont").offset().top;
		$(".devPop1,.devBg").fadeIn();
		$(".devPop1").css({top:topH});
		$("html,body").stop().animate({scrollTop:($(".devCont").offset().top-50)},800)
	})
	// $("body").on("click",".devClick .devCont dl",function(){
	// 	$(".devPop1").hide();
	// 	topH=$(".devCont").offset().top;
	// 	$(".devPop2,.devBg").fadeIn();
	// 	$(".devPop2").css({top:topH});
	// 	$("html,body").stop().animate({scrollTop:($(".devCont").offset().top-50)},800)
	// })
	// $(".devClose").click(function(){
	// 	$(".devPop,.devBg").fadeOut();
	// })
	
	// $(".devTop").click(function(){
	// 	$("html,body").stop().animate({scrollTop:($(".devCont").offset().top-50)},800)
	// })
	
	
})