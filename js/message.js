(function () {
    // 点击变换图片
    var imgleft = document.getElementById('imgleft');
    var slider = document.getElementById('imgs');
    var img = slider.getElementsByTagName('img');
    slider.onclick = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "IMG") {
            // console.log(target.src)
            imgleft.src = target.src;
        }
    }
    // 放大镜
    var zoom = document.getElementById('zoom');
    var show = document.getElementById('show');
    var large = document.getElementById('big-big');
    var largeImg = document.getElementById('large');
    $('#show').on('mouseenter', function () {
        $('#zoom').css('display', 'block');
        $('#big-big').css('display', 'block');
    })
    $('#show').on('mouseleave', function () {
        $('#zoom').css('display', 'none');
        $('#big-big').css('display', 'none');
    })
    $('#show').on('mousemove', function (e) {
        var e = e || window.event;
        var conleft = parseInt($('.gdetail_con').css('marginLeft'));
        var boxleft = parseInt($('#imgleft').css('marginLeft'));
        var zoomleft = zoom.offsetWidth / 2;
        var zoomtop = zoom.offsetHeight / 2;
        var contop = $('.head').height();
        // console.log(contop)      
        var boxtop = parseInt($('.gdetail_con').css('paddingTop'));
        // console.log(boxtop)      

        var x = e.clientX - conleft - zoomleft;
        var y = e.clientY - contop - boxtop - zoomtop;
        // console.log(y)
        var img_x = x / 280 * 478;
        var img_y = y / 478 * 800;
        // zoom.style.left = x+"px";
        zoom.style.top = y + "px";
        //  largeImg.style.left = -img_x+"px";
        largeImg.style.top = -img_y + "px";
        var _x = x + boxleft;
        // console.log(img_x);
        if (x < 0) {
            //  console.log(x);
            zoom.style.left = boxleft + "px";
            largeImg.style.left = 0;
        } else if (x > 108) {
            zoom.style.left = 108 + boxleft + "px";
            largeImg.style.left = -184 + "px";
        } else {
            // console.log(x);
            zoom.style.left = _x + "px";
            largeImg.style.left = -img_x + "px";
            // console.log(largeImg.style.left)
        }
        // console.log(y)
        // console.log(largeImg.style.top)
        if (y < 0) {
            zoom.style.top = 0;
            largeImg.style.top = 0;
        } else if (y > 186) {
            zoom.style.top = 186 + "px";
            largeImg.style.top = -311 + "px";
        } else {
            zoom.style.top = y + "px";
            largeImg.style.top = -img_y + "px";
        }
    })
    // 小图的轮播
    var ul_img = document.getElementsByClassName('_wrap')[0];
    var li_img = document.getElementsByClassName('gimg_wrap');
    var IMG_WIDTH = parseInt(getStyle(li_img[0]).width);
    var IMG_LENGTH = li_img.length;
    // 动态设置ul的宽度
    ul_img.style.width = IMG_WIDTH * IMG_LENGTH + 30 + "px";
    var item = 0;
    $('#wrap-next').on('click', function () {
        item++;
        animate(ul_img, -item * IMG_WIDTH)
        // ul_img.style.left = -item * IMG_WIDTH + "px";
        // console.log(ul_img.style.left)
    })
    $('#wrap-prev').on('click', function () {
        // console.log(item)
        if(item == 0){
            ul_img.style.left = 0 +"px";
        }else{
            item--;
            animate(ul_img, -item * IMG_WIDTH)
            // ul_img.style.left = -item * IMG_WIDTH / 2 + "px";
        }
        // console.log(ul_img.style.left)
    })
    // 加购
    var x = 1;
    $('.btn-ntext').on('click', function () {
        x++;
        $('.gd_dd_content').val(x);
    })
    $('.btn-reduce').on('click', function () {
        x--;
        if (x < 2) {
            x = 1;
        }
        $('.gd_dd_content').val(x);
    })
    // tab切换
    var $height = $('.head').height() + $('.gdetail_con').height();
    $('#TAB').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.hot-productes-all .hot-productes').removeClass('active').eq($(this).index()).addClass('active');
        $(window).scrollTop(function () {
            var $scrollTop = $height;
            return $scrollTop;
        })
    })
    // 全屏
    $('[data-pop]').on('click', function () {
        $('#' + $(this).data('pop')).fadeIn(300, function () {

        })
    })
    $('.mark-close').on('click', function () {
        $($(this).parents('.new_goodsmark')).fadeOut(300, function () {

        })
    })
    // 滚动事件
    // console.log($height)
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= $height) {
            $('#nav').addClass('scrolled nav-top-show');
        } else {
            $('#nav').removeClass('scrolled nav-top-show');
        }
    })
    // 轮播二
    // 初始化第一张图片让他出现
    $('#imgshow img:first').css('display', 'block').addClass('active');
    //    生成指示器
    $('#imgshow img').each(function (index) {
        $li = index == 0 ? "<li class='current'></li>" : "<li></li>";
        $('.dot').append($li);
    })
    var count = 0;
    var t = null;
    //    点击左键出现下一张
    $('.banner-btn-right').on('click', a = function () {
        clearTimeout(t)
        var _this = this;
        $('#imgshow img').eq(count).removeClass('active').css('display', 'none');
        count++;
        if (count > 4) {
            count = 0;
        }
        $('.dot li').removeClass('current').eq(count).addClass('current');
        $('#imgshow img').eq(count).css('display', 'block').addClass('active').fadeIn(function () {
            $('_this').on('click', a);
            t = setTimeout(function () {
                $(_this).click();
            }, 1000)
        });
    })
    // 点击右键出现上一张
    $('.banner-btn-left').on('click', function () {
        clearTimeout(t);
        $('#imgshow img').css('display', 'none').removeClass('active');
        count--;
        console.log(count)
        if (count < 0) {
            count = 4;
        }
        $('#imgshow img').eq(count).css('display', 'block').addClass('active').fadeIn(function () {
            t = setTimeout(function () {
                $('.banner-btn-left').click();
            }, 1000)
        });
    })
    //    给指示器添加事件
    $('.dot li').on('click', function () {
        clearTimeout(t);
        var index = $(this).index();
        count = index;
        $('.dot li').removeClass('current').eq(count).addClass('current');
        $('#imgshow img').eq(count).css('display', 'block').addClass('active');
        $('#imgshow img').eq(count).css('display', 'none').removeClass('active').fadeIn(function () {
            t = setTimeout(function () {
                $('.banner-btn-right').click();
            }, 1000)
        });
    })
    // t=setTimeout(function(){
    //     $('.banner-btn-right').click();
    // },1000)
    // 第三个轮播
    var ul = document.getElementsByClassName('show-big')[0];
    var li = ul.children;

    var cLi = li[0].cloneNode(true);
    ul.appendChild(cLi);
    var LI_WIDTH = parseInt(getStyle(li[0]).width);
    var LI_LENGTH = li.length;
    ul.style.width = LI_WIDTH * LI_LENGTH + "px";
    var count = 0;
    var _ont = document.getElementsByClassName('ont')[0];
    var _hov = document.getElementsByClassName('hov')[0];
    console.log(_ont,_hov)
    $('.next a').on('click', function () {
        if (count == LI_LENGTH - 1) {
            count = 0;
            ul.style.left = 0;
        }
        count++;
        if(count == 5){
            _hov.innerText = 1;
        }else{
            _hov.innerText = count+1;
        }
        console.log(count)
        animate(ul, -count * LI_WIDTH)
    });
    $('.prev a').on('click', function () {
        if (count == 0) {
            count = LI_LENGTH - 1;
            ul.style.left = -count * LI_WIDTH + "px";
        }
        count--;
        if(count == 5){
            _hov.innerText = 1;
        }else{
            _hov.innerText = count+1;
        }
        animate(ul, -count * LI_WIDTH)
    });
    function animate(obj, target, type) {
        clearInterval(obj.t);
        obj.t = setInterval(function () {
            var left = parseInt(getStyle(obj).left);
            var step = Math.ceil((target - left) / 10);
            if (Math.abs(step) <= 1) {
                obj.style.left = target + "px";
                clearInterval(obj.t);
            } else {
                obj.style.left = left + step + "px";
            }
        }, 16)
    }

    function getStyle(obj) {
        return getComputedStyle ? getComputedStyle(obj, null) : obj.currentStyle;
    }
}())