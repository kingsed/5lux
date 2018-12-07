;(function(){
    $('.log-title').on('click','li',function(){
        $(this).addClass('list-active').siblings().removeClass('list-active');
        var i = $(this).index();
        $('.is-hook').hide().eq(i).show();
    })

    $('.qcode-hook').on('mouseover',function(){
        $('.qc-img').animate({"width":"165px"});
        $('.qc-img').show();
    })
    $('.qcode-hook').on('mouseleave',function(){
        $('.qc-img').animate({"width":0},function(){
            $('.qc-img').hide();
        });    
    })

    //二维码过期
    function error_qcode(text){
        $('.q-faild-mk-tt').html(text);
        $('.is-qcode-con').hide();
        $('#is_qcode_error').show();
    }
    var count = 0;
    var myInterval = function(){
        count++;
        if(count == 180){
            error_qcode("二维码已过期");
            clearInterval(timer);
            count = 0;
        }
    }
    var timer = setInterval(myInterval,1000);
    $('.q-faild-mk').find('a').on("click",function(){
        $('.is-qcode-con').show();
        $('#is_qcode_error').hide();
        timer = setInterval(myInterval,1000);
    })  
    
    //登录
    $('form').validate({
        rules:{
            username:{
                required:true
            },
            password:{
                required:true
            }
        },
        messages:{
            username:{
                required:"请输入用户名"
            },
            password:{
                required:"请输入密码"
            }
        },
        submitHandler:function(f){
            $.ajax({
                url:"../api/login.php",
                type:"POST",
                data:$(f).serialize(),
                success:function(data){
                    if(data.code == 200){
                        alert(data.msg);
                        f.reset();
                    }else if(data.code == 404){
                        alert(data.msg);
                    }
                }
            })
        }
    })
}())