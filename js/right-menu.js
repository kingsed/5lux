// 购物商店
$(function(){
	var bb="obj";
	$(".menu_block3>li").not(".menu_kefu").on("click",function(){
		$("."+bb).css({display:"none"});
		// 判断cookie
		if( this.className=="menu_zidan" && !$.cookie("username")){
				$(".right_menu").removeClass("right_menu_active");
				$(".bg").fadeIn(function(){
					$(".login_block").addClass('login_block_active');
				});
		}else{
			// 打开侧栏
			$("."+$(this).data("name")).css({display:"block"});
			$(".right_menu").addClass("right_menu_active");
			if($(this).data("name")==bb){
				$(".right_menu").removeClass("right_menu_active");
				bb="obj";
			}else{
				bb=$(this).data("name");
			}
		}
	})
	$(".active_title>i").on("click",function(){
		$(".right_menu").removeClass("right_menu_active");
		bb="obj";
	})

})
// 换背景
$(function(){
	var _this=".logo_cart";
	var content='#333 url(../img/new/share02.png) -88px -156px no-repeat';
	$(".menu_nav a").not(".logo_backtop").on("click",function(){
		if(_this==this)return;
		$(_this).css({background:content});
		_this=this;
		var valu=$(this).css("background");
		$(this).on("mouseleave",function(){
			$(this).off("mouseleave");
			$(this).css("background",function(index,con){
				content=con;
				return valu;
			})
		})
	})
})

// 注册关闭
$(function(){
	$(".login_title .close").on("click",function(){
		$(".login_block").removeClass('login_block_active');
		$(".bg").fadeOut();
		$(".login_box>input").val("");
	});
	$(".login_box .btn").on("click",function(){
		var username = $(".login_box .username").val("");
		// var password = $(".login_box .password").val("");
		$.cookie("username",username);
		$(".login_title .close").trigger("click");
	});
})

// 聊天室
$(function(){
	// 打开聊天框
	
	$(".menu_kefu,.chat_down").on("click",function(){
		if($(window).height()>520){
			$(".chat").fadeIn();
			$(".chat_down").hide();
		}else{
			$(".chat_down").show()
		}
	});
	// 最小化
	$(".chat_header_fr>.down").on("click",function(){
		$(".chat").animate({
			width:0,
			height:0},function(){
				$(this).css({
					width: "413px",
					height:"auto",	
					display:"none",
				});
				$(".chat_down").show();
			})
	})
	
});

// 表情包
$(function(){
	$(".chat_tool>li").first().on("click",function(){
		$(".look").toggle()
	})
	$(".look_item").on("click",function(){
		$(".look_item").removeClass('active')
		$(this).addClass('active');
	})
	$(".look_box").on("click","img",function(){
		$(".me_say").append('<img src="'+$(this).attr("src")+'"/>');
	})
});


// 发送
$(function(){
	$(".send_tip").on("click",function(){
		$(".send_tip>ul").toggle();
	})
	$(".send_tip li").on("click",function(){
		$(".send_active").removeClass('send_active');
		$(this).addClass('send_active');
	})
	$(".send>button").on("click",function(){
		$(".look").hide();
		if($(".me_say").html().trim()){
			var data= new Date()
			$(".chat_body_contain").append('<li>'+
				'<div class="chat_me clearfix">'+
						'<i></i>'+
						'<p>'+$(".me_say").html().replace(/<.{0,1}div>/g,"")+'</p>'+
				'</div>'+
				'<p class="time me_time">'+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()+'</p>'+
			'</li>');
			$(".me_say").empty();
			var show =$(".chat_body")[0];
			show.scrollTop = show.scrollHeight - show.clientHeight;
		}
	})
	// 选择发送方式
	$(".send_tip>ul").on("click","li",function(){
		$(".send_active").removeClass('send_active');
		$(this).addClass('send_active');
	});
	// 获取发送方式并发送
	$(".me_say").on("keyup",function(e){
		var keycode =e.keyCode;
		var code;
		if($(".send_tip li").first().hasClass('send_active')){
			if(keycode==13||keycode==108){
				code=true;
			}else{
				code=false;
			}
		}else{
			console.log(e.ctrlKey)
			if((keycode==13&&e.ctrlKey)||(keycode==108&&e.ctrlKey)){
				code=true

			}else{
				code=false;
			}
		}
		if(code){
			$(".send>button").trigger("click");
		}
	})
	// 获取焦点
	$(".me_say").on("focus",function(){
		$(".look").hide();
	})

})

	// 移动窗口
$(function(){
	var right,bottom ,x,y,WIDTH,HEIGHT,H;
	$(".chat").on("mousedown",function(e){
		bottom=parseInt($(".chat").css("bottom"));
		right=parseInt($(".chat").css("right"));
		 WIDTH=$(window).width();
		 HEIGHT=$(window).height();
		 
		 x= WIDTH-e.clientX-right;
		 y= HEIGHT-e.clientY-bottom;
		 H=parseInt($(".chat").css("height"));	
		$(document).on("mousemove",function(e){
			 right = WIDTH-e.clientX-x;
			 bottom = HEIGHT-e.clientY-y;
			 if(bottom<=0){
			 	bottom=0;
			 }else if(bottom>0&&bottom<= HEIGHT-H-13){
			 	bottom = HEIGHT-e.clientY-y;
			 }else{
			 	bottom= HEIGHT-H-13;
			 }
			 if(right<=0){
			 	right=5;
			 }else if(right>0&&right<= WIDTH-418){
			 	 right = WIDTH-e.clientX-x;
			 }else{
			 	right= WIDTH-418;
			 }
			$(".chat").css({right:right,bottom:bottom});
			return false;
		})
		$(document).on("mouseup",function(){
			$(this).off("mousemove");
			$(this).off("mousemup");
		})
	})

});
	// 全屏
$(function(){
	var count=false;
	var bodyH;
	var B;
	$(".full").on("click",function(){
		if(!count){
			$(".chat").css("bottom",function(index,val){
				B=val;
				return 0;
			})
			bodyH=$(window).height()-220;
			$(".chat_body").css({height:bodyH});
			count=true;
		}else{
			$(".chat_body").css({height:308});
			$(".chat").css({bottom:B});
			count=false;
		}
	});
	// 改变窗口大小聊天框变化
	$(window).resize(function(){
		if(count){
			bodyH=$(window).height()-220;
			$(".chat_body").css({height:bodyH});
		}else{
			if($(".chat").get(0).offsetTop<12){
				$(".chat").css({bottom:0});
			}
		}
		// 当屏幕小于最小高度最小化 
		if($(".chat").css("display")=="block"){
			if($(window).height()<520){
				$(".chat_header_fr>.down"). trigger('click');
			}
		}
	
	})
	// 关闭聊天框
	$(".chat_header_fr>.close,.send>a").on("click",function(){
		$(".chat").fadeOut(function(){
			$(".chat_body").css({height:308});
			count=false;
			$(this).css({right:37,bottom:0});
			$(".me_say").empty();
			$(".look").hide();
			$(".chat_body_contain").empty();
		})
	});
});


// 反馈
$(function(){
	// 打开反馈
	$(".menu_fankui").on("click",function(){
		$(".bg").fadeIn(function(){
			$(".feeback").fadeIn();
		})
	});
	// 关闭反馈
	$(".feeback_nav>img,.feeback_foot>button").on("click",function(){
		$(".feeback").fadeOut(function(){
			$(".bg").fadeOut()
		});
	})
});
// 回到顶部
$(function(){
	$(".logo_backtop").on("click",function(){
		$(document).scrollTop(0);
	})
});
