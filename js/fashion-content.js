; (function ($) {
    pages(1, 18);
    $(".pages_des").on("click", ".pages_nums", function () {
        if ($(this).hasClass('first')) {
            pages(1, 18);
        } else if ($(this).hasClass('last')) {
            pages(18, 18)
        } else if ($(this).hasClass('prev')) {
            if ($(".pages_nums").filter(".active").get(0) != $(".pages_nums").eq(2).get(0)) {
                pages(+$(".pages_nums").filter(".active").text() - 1, 18);
            }
        } else if ($(this).hasClass('next')) {
            if ($(".pages_nums").filter(".active").get(0) != $(".pages_nums").eq(-3).get(0)) {
                pages(+$(".pages_nums").filter(".active").text() + 1, 18);
            }
        } else {
            pages(+$(this).text(), 18);
        }

    })

    function pages(num, pages) {
        // 当前页，总页码
        var p = ' <span class="pages_nums first">首页</span><span class="pages_nums prev">前页</span>';
        if (pages == 1) {
            $(".pages_des").hide();
            // 当总页码<5
        } else if (pages > 1 && pages <= 5) {
            for (var i = 1; i <= pages; i++) {
                if (i == num) {
                    p += ' <a href="javascript:;" class="pages_nums active">' + num + '</a>';
                } else {
                    p += ' <a href="javascript:;" class="pages_nums">' + i + '</a>';
                }
            }
            // >4
        } else if (pages > 5) {
            if (num <= 3) {
                for (var i = 1; i < 5; i++) {
                    if (i == num) {
                        p += ' <a href="javascript:;" class="pages_nums active">' + num + '</a>';
                    } else {
                        p += ' <a href="javascript:;" class="pages_nums">' + i + '</a>';
                    }
                }
                p += ' <b>...</b><a href="javascript:;" class="pages_nums">' + pages + '</a> ';
            } else if (num > 3 && num <= pages - 3) {
                p += '<a href="javascript:;"class="pages_nums">1</a><b>...</b><a href="javascript:;" class="pages_nums">' + (num - 1) + '</a><a href="javascript:;" class="pages_nums active" >' + num + '</a><a href="javascript:;"class="pages_nums" >' + (+num + 1) + '</a><b>...</b><a href="javascript:;" class="pages_nums" >' + pages + '</a>';
                //到此
            } else {
                p += '<a href="javascript:;" class="pages_nums">1</a><b>...</b>';
                for (var i = 3; i >= 0; i--) {
                    // console.log(pages-i);
                    if (num == pages - i) {
                        p += '<a href="javascript:;" class="pages_nums active">' + num + '</a>';
                    } else {
                        console.log(pages - i)
                        p += '<a href="javascript:;" class="pages_nums">' + (pages - i) + '</a>';
                    }
                }
            }

        }
        p += '<a href="javascript:;" class="pages_nums next">下页</a><a href="javascript:;" class="pages_nums last">末页</a>';
        $(".pages_des").html(p)
    }
}(jQuery))
