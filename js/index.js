
// banner部分轮播
$(function(){
    $(".banner>ul>li").eq(6).addClass("licurrent");
    // 生成指示器
    $(".banner>ul>li").each(function(index){
        if (index >= 4) {
            $(this).css("left",(index-4)*1440+(-2674)+"px");
        }else if (index < 4) {
            $(this).css("left",index*1440+3086+"px");
        }
        // $(this).css("letf",index*1440+(-2674)+"px");
        $li = index==0? '<li class="_ban_dot redbgc"></li>':'<li class="_ban_dot"></li>';
        $(".bannerdot>ul").append($li);
    })
    
    
    var count = 0;
    var x = 0;
    var t = null;
    var i = 0; 
    // 下一页
    $("#_banner_next").on("click",function(){
        clearTimeout(t);//先清除计时器
        var _this = this;
        // $(this).off("click");
        if (count<=6) {
            count++;        
        }else if (count>=7) {
            count = 0;
        }
        // if (x<=6) {
        //     x++;
        // }else if(x>=7){
        //     x = 0;
        // }
        // var x = 0;
        if (count < 2) {
            x = count + 6;
        } else if (count > 1) {
            x = count - 2;
        }
        // console.log(count)
        // console.log(x)
        // x = count+6;
        // console.log($(".banner>ul>li").eq(x))
        $(".banner>ul>li").removeClass("licurrent").eq(x).addClass("licurrent")
        $(".bannerdot>ul>li").removeClass("redbgc").eq(count).addClass("redbgc");   
            
        $(".banner>ul>li").each(function(index){
            i = index-count;
            // console.log(i)
            if (i >= 4) {
                $(this).animate({"left":(i-4)*1440+(-2674)+"px"});
            }else if (i < 4) {
                $(this).animate({"left":i*1440+3086+"px"});
            }
        })
        // $(_this).on("click",a)
        t = setTimeout(function() {
            $(_this).click();
        }, 3000)
    })
    ad = setTimeout(function() {
        $("#_banner_next").click();
    },3000)
    
    // 上一页
    $("#_banner_prev").on("click",function(){
        clearTimeout(t);
        // var _this = this;
        // $(this).off("click");
        if (count>0) {
            count--;        
        }else if (count<=0) {
            count = 7;
        }
        if (x>0) {
            x--;
        }else if(x<=0){
            x = 7;
        }
        // console.log(x)
        // x = count+6;
        // console.log($(".banner>ul>li").eq(x))
        $(".banner>ul>li").removeClass("licurrent").eq(x).addClass("licurrent")
        $(".bannerdot>ul>li").removeClass("redbgc").eq(count).addClass("redbgc");   
        var i = 0;     
        $(".banner>ul>li").each(function(index){
            i = index-count;
            // console.log(i)
            if (i >= 4) {
                $(this).animate({"left":(i-4)*1440+(-2674)+"px"});
            }else if (i < 4) {
                $(this).animate({"left":i*1440+3086+"px"});
            }
        })
        t = setTimeout(function() {
            $("#_banner_next").click();
        }, 3000)
    })
    
    // 指示器事件绑定
    $(".bannerdot>ul>li").on("mouseenter",function(){
        clearTimeout(ad);
        clearTimeout(t);
        count = $(this).index();
        $(".bannerdot>ul>li").removeClass("redbgc").eq(count).addClass("redbgc");           
        if (count <= 6) {
            count++;
        } else if (count >= 7) {
            count = 0;
        }
        // console.log(_index)
        if (count<3) {
            x = count + 5;
        }else if(count>2){
            x = count-3;
        }
        // console.log(n)
        // var i = 0;
        $(".banner>ul>li").removeClass("licurrent").eq(x).addClass("licurrent");
        $(".banner>ul>li").each(function(index){
            i = index-count+1;
            // console.log(index)
            // console.log(i)
            if (i >= 4) {
                $(this).css("left",(i+1-4)*1440+(-2674)+"px").animate({"left":(i-4)*1440+(-2674)+"px"});
            }else if (i < 4) {
                $(this).css("left",(i+1)*1440+3086+"px").animate({"left":i*1440+3086+"px"});
            }
        })
        count--;
        t = setTimeout(function () {
            $("#_banner_next").click();
        }, 3000)

    })

})

