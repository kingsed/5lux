// 筛选区的Tab切换
$(function(){
    var $bif = $(".bif_head_re");
    var $mwrap = $(".mwrap");
    var $cont = $(".letters_cont");
    $bif.on("click","a",function(){
        this.className = "active";
        $(this).siblings("a").removeClass("active");
        if($bif.children().eq(0)[0].className=="active"){
            $cont.css("display","block");
            $mwrap.css("display","none");
            $(this).parent().next().css("display","none").next().css("display","block");
        }else{
            $cont.css("display","none");
            $mwrap.css("display","block");
            $(this).parent().next().css("display","block").next().css("display","none");            
        }
    })
})
//document滚动事件
$(function(){
    var $bif_tab = $(".bif_tab");
    $(document).on("scroll",function(){
        var $height = $(".hot").height() + $(".screen").height() + $(".head").height() + 80;
        if($(this).scrollTop()>$height){
            $.each($bif_tab,function(i,v){
                $(v).addClass("active");
            })
        }else{
            $.each($bif_tab,function(i,v){
                $(v).removeClass("active");             
            })
        }
    })
})
//旗舰下拉事件
$(function(){
    $(".b_index_load").on("click","i",function(){
        var $flagship = $(".flagship li").length;
        if($flagship <= 100){
            if($flagship == 100){
                var html = "";
                for(var i=1; i<=7; i++){
                    if(i%4==0){
                        html +='<li class="fourth">';
                    }else{
                        html +="<li>";
                    }
                    html += `<a href="#">
                        <img src="../img/brand/04_p.jpg" width="287" height="174" alt="">
                        <div class="flagshipname">
                            <span>Corto Moltedo旗舰店</span>
                        </div>
                    </a>`;
                }
                $(".flagship").append(html);
                $(this).parent().remove();
            }else{
                var html = "";
                for(var i=1; i<=8; i++){
                    if(i%4==0){
                        html +='<li class="fourth">';
                    }else{
                        html +="<li>";
                    }
                    html += `<a href="#">
                        <img src="../img/brand/04_p.jpg" width="287" height="174" alt="">
                        <div class="flagshipname">
                            <span>Corto Moltedo旗舰店</span>
                        </div>
                    </a>`;
                }
                $(".flagship").append(html);
            }  
        }
    })
})
//品牌list的锚点链接
$(function(){
    $(".word a").on('click',function(e){
        e.preventDefault();
        var height = $('.word').parent().hasClass('active')?63:126
        var word = $(this).data("href");
        $(window).scrollTop($('#'+word).offset().top-height);
    })
})