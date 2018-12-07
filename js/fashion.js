$(function(){
    var count = 0;
    var t = null;
    $('.next').on('click',a = function(){
        clearTimeout(t);
        var _this = this;
        $(this).off('click');
        count++;
        if(count>7){
            count=0;
        }
        $('.sildes_content').hide().filter('.active').show().removeClass('active').end().eq(count).addClass('active').fadeIn(function(){
            $(_this).on('click',a);
            t = setTimeout(function(){
                $(_this).click();
            },1000)
        });
    })
    $('.prev').on('click',function(){
        clearTimeout(t);
        count--;
        if(count<0){
            count=7;
        }
        $('.sildes_content').hide().filter('.active').show().removeClass('active').end().eq(count).addClass('active').fadeIn(function(){
            t = setTimeout(function(){
                $('.prev').click();
            },1000)
        });
    })
    t = setTimeout(function(){
        $('.next').click();
    },1000)
})