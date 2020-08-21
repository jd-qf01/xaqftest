var justifylogin = false;
// 注册页正则验证................
//1.手机号
var flagtel = false;
var otel = document.querySelector("#usertel");
var ot = document.querySelector(".telnumber")
otel.onblur = function () {
    var reg = /^1[5|3|8]{1}\d{9}$/;
    if (reg.test(otel.value)) {
        ot.innerHTML = "输入正确";
        ot.style.color = "green";
        flagtel = true;
    } else {
        ot.innerHTML = "请输入13,15,18开头的11位号码";
        ot.style.color = "red";
        flagtel = false;
    }
}
//2邮箱
var flagemail = false;
var oemail = document.querySelector('#useremail');
oemail.onblur = function () {
    var reg = /^\w+@(qq|163).com$/;
    var ospan = document.querySelector(".aab");
    if (reg.test(oemail.value)) {
        ospan.innerHTML = "输入正确";
        ospan.style.color = "green";
        flagemail = true;
    } else {
        ospan.innerHTML = "请输入正确的邮箱号";
        ospan.style.color = "red";
        flagemail = false;
    }
}
//3密码：6-18位字符组成 有密码强弱验证
var flagepsd1 = false;
var opsd1 = document.querySelector(".userpwd1");
opsd1.onblur = function () {
    var ospan = opsd1.nextElementSibling;
    var nreg = /^\d{6,18}$/; //只有数字
    var zreg = /^[a-zA-Z]{6,18}$/;//只有字母
    var treg = /^[！@#￥%&*-]{6,18}$/;//只有特殊字符
    var _nreg = /\d{6,18}/; //包含数字
    var _zreg = /[a-zA-Z]{6,18}/;//包含字母
    var _treg = /[！@#￥%&*-]{6,18}/;//包含特殊字符
    console.log((opsd1.value).length)
    if ((opsd1.value).length > 5 && (opsd1.value).length < 19) {//先判断密码长度，再进入强弱分支
        if (nreg.test(opsd1.value) || zreg.test(opsd1.value) || nreg.test(opsd1.value)) {
            ospan.innerHTML = "弱";
            ospan.style.color = "red";
            flagepsd1 = true;
        } else if (_nreg.test(opsd1.value) && _zreg.test(opsd1.value) && _treg.test(opsd1.value)) {
            ospan.innerHTML = "强";
            ospan.style.color = "green";
            flagepsd1 = true;
        } else {
            ospan.innerHTML = "中";
            ospan.style.color = "yellow";
            flagepsd1 = true;
        }
    } else {
        ospan.innerHTML = "请输入长度6-18位的密码";
        ospan.style.color = "red";
        flagepsd1 = false;
    }
}
// 4确认二次密码是否相同
var flagepsd2 = false;
var opsd2 = document.querySelector(".userpwd2");
var ospan = opsd2.nextElementSibling;
opsd2.onblur = function () {
    if (opsd2.value == opsd1.value) {
        ospan.innerHTML = "输入正确";
        ospan.style.color = "green";
        flagepsd2 = true;
    } else {
        ospan.innerHTML = "密码不符";
        ospan.style.color = "red";
        flagepsd2 = false;
    }
}
// 5.验证码
var flagoyzm = false;
//随机函数
function getRandom(min, max) {
    if (min > max) {
        var ls = min;
        min = max;
        max = ls;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//随机验证码
function randomYzm() {
    var str = "";
    for (var i = 1; i <= 4; i++) {
        var num1 = getRandom(0, 9);
        var num2 = String.fromCharCode(getRandom(65, 90));
        var num3 = String.fromCharCode(getRandom(97, 122));
        str += num1 + num2 + num3
    }
    var str1 = ""
    for (var j = 1; j <= 4; j++) {
        str1 += str[j];
    }
    return str1;
}

var obtn = document.querySelector(".btnchange-yzm");//点击看不清
var yzm = document.querySelector("#regist-yzm");
var reyzm = document.querySelector(".re-yzm")
reyzm.innerHTML = randomYzm();

obtn.onclick = function () {
    var reyzm = document.querySelector(".re-yzm")
    reyzm.innerHTML = randomYzm();
}
var oyzm = document.querySelector("#regist-yzm");
oyzm.onblur = function () {
    var otit = document.querySelector(".randomyzm")
    if (oyzm.value == reyzm.innerHTML) {
        otit.innerHTML = "输入正确";
        otit.style.color = "green";
        flagoyzm = true;
    } else {
        otit.innerHTML = "请重新输入";
        otit.style.color = "red";
        flagoyzm = false;
    }
}
//判断提交表单........注册
//var or = document.querySelector("#regist-action");
function regist(){
	 if (flagtel && flagemail && flagepsd1 && flagepsd2) {
	        //ajax请求和后端----注册页面
	        $.ajax({
	            type: 'post',
	            datatype: "json",
	            async: true,
	            url: 'http://127.0.0.1:8080/kwht/RegisterServlet',
	            data: {
	                username: $("#usertel").val(),
	                userpass: $("#userpwd").val(),
	                uemail: $("#useremail").val(),
	                usex: $("input[name='usex']:checked").val()
	            },
	            success: function (data) {
	                if (data == "success") {
	                    alert("注册成功");
	                    window.location.href = "kwindex.html";
	                } else {
	                    alert("登录失败");
	                }
	            },
	            error: function () {
	                console.log("error");
	            },
	            complate: function () {
	                console.log("complate");
	            }
	        });
	    } else {
	        return false;
	    }
}
   


// 登陆页面验证
//1.验证码
var xbtn = document.querySelector(".exchangge-btn");//点击看不清
var reyzm = document.querySelector(".loginright .yzm");
 reyzm.innerHTML = randomYzm();
xbtn.onclick = function () {
	var reyzm = document.querySelector(".loginright .yzm")
    reyzm.innerHTML = randomYzm();
}
var qyzm = document.querySelector("#psyzm");
qyzm.onblur = function () {
    var otst = document.querySelector(".xx")
    if (qyzm.value == reyzm.innerHTML) {
        otst.innerHTML = "输入正确";
        otst.style.color = "green";
        flagoyzm = true;
    } else {
        otst.innerHTML = "请重新输入";
        otst.style.color = "red";
        flagoyzm = false;
    }
}


//ajax请求和后端

function loginsys() {
    $.ajax({
        type: 'post',
        datatype: "json",
        async: true,
        url: 'http://127.0.0.1:8080/kwht/LoginServlet',
        data: {
            username: $("#email").val(),
            userpass: $("#pwd").val()
        },
        success: function (data) {
            if (data == "success") {
                justifylogin = true;
                alert("登录成功");
                if (justifylogin == true) {
                    let ls = sessionStorage;
                    ls.setItem("username", $("#email").val());
                    window.location.reload();
                }

            } else {
                alert("登录失败");
               document.getElementById("successmes").innerHTML="用户名或密码错误！";//js的写法,jq会出错
               document.getElementById("successmes").style.color='red';
            }
        },
        error: function () {
            console.log("error");
        },
        complate: function () {
            console.log("complate");
        }
    });
}



