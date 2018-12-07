;(function(){
    //tab切换
    $(".ucenter_guide_title").on('click',function(){
        $(this).next().stop().slideToggle();
        if(!($(this).find("i").hasClass("arrow"))){
            $(this).find("i").addClass("arrow");
        }else if($(this).find("i").hasClass("arrow")){
            $(this).find("i").removeClass("arrow")
        }
    })

    $(".parHd").on("mouseover","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".parBd").children().removeClass("active").eq($(this).index()).addClass("active");
    })

    //轮播
    lilength = $(".tempWrap ul>li").length;//5
    $(".tempWrap ul>li").each(function(i){
        if (lilength>=4) {
            $(".tempWrap ul").append($(this).clone());
        }
    })
    $(".tempWrap ul>li").each(function(i){
        if (i<lilength) {
            $(".tempWrap ul").append($(this).clone());
        }
    })
    
    var value = parseInt($(".tempWrap ul>li").css("width")) + 16;
    $(".tempWrap ul").css({"left":-lilength*value});//left:-955
    //下一页
    $('.next').on('click',function(){
        $(".tempWrap ul").children().eq(0).clone().appendTo($(".tempWrap ul"));
        var cV = -lilength*value + (-value);
        $(".tempWrap ul").animate({left:cV},function(){
            $(".tempWrap ul").children().eq(0).remove();
            $(".tempWrap ul").css("left",-lilength*value)
        });
    })
    //上一页
    var Length = $(".tempWrap ul>li").length;//15
    $('.prev').on('click',function(){
        // console.log($(".tempWrap ul").children().eq(Length-1))
        $(".tempWrap ul").children().eq(Length-1).clone().prependTo($(".tempWrap ul"));//16
        $(".tempWrap ul").css({"left":-(lilength+1)*value});
        $(".tempWrap ul").animate({left:-lilength*value},function(){
            $(".tempWrap ul").children().eq(Length).remove();//15
        });
    })

}())