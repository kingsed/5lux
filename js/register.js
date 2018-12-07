; (function () {
    $('#submit').on('focus', '.inp-hook', function () {
        $(this).css("border-color", "black")
    })
    $('#submit').on('blur', '.inp-hook', function () {
        $(this).css("border-color", "#ccc")
    })

    var $phone = $('input[name="mobile_phone"]');
    var reg = /^1(3|4|5|7|8)\d{9}$/;
    $('.require').on('click', function (event) {
        var mobile_phone = $phone.val();
        if (!mobile_phone) {
            borderC($phone);
        } else if (!(reg.test(mobile_phone))) {
            borderC($phone);
        } else {
            $('.is_open').show();
        }
    })
    function borderC(obj) {
        obj.focus().css("border-color", "red");
    }
    $('[name="password"]').on('focus', function () {
        $('.seg-tip').show().next().css('marginTop', '8px');
    })
    $('[name="password"]').on('blur', function () {
        $('.seg-tip').hide().next().css('marginTop', '16px');
        var password = $('[name="password"]').val();
        if (password == "") {
            $(this).css("border-color", "red")
        } else if (password.length < 6 || password.length > 20) {
            $(this).css("border-color", "red")
        }
    })
    $('[name="repassword"]').on('blur', function () {
        var password = $('[name="password"]').val();
        var repassword = $('[name="repassword"]').val();
        if (password != repassword) {
            $('.password_confirm_error').show().find('p').html("两次密码输入不一致");
            $(this).css("border-color", "red")
        }
    })
    //注册表单验证
    $('#submit').on('submit', function () {
        $('.inp-hook').not('.img').each(function () {
            if (!($(this).val())) {
                if ($(this).index() == 0) {
                    $('.error_tip_mobile').show().find('p').html("请输入手机号");
                }
                borderC($(this));
                return false;
            } else if ($(this).val()) {
                var $mobile_phone = $phone.val();
                if (!(reg.test($mobile_phone))) {
                    $('.error_tip_mobile').show().find('p').html("手机号码格式错误");
                    borderC($phone);
                    $('.identify').css('marginTop', '8px')
                }
            }   
        })
        return false;
        if (reg.test($mobile_phone) && $('.inp-hook').val()) {
            var $mobile_phone = $phone.val();
            var $password = $('[name="password"]').val();
            $.ajax({
                url: "../api/register.php",
                type: "POST",
                data: "username=" + $mobile_phone+"password=" + $password,
                success:function(data) {
                    if (data == "注册成功") {
                        alert(data);
                        f.reset();
                    }
                }
            })
        }
    })


}())