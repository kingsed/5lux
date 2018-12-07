;(function($){
 	$(".list_cata_wrap_item:last").on("mouseenter",function(){
 		var _this = this;
 		$(this).addClass('hover');
 		$(".list_cata_wrap").on("click",function(){
 			return false;
 		})
 		$(document).on("click",function(){
 			$(_this).removeClass('hover');
 			$(document).off("click");
 		})
 	})

 	// 加收藏
 	$(".goods_like>i").on("click",function(){
 		$(this).addClass('like').next().text(function(index,value){
 			return +value+1
 		});
 		$(this).off("click");
 	})
 	// 筛选
 	$(".filter_item").on("click",function(){
 		$(".filter_item").removeClass('active');
 		$(this).addClass('active');
 	})
 	// 分页
 	pages(1,62);
 	$(".pase_content").on("click",".pages_item",function(){
 		if($(this).hasClass('first')){
 			pages(1,62);
 		}else if($(this).hasClass('last')){
 			pages(62,62)
 		}else if($(this).hasClass('prev')){
 			if($(".pages_item").filter(".active").get(0)!=$(".pages_item").eq(2).get(0)){
 				pages(+$(".pages_item").filter(".active").text()-1,62);
 			}
 		}else if($(this).hasClass('next')){
 			if($(".pages_item").filter(".active").get(0)!=$(".pages_item").eq(-3).get(0)){
 				pages(+$(".pages_item").filter(".active").text()+1,62);
 			}
 		}else{
 			pages(+$(this).text(),62);
 		}
 		
 	})
 	
 	function pages(num,pages){
 		var p='<div class=" pages_item first"><a href="javascript:;">首页</a></div><div class="pages_item prev"><a href="javascript:;">前页</a></div><ul class="pages">';
 		if(pages==1){
 			$(".pase_content").hide();
 		}else if(pages>1&&pages<=5){           
              for(var i=1;i<=pages;i++){
              	if(i==num){
              		p+='<li class="pages_item active"><a href="javascript:;">'+num+'</a></li>';  
              	}else{
              		p+='<li class="pages_item"><a href="javascript:;">'+i+'</a></li>';
              	}	
              }  	
 		}else if(pages>5){
 			if(num<=3){
 				for(var i=1;i<5;i++){
 					if(i==num){
 						p+='<li class="pages_item active"><a href="javascript:;">'+num+'</a></li>';  
 					}else{
 						p+='<li class="pages_item"><a href="javascript:;">'+i+'</a></li>';
 					}
 				} 
 				p+=' <li class="more"><span>...</span></li><li class="pages_item"><a href="javascript:;">'+pages+'</a></li> ';           
 			}else if(num>3&&num<=pages-3){
 				p+='<li class="pages_item"><a href="javascript:;">1</a></li><li class="more"><span>...</span></li><li class="pages_item"><a href="javascript:;">'+(num-1)+'</a></li><li class="pages_item active"><a href="javascript:;">'+num+'</a></li><li class="pages_item"><a href="javascript:;">'+(+num+1)+'</a></li><li class="more"><span>...</span></li><li class="pages_item"><a href="javascript:;">'+pages+'</a></li>';
 			}else{
 				p+='<li class="pages_item"><a href="javascript:;">1</a></li><li class="more"><span>...</span></li>';
 				for(var i=3;i>=0;i--){
 					// console.log(pages-i);
 					if(num==pages-i){
 						p+='<li class="pages_item active"><a href="javascript:;">'+num+'</a></li>';
 					}else{
 						p+='<li class="pages_item"><a href="javascript:;">'+(pages-i)+'</a></li>';
 					}
 				}
 			}

 		}
 		p+=' </ul><div class="pages_item next"><a href="javascript:;">下一页</a></div><div class="pages_item last"><a href="javascript:;">末页</a></div>';
        $(".pase_content").html(p)                        
 	}
 }(jQuery))