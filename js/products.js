$('.country_name ul').on('mouseenter','li',function(){
    $(this).addClass('active').siblings().removeClass('active');
    // $('li').removeClass('active').eq($(this).index()).addClass('active');
    $('.country_wrap .country-global').removeClass('active').eq($(this).index()).addClass('active');
})