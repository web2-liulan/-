$(function(){
    var click = $('#click')
    click.on('click',function(e){e.stopPropagation();})
    .find('#firstpane').on('click',function(){
        click.find('.dropdown').show();
    });
    $(document).on('click',function(){click.find('.dropdown').hide()})
});
 $(document).ready(function() {
    //首先将#back-top隐藏
    $("#back-top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
          $("#back-top").fadeIn(1200);
        } else {
          $("#back-top").fadeOut(1200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#back-top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        1000);
        return false;
      });
    });
  });

//图片轮播开始
  $(function() {
    var firstpic = $(".detail_picbot_mid ul li").first().find("img");
    var firstsrc = firstpic.attr("bigimg");
    var firsttxt = firstpic.attr("text");
    $("#pic1").attr("src", firstsrc);
    firstpic.addClass("selectpic");
    $(".miaoshu").text(firsttxt);
    $("#preArrow").hover(function() {
        $("#preArrow_A").css("display", "block")
    },
    function() {
        $("#preArrow_A").css("display", "none")
    });
    $("#nextArrow").hover(function() {
        $("#nextArrow_A").css("display", "block")
    },
    function() {
        $("#nextArrow_A").css("display", "none")
    });
    function preclick() {
        var currrentindex = parseFloat($("#pic1").attr("curindex"));
        if (currrentindex != 0) {
            var curli = $(".detail_picbot_mid ul li").eq(currrentindex);
            var length = $(".detail_picbot_mid ul li").length;
            if (currrentindex <= (length - 5)) {
                $(".detail_picbot_mid ul li").eq(currrentindex + 4).css("display", "none");
                $(".detail_picbot_mid ul li").eq(currrentindex - 1).css("width", "94px").css("display", "block")
            }
            var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex - 1);
            var curnextsrc = curnextli.find("img").attr("bigimg");
            var curnexttxt = curnextli.find("img").attr("text");
            curli.find("img").removeClass("selectpic");
            curnextli.find("img").addClass("selectpic");
            $("#pic1").attr("src", curnextsrc);
            $(".miaoshu").text(curnexttxt);
            $("#pic1").attr("curindex", currrentindex - 1)
        } else {
            $(".bodymodal").css("display", "block");
            $(".firsttop").css("display", "block")
        }
    }
    $("#preArrow_B").click(function() {
        preclick()
    });
    $("#preArrow").click(function() {
        preclick()
    });
    $("#nextArrow_B").click(function() {
        nextclick()
    });
    $("#nextArrow").click(function() {
        nextclick()
    });
    function nextclick() {
        var currrentindex = parseFloat($("#pic1").attr("curindex"));
        var length = $(".detail_picbot_mid ul li").length;
        if (currrentindex != (length - 1)) {
            var curli = $(".detail_picbot_mid ul li").eq(currrentindex);
            if (currrentindex > 3) {
                $(".detail_picbot_mid ul li").eq(currrentindex - 4).css("display", "none");
                $(".detail_picbot_mid ul li").eq(currrentindex + 1).css("width", "94px").css("display", "block")
            }
            var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex + 1);
            var curnextsrc = curnextli.find("img").attr("bigimg");
            var curnexttxt = curnextli.find("img").attr("text");
            curli.find("img").removeClass("selectpic");
            curnextli.find("img").addClass("selectpic");
            $("#pic1").attr("src", curnextsrc);
            $("#pic1").attr("curindex", currrentindex + 1);
            $(".miaoshu").text(curnexttxt)
        } else {
            $(".bodymodal").css("display", "block");
            $(".endtop").css("display", "block")
        }
    }
    $(".detail_picbot_mid ul li").click(function() {
        var currentliindex = $(this).index(".detail_picbot_mid ul li");
        $(".detail_picbot_mid ul li img[class='selectpic']").removeClass("selectpic");
        var currentli = $(".detail_picbot_mid ul li").eq(currentliindex);
        currentli.find("img").addClass("selectpic");
        var bigimgsrc = currentli.find("img").attr("bigimg");
        var curnexttxt = currentli.find("img").attr("text");
        $("#pic1").attr("src", bigimgsrc);
        $("#pic1").attr("curindex", currentliindex);
        $(".miaoshu").text(curnexttxt)
    });
    setblock();
    function setblock() {
        var left = $(window).width() / 2 - 520;
        $(".firsttop").css("left", left);
//      $(".endtop").css("left", left)
    }
    $(window).resize(function() {
        setblock()
    });
    $(".closebtn1").click(function() {
        $(".firsttop").css("display", "none");
        $(".bodymodal").css("display", "none")
    });
    $(".closebtn2").click(function() {
        $(".endtop").css("display", "none");
        $(".bodymodal").css("display", "none")
    });
    $(".replaybtn1").click(function() {
        $(".firsttop").css("display", "none");
        $(".bodymodal").css("display", "none")
    });
    $(".replaybtn2").click(function() {
        $(".endtop").css("display", "none");
        $(".bodymodal").css("display", "none");
        $(".detail_picbot_mid ul li img[class='selectpic']").removeClass("selectpic");
        $(".detail_picbot_mid ul li").eq(0).find("img").addClass("selectpic");
        var bigimgsrc = $(".detail_picbot_mid ul li").eq(0).find("img").attr("bigimg");
        $("#pic1").attr("src", bigimgsrc);
        $("#pic1").attr("curindex", 0)
    })
});

//图片轮播结束

