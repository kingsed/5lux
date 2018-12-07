// 收货信息
; $(function () {
    // 添加地址
    $(".add_btn").on("click", function (e) {
        var parents = $(this).parents(".receive_fill");
        var _name = parents.find(".receiver_name");
        var province = parents.find("[name='receiver_province']");
        var city = parents.find("[name='receiver_city']");
        var address = parents.find(".receiver_address");
        var phone = parents.find(".mobile_phone");
        var _nameCheck = check(_name[0],/^[\u4E00-\u9FA5A-Za-z]+$/,_name.val(),"请输入正确的姓名格式");
        var phoneCheck = check(phone[0],/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[1|2|3|5|6|7|8|9])\d{8}$/,phone.val(),"请输入正确的手机格式");
        var addressCheck = check(address[0],/[^\x00-\xff]|[A-Za-z0-9_]$/,address.val(),"请输入正确的地址格式"); 
        var date = new Date();
        if (_nameCheck && province.val() && city.val() && addressCheck && phoneCheck) {
            $.each($(".address_list a"), function (i, v) {
                $(v).css("opacity", "0");
            })
            var html = '<li>' +
                '<input type="radio" name="addresslist" checked data-s="' + date.getMilliseconds() + '">&nbsp;' +
                '<span>' + province.val() + " " + city.val() + " " + address.val() + " " + _name.val() + ' ( ' + phone.val() + ' 收)</span>' +
                '<a href="javascript:;" style="opacity:1;">编辑</a>' +
                '</li>'
            $(".address_list ul").prepend(html);
            parents.css("display", "none").prev().css("display", "none");
            $(".info_address").data("s", date.getMilliseconds()).html(province.val() + "&nbsp;" + city.val() + "&nbsp;" + address.val() + "&nbsp;" + _name.val() + '(' + phone.val() + '收)').parent().css("display", "block");
            $(this).next().attr("disabled", false);
            $(".form")[0].reset();
        }
        return false;
    })
    // 弹出修改地址的样式
    $(".info_mod").on("click", function () {
        $(this).parent().css("display", "none").next().css("display", "block").children(".save_address").css("display", "block");
    })
    // 选择地址
    $(".address_list").on("click", "input:not(:last-child)", function () {
        $.each($(".address_list a"), function (i, v) {
            $(v).css("opacity", "0");
        })
        $(this).next().next().css("opacity", "1");
        $(".receive_fill").css("display","none");
        $(".save_address").css("display","block");
    })
    // 新增地址
    $(".address_inp").on("click", function () {
        $(".receive_fill").css("display", "block");
        $(".save_address").css("display", "none");
    })
    // 取消
    function cancel() {
        $(".receive_info").css("display", "block").next().css("display", "none").next().css("display", "none").next().css("display","none");
    }
    $(".cancel_btn").on("click", function () {
        cancel();
        return false;
    })
    // 保存
    $(".pres_btn").on("click", function () {
        $.each($(".address_list input:not(:last-child)"), function (i, v) {
            if ($(v).prop("checked")) {
                $(".info_address").text($(v).next().text());
                cancel();
            }
        })
    })
    // 编辑
    var _this = "";
    var $inp = $(".receive_mod");
    $(".address_list").on("click", "a", function () {
        _this = this;
        var arr = $(this).prev().text().split(" ");
        arr.splice(4,1);
        $inp.find(".receiver_name").val(arr[3]);
        $inp.find(".prov").val(arr[0]);
        $inp.find(".cty").val(arr[1]);
        $inp.find(".receiver_address").val(arr[2]);
        $inp.find(".mobile_phone").val(arr[4]);
        $(".receive_info").css("display", "none").next().css("display", "none").next().css("display","none").next().css("display", "block");
    })
    // 修改
    $.each($($inp.find("select")),function(i,v){
        $(v).on("click",function(){
            $(this).prev().val($(this).val());
        })
    })
    $(".add_btns").on("click",function(e){
        var prov = $inp.find(".prov"),
            cty = $inp.find(".cty"),
            address = $inp.find(".receiver_address"),
            _name = $inp.find(".receiver_name"),
            phone = $inp.find(".mobile_phone");
        var addressCheck = check(address[0],/[^\x00-\xff]|[A-Za-z0-9_]$/,address.val(),"请输入正确的地址格式");
        var _nameCheck = check(_name[0],/^[\u4E00-\u9FA5A-Za-z]+$/,_name.val(),"请输入正确的姓名格式");
        var phoneCheck = check(phone[0],/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[1|2|3|5|6|7|8|9])\d{8}$/,phone.val(),"请输入正确的手机格式");
        if(prov.val() && cty.val() && addressCheck && _nameCheck && phoneCheck){
            $(_this).prev().text(prov.val()+" "+cty.val()+" "+address.val()+" "+_name.val()+" ( "+phone.val()+" 收)");
            $(".info_address").text(prov.val()+" "+cty.val()+" "+address.val()+" "+_name.val()+"("+phone.val()+"收)");
            cancel();
        }
        return false;
    })
    // 正则封装
    function check(obj,reg,value,msg){
        if(!value.match(reg)){
            i(obj,msg);
            return false;
        }else{
            return true;
        }
    }
    function i(obj,msg){
        if(obj.nextSibling.nodeName == "I"){
            obj.nextSibling.remove();
        }
        var i = document.createElement("i");
        i.innerText = msg;
        obj.parentNode.insertBefore(i,obj.nextSibling);
    }
})
//支付信息
; $(function () {
    // 打开选择支付方式
    $(".payment_up_right").on("click", function () {
        $(this).parents(".payment").css("display", "none").next().css("display", "block");
    })
    // 分期
    $(".chanel").on("click", "input", function () {
        $(this).parents(".chanel").next().css("display", "none").next().css("display", "none");
        $("." + $(this).data("msg")).css("display", "block");
    })
    // 汇账、转账
    $(".payment_banktran input").on("click", function (e) {
        var _this = this;
        $(_this).parent().next().css("display", "block");
        $(document).on("click", function () {
            console.log(1)
            $(_this).parent().next().css("display", "none");
            $(document).off("click");
        })
        e.stopPropagation();
    })
    // 取消
    function censel() {
        $(".payment").css("display", "block").next().css("display", "none");
    }
    $(".btn_gray").on("click", function () {
        censel();
    })
    // 保存
    $(".btn_red").on("click", function () {
        $.each($(".bank_greyback input[name='pay_chanel']"), function (i, v) {
            if ($(v).prop("checked")) {
                $(".payment_up_left img").attr("src", $(v).next().attr("src"));
                censel();
                return;
            }
        })
    })
})
// 专柜自取
; $(function () {
    // 切换
    $(".get_way").on("click", "li", function () {
        $.each($(".get_way li"), function (i, v) {
            $(v).removeClass("active");
        })
        $(this).addClass("active");
        if ($(this)[0] == $(".get_way li:last")[0]) {
            $(this).parent().next().css("display", "block");
        } else {
            $(this).parent().next().css("display", "none");
        }
    })
    // 地址选择框
    $(".update").on("click", function () {
        $(".bg_box").fadeIn();
    })
    $(".pw_head i").on("click", function () {
        $(".bg_box").fadeOut();
    })
})
// 运送方式
; $(function () {
    // 优惠劵
    $("[name='coupon']").on("click", function () {
        var total = $(".small_scale").text() - $(this).val();
        $(".lose_price").text($(this).val()).parents(".coupon_price").css("display", $(this).val()?"block":"none").next().next().find(".lose_red").text(total);
        $(".cart_order_amount").text("￥"+total);
    })
    // 余额支付{
    $(".wap_head_new").on("click",function(){
        $(this).text("-").parent().next().css("display","block");
    })
    // 取消
    $(".surplus_graybtn").on("click",function(){
        $(this).parents(".surplus_input_box").css("display","none").prev().children(".wap_head_new").text("+");
        return false;
    })
    // 确定
    $(".surplus_redbtn").on("click",function(){
        var price = $(".surplus_s [type='numble']").val();
        var pass = $(".surplus_s [type='password']").val();
        var promp = $(".prompting");
        var balance = $(".is_not_set i").text();
        if(price && pass){
            if(price<=balance){
                $(this).parents(".surplus_input_box").css("display","none").prev().children(".wap_head_new").text("+");
                promp.text("");
                $(".sur")[0].reset();            
            }else{
                promp.text("您的余额不足");
            }
        }else{
            promp.text("请输入支付金额和支付密码");
        }
        return false;
    })
})
// 提交订单
; $(function () {
    // 出现、隐藏
    $(".wap_head_s span").on("click", function () {
        if ($(this).text() == "+") {
            $(this).text("-").parent().next().next().css("display", "block");
        } else {
            $(this).text("+").parent().next().next().css("display", "none");
        }
    })
    // input选择
    $("[name='invoice_head']").on("click", function () {
        var $dis = $("[name='invoice_head']:last").prop("checked") ? "block" : "none";
        $(".input-medium").css("display", $dis);
        $(".input-medium input").val("");
    })
    // 确定
    $(".data_btn").on("click", function () {
        if($("[name='invoice_head']:last").prop("checked") && !$(".input-medium input").val()){
            alert("请填写您的发票抬头，和公司名称");
            return;
        }
        var invoice_head = $(".input-medium input").val() ? $(".input-medium input").val() : "个人";
        var invoice_content = $("[name='invoice_content']").val();
        $(".inf_rise").text(invoice_head).next().next().text(invoice_content).parent().css("display", "block");
        kuan();
    })
    // 取消
    function kuan() {
        $(".wap_head_s span").text("+").parent().next().next().css("display", "none");
    }
    $(".cel_btn").on("click", function () {
        kuan();
        $(".cart_inf").css("display", "none");
    })
})
