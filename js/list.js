$(function () {
    $("span[data-id]").on('click', function (e) {
        e.stopPropagation();
        var dom = $(this).data('id');
        $("#v30_mask").fadeIn(200, function () {
            $("#" + dom).css("display", "block");
        })
        $(document).on("click", function () {
            $("#" + dom).css("display", "none");
            $("#v30_mask").fadeOut(200)
            $(document).off('click');
        })
        $("#" + dom).on("click", function (e) {
            e.stopPropagation();
        })
    })
    $('.ssbb_head').on("click", "li", function () {
        $('#region_list ul').css('display', 'none').eq($(this).index()).css('display', "block");
        $("#brand_list ul").css('display', "none").eq($(this).index()).css('display', "block");
    })
    $("#region_list").on("click", "a", function () {
        $(".Allcity").text($(this).text());
        $("#sscity_box").fadeOut();
        $("#v30_mask").fadeOut(200);
    })
    $("#brand_list").on("click", "a", function () {
        $(".pver").text($(this).text());
        $("#ssbrand_box").fadeOut();
        $("#v30_mask").fadeOut(200);
    })
})
