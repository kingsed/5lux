//商品结算
;$(function () {
    var $checks = $("[name='checks']");
    var $check = $("[name='check']");

    // 封装一个价格计算函数
    function price() {
        var prices = 0;
        var num = 0;
        $.each($("[name='checks']"), function (i, v) {
            if ($(v).prop("checked")) {
                prices += parseInt($(v).parent().siblings(".subtotal").text());
                num += parseInt($(v).parent().siblings(".num").children("span").text());
            }
        })
        $(".quantity").text("：" + num);
        $(".prices").text("￥" + prices + ".00");
        if (num){
            if(prices<9999){
                var amount = 9999 - prices;
                $(".amount").text("￥" + amount + ".0");
                $(".suspension").css("display", "block");
                $(".header_gift").css("display","none");
                $(".gift").css("display","none");
            }else{
                $(".suspension").css("display", "none");
                $(".header_gift").css("display","block");
                $(".gift").css("display","block");
            }
            $(".clearing").css("backgroundColor", "#d73128");
        } else {
            $(".clearing").css("backgroundColor", "#999").next().css("display", "none");
            $(".header_gift").css("display","none");
            $(".gift").css("display","none");
        }
    }

    // 单选商品
    $.each($checks, function (i, v) {
        $(v).on("click", function () {
            price();
            var e = 0;
            $.each($checks,function(i,v){
                if($(v).prop("checked")){
                    e++;
                }
            })
            $.each($check,function(i,v){
                $(v).prop("checked",$checks.length==e);
            })
        })
    })
    //全选商品
    $.each($check, function (i, v) {
        $(v).on("click", function () {
            var _this = this;
            $.each($(".cart input"), function (i, v) {
                $(v).prop("checked", $(_this).prop("checked"));
            })
            price();  
        })
    })

    // 封装数量加减函数
    function addReduce($this,num,span){
        var price = parseInt($this.parent().prev().text()); 
        span.text(num).parent().siblings(".subtotal").text(price*num);
    }
    // 商品数量加
    $.each($(".num_add"),function(i,v){
        $(v).on("click",function(){
            var num = parseInt($(this).prev().text())+1;
            addReduce($(this),num,$(this).prev());
            price();
        })
    })
    // 商品数量减
    $.each($(".num_reduce"),function(i,v){
        $(v).on("click",function(){
            var num = parseInt($(this).next().text());
            if(num > 1){
                addReduce($(this),num-1,$(this).next());
                price();
            }  
        })
    })

    // 删除
   $.each($(".del"),function(i,v){
       $(v).on("click",function(){
           if(confirm("是，否要执行该操作")){
                $(this).parent().parent().remove();
                price();
           }
           
       })
   })
    // 全部删除
   $(".dels").on("click",function(){
       if(confirm("是，否要执行该操作")){
            $(".merchandise").empty();
            price();
       }
   })
})

// 活动公告弹出框
;$(function(){
    // 弹出
    $(".gift_pop").on("click",function(){
        $(".pop").css("display","block");
    })
    // 关闭
    $(".down").on("click",function(){
        $(this).parents(".pop").css("display","none");
    })
})

