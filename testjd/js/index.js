$(function () {
    let ls = sessionStorage;
    console.log(ls.getItem("username"));
    if (ls.getItem("username")) {
        $("#login").hide();
        $("#nav").css({ top: "80px" })
        $("#login-nav").css({ height: "50px" })
        $("body").css({ padding: "80px 0 0 0" });
        $(".n1 #login-btnonly").html("欢迎您！");
        $(".n1 #regist-btnonly").html("");
        $(".n1 .line").html("");
        $("#cover").hide();
    }
    // 二级导航栏
    $(".boys-nav").hover(
        function () {
            $(this).children('.boys-second-nav').slideDown();
        },
        function () {
            $(this).children('.boys-second-nav').slideUp();
        }
    )
    $(".girls-nav").hover(
        function () {
            $(this).children('.girls-second-nav').slideDown();
        },
        function () {
            $(this).children('.girls-second-nav').slideUp();
        }
    )
    $(".kids-nav").hover(
        function () {
            $(this).children('.kids-second-nav').slideDown();
        },
        function () {
            $(this).children('.kids-second-nav').slideUp();
        }
    )
    //线的移动
    $(".man-foot").mouseover(function () {
        $(".arrow").animate({
            left: 100
        })
    })
    $(".woman-foot").mouseover(function () {
        $(".arrow").animate({
            left: 360
        })
    })
    $(".people-wear").mouseover(function () {
        $(".arrow").animate({
            left: 610
        })
    })
    $(".people-head").mouseover(function () {
        $(".arrow").animate({
            left: 840
        })
    })
    //点击登录页面
    $("#login-btnonly").click(
        function () {
            $("#login").css({ "position": "absolute", "display": "block" })
            $("#login-nav").css({ "position": "fixed", "height": "447px", "z-index": "10", "backgroungColor": "white" })
            $("#nav").css({ top: "477px" })
            $("#login-nav").slideDown();
            $("body").css({ padding: "80px 0 0 0" })
            $('.boys-nav').unbind('mouseenter').unbind('mouseleave');
            $('.girls-nav').unbind('mouseenter').unbind('mouseleave');
            $('.kids-nav').unbind('mouseenter').unbind('mouseleave');
            $("#cover").css({ display: "block" })
        }
    )
    // 登录页面消失
    $('#cover').bind("click", function (e) {
        var target = $(e.target);
        // 判断有没有这个class
        if (target.closest("#login").length == 0) {
            $("#login").hide();
            $("#nav").css({ top: "80px" })
            $("#login-nav").css({ height: "50px" })
            $("body").css({ padding: "80px 0 0 0" })
            $(".boys-nav").hover(
                function () {
                    $(this).children('.boys-second-nav').slideDown();
                },
                function () {
                    $(this).children('.boys-second-nav').slideUp();
                }
            )
            $(".girls-nav").hover(
                function () {
                    $(this).children('.girls-second-nav').slideDown();
                },
                function () {
                    $(this).children('.girls-second-nav').slideUp();
                }
            )
            $(".kids-nav").hover(
                function () {
                    $(this).children('.kids-second-nav').slideDown();
                },
                function () {
                    $(this).children('.kids-second-nav').slideUp();
                }
            )
        }
    })
    // 点击注册，登录页面消失
    $(".regist").click(function () {
        $("#login").hide();
        $("#nav").css({ top: "80px" })
        $("#login-nav").css({ height: "50px" })
        $("body").css({ padding: "80px 0 0 0" })

    })
    // 注册页面......................................
    $("#regist-btnonly").click(function () {
        $("#regist").css({ "position": "absolute", "display": "block" })
        $("#login-nav").css({ "position": "fixed", "height": "447px", "z-index": "10", "backgroungColor": "white" })
        $("#nav").css({ top: "477px" })
        $("#login-nav").slideDown();
        $("body").css({ padding: "80px 0 0 0" })
        $('.boys-nav').unbind('mouseenter').unbind('mouseleave');
        $('.girls-nav').unbind('mouseenter').unbind('mouseleave');
        $('.kids-nav').unbind('mouseenter').unbind('mouseleave');
        $("#cover").css({ display: "block" })
    })
    // 注册页面消失
    $('#cover').bind("click", function (e) {
        var target = $(e.target);
        if (target.closest("#regist").length == 0) {
            $("#regist").hide();
            $("#nav").css({ top: "80px" })
            $("#login-nav").css({ height: "50px" })
            $("body").css({ padding: "80px 0 0 0" })
            $(".boys-nav").hover(
                function () {
                    $(this).children('.boys-second-nav').slideDown();
                },
                function () {
                    $(this).children('.boys-second-nav').slideUp();
                }
            )
            $(".girls-nav").hover(
                function () {
                    $(this).children('.girls-second-nav').slideDown();
                },
                function () {
                    $(this).children('.girls-second-nav').slideUp();
                }
            )
            $(".kids-nav").hover(
                function () {
                    $(this).children('.kids-second-nav').slideDown();
                },
                function () {
                    $(this).children('.kids-second-nav').slideUp();
                }
            )
        }
    })
    // // 点击登录，注册页面消失
    $(".login").click(function () {
        $("#regist").hide();
        $("#nav").css({ top: "477px" })
        $("#login-nav").css({ height: "50px" })
        $("body").css({ padding: "80px 0 0 0" })
    })

    // 点击遮罩层，遮罩层消失
    $("#cover").click(function () {
        $(this).css({ display: "none" })
    })
})



// 商品选项卡。。。。。。。。
var anav = document.querySelectorAll(".hotsort-goods .selectevent");
var aimg = document.querySelectorAll(".selected-eve");
for (var i = 0; i < anav.length; i++) {
    anav[i].index = i;
    anav[i].onmouseover = function () {
        for (var j = 0; j < aimg.length; j++) {
            aimg[j].style.display = "none";
        }
        aimg[this.index].style.display = "block";
    }
}
// 聊一聊板块
var Oimg = document.querySelector("#chat");
function funn(obj) {
    // var speed = (target-obj.offsetTop)/10;
    let t = null
    window.onscroll = function () {
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        fne(obj, 150 + sTop)
    }
    function fne(obj, ress) {
        clearInterval(t)
        t = setInterval(function () {
            let speed = (ress - obj.offsetTop) / 10
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            if (obj.offsetTop == ress) {
                clearInterval(t)
            } else {
                obj.style.top = obj.offsetTop + speed + 'px'
            }
        }, 30)
    }
}
// 点击二级导航栏跳转到列表页