// 品牌旗舰--热门旗舰店
$(function(){
    var lilength = parseInt($("._brand_store>ul>li").css("width"));

    $("._brand_store>ul").css("width",$("._brand_store>ul>li").length*lilength+"px");
    $("._title_btn ._btn_pre").click(function(){
        if (parseInt($("._brand_store>ul").css("left"))>=0) {
            return false;
        }
        $("._brand_store>ul").animate({"left":parseInt($("._brand_store>ul").css("left"))+lilength+"px"});
    })
    $("._title_btn ._btn_next").click(function(){
        if (parseInt($("._brand_store>ul").css("left"))<=($("._brand_store>ul>li").length-1)*-lilength) {
            return false;
        }
        $("._brand_store>ul").animate({"left":parseInt($("._brand_store>ul").css("left"))-lilength+"px"});
    })
})
// 商场同款    
$(function(){
    $(".hot>ul li").mouseover(function(){
        $(".hot>ul li").each(function(){
            $(this).css("background-Color","#999");
        })
        $(this).css("background-color","#000");
        $(".hot ._hot_con>ul").stop().animate({
            "left":$(this).index()*1210*-1
        })
    })
})
// shopping购物中心
$(function(){
    var lilength = parseInt($("._brd_con ul li").css("width"));

    //克隆节点
    $("._brd_con ul li:first-child").each(function(){
        $(this).parent().append($(this).clone())
    })
    // $("._brd_con ul").append($("._brd_con ul li:first-child").clone());
    var lilist = $("._brd_con ul").eq(0).children().length;
    
    $("._brd_con ul").css("width", lilist*lilength+"px");
    $("._brd_con ul").css("left",-lilength);
    
    var i = 0; 
    //下一页
    $("._brd_con_pager a:last-child").click(function(){
        if (i<2) {
            i++;
        }else if (i = 2) {
            $(this).parents("._good_brd").children("._brd_con").children("ul").css("left",0);
            i = 0;
        }
        // console.log(i)
        // console.log($(this).parents("._brd_icon").children().eq(0).children())
        $(this).parents("._brd_icon").children().eq(0).children().removeClass("b28").eq(i).addClass("b28")
        // $(this).parents("._brd_icon").children().eq(0).children().eq(i).addClass("b28")        
        $(this).parents("._good_brd").children("._brd_con").children("ul").animate({"left":(i+1)*-lilength+"px"});        
        
    })
    //上一页
    $("._brd_con_pager a:first-child").click(function(){
        if (i>=0) {
            i--;
        }else if(i = -1){
            $(this).parents("._good_brd").children("._brd_con").children("ul").css("left", (lilist-1)*-lilength);
            i = 1;
        }
        // console.log(i)
        // console.log($("._brd_con ul").css("left"));
        $(this).parents("._good_brd").children("._brd_con").children("ul").animate({"left":(i+1)*-lilength+"px"}); 

        
    })
    //指示器绑定事件
    $("._brd_icon_i ._icon_item:first-child").addClass("b28");
    
    $("._icon_item").on("click",function(){
        // console.log($(this).parent().children())
        $(this).parent().children(".b28")[0].classList.remove("b28");
        i = $(this).index();
        // console.log($(this))
        this.classList.add("b28");
        $(this).parents("._good_brd").children("._brd_con").children("ul").animate({"left":(i+1)*-lilength+"px"});

    })
})
// 主题活动
$(function(){
    $("._c3_l ._smallpic").on("mouseenter",function(){
        var index = $(this).index();
        var i = index+1;
        $("._c3_r img").attr("src","../img/index/po_"+i+"bank.jpg")
    })
    
})