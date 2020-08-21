var index = 0;
$(".point li").eq(index).css({ background: "rgb(54, 54, 54)" })
// 让每张图隐藏
function repeat() {
    for (var i = 0; i < $(".banimg-box li").length; i++) {
        // $(".slideshow li a").eq(i).css({display:"none"})
        $(".banimg-box li").eq(i).css({ display: "none" })
        $(".menu li").eq(i).css({ backgroundColor: "rgb(54, 54, 54,0)" })
    }
}
// 轮播图向右点击
$(".next-btn").click(function () {
    clearInterval(t)
    index++;
    if (index == $(".banimg-box li").length) {
        index = 0;
    }
    repeat()
    $(".banimg-box li").eq(index).css({ display: "block" })
    $(".menu li").eq(index).css({ background: "rgb(54, 54, 54)" })
})
// 轮播图向左点击
$(".pre-btn").click(function () {
    clearInterval(t)
    index--;
    if (index == -1) {
        index = $(".slideshow li a").length - 1;
    }
    repeat()
    $(".banimg-box li").eq(index).css({ display: "block" })
    $(".menu li").eq(index).css({ background: "rgb(54, 54, 54)" })
})
function time() {
    index++;
    if (index == $(".banimg-box li").length) {
        index = 0;
    }
    repeat()
    $(".banimg-box li").eq(index).css({ display: "block" })
    $(".menu li").eq(index).css({ background: "rgb(54, 54, 54)" })
}
// 定时器
var t = setInterval(time, 2000)
// 取消定时器
$(".banimg-box li").mouseover(function () {
    clearInterval(t)
})
// 重启定时器
$(".banimg-box li img").mouseout(function () {
    t = setInterval(time, 2000)
})
// console.log($(".point li"))
// 点击小圆点改变图片
for (let i = 0; i < $(".menu li").length; i++) {
    $(".menu li").eq(i).click(function () {
        clearInterval(t);
        index = i;
        repeat()
        $(".banimg-box li").eq(index).css({ display: "block" })
        $(".menu li").eq(index).css({ background: "rgb(54, 54, 54)" })
    })
}
// 轮播图大小

let obanner = document.querySelectorAll("#banner img");

for (let i = 0; i < obanner.length; i++) {
    obanner[i].style.width = window.innerWidth + "px";
    obanner[i].style.marginLeft = -(window.innerWidth / 2) + "px";
}