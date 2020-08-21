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
    // 点击提示信息消失
    $("#cart-tips").click(function () {
        $(this).css({ display: "none" });
    })
    // 添加到购物车
    $("#add-to-cart").click(function () {
        $(".cart-number").html($("#cart-num").val());
    })
    // 点击首页导航栏购物车跳转到购物车页面
    $(".cart-number").click(function () {
        window.location.href = "cart.html";
    })
    // 点击删除
    $(".sel").click(function(){
        $(".goods-table-buy").css({display:"none"})
        $(".has-sel-num").html(0);
        $(".finally-money").html(0);
    })
    // 点击加减数量
    $(".num-sel").click(function(){
      let dgf=document.querySelector(".goods-num-infor");
      let fmoey=document.querySelector(".finally-money");
      let lo=document.querySelector(".g-price");
      dgf.innerHTML--;
      fmoey.innerHTML=(lo.innerHTML)*(dgf.innerHTML);
    })
    $(".num-add").click(function(){
        let dgf=document.querySelector(".goods-num-infor");
         let fmoey=document.querySelector(".finally-money");
        let lo=document.querySelector(".g-price");
        dgf.innerHTML++;
        fmoey.innerHTML=(lo.innerHTML)*(dgf.innerHTML);
      })
    //   全选
    $('#every-btn-selected').click(function(){
        $('#first-hbtn').attr("checked","checked");
        $('#dd-selected').attr("checked","checked");
    })

})
