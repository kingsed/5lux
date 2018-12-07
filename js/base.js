//登录状态用户名cookie获取
$(function(doc,win){
    if ($.cookie('id')) {
        $('._top_login').html('<a href="#">' + $.cookie("username") + '</a><b></b>');
        $('._top_reg').html('<span style="display:none;"></span><a href="#" class="fl" style="margin-left:44px">退出</a>')
    }
}(document,window))
// nav导航
$(function () {
    $(".menu li:eq(0)").on("mouseenter", function () {
        // console.log($("._nav_menu"))
        $("._nav_menu").css("display", "block");
        $(".naviwrap").css("display", "block");        
    })
    $(".menu li:eq(0)").on("mouseleave", function () {
        // console.log($("._nav_menu"))
        $("._nav_menu").css("display", "none");
        $(".naviwrap").css("display", "none");        
    })
})
// 购物车
$(function () {
    $("._car_t").on("mouseenter", function () {
        $("._car_b").css("display", "block");
    })
    $("._mid_car").on("mouseleave", function () {
        $("._car_b").css("display", "none");
    })
})