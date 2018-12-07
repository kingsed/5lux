;(function(){
    $(".guidecenter_title").on('click',function(){
        $(this).next().stop().slideToggle();
        if($(this).find("i").css('width') == "12px"){
            $(this).find("i").css({'background-position':'-464px -325px','width':'6px','height':'12px','margin-top':'16px','margin-right':'18px'})
        }else if($(this).find("i").css('width') == "6px"){
            $(this).find("i").css({'background-position':'-448px -325px','width':'12px','height':'7px','margin-top':'20px','margin-right':'12px'})
        }
    })
}())