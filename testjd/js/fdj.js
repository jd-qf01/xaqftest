class Magnifier {
    constructor(newSmallBox, newBigBox, newMask, newbtn) {
        this.smallBox = newSmallBox;
        this.bigBox = newBigBox;
        this.mask = newMask;
        this.qbtn = newbtn;
    }
    onmouseover() {
        let that = this;
        this.smallBox.onmouseover = function () {
            that.bigBox.style.display = "block";
            that.mask.style.display = "block";
        }
    }
    onmouseout() {
        let that = this;
        this.smallBox.onmouseout = function () {
            that.bigBox.style.display = "none";
            that.mask.style.display = "none";
        }
    }
    onmousemove() {
        let that = this;
        this.smallBox.onmousemove = function (evt) {
            let e = evt || event;
            let left = e.pageX - this.offsetLeft - that.mask.offsetWidth / 2 - (innerWidth - 1000) / 2;
            let top = e.pageY - this.offsetTop - that.mask.offsetHeight / 2 - 130;
            if (left < 0) {
                left = 0;
            }
            let maxLeft = this.offsetWidth - that.mask.offsetWidth;

            if (left > maxLeft) {
                left = maxLeft;
            }

            if (top < 0) {
                top = 0;
            }

            let maxTop = this.offsetHeight - that.mask.offsetHeight;

            if (top > maxTop) {
                top = maxTop;
            }

            let x = left * that.bigBox.offsetWidth / that.mask.offsetWidth;
            let y = top * that.bigBox.offsetHeight / that.mask.offsetHeight;

            that.mask.style.left = left + "px";
            that.mask.style.top = top + "px";

            that.bigBox.style.backgroundPositionX = -x + "px";
            that.bigBox.style.backgroundPositionY = -y + "px";
        }
    }
    addEvent() {
        let that = this;
        // 给所有的li添加点击事件
        for (var i = 0; i < this.qbtn.length; i++) {
            this.qbtn[i].onclick = function () {
                // 点击时，准备修改图片地址，记得将当前点击的元素传入
                that.changeImg(this);
            }
        }
    }
    changeImg(ele) {
        this.smallBox.firstElementChild.src = ele.src;
        this.bigBox.style.backgroundImage = "url(" + ele.src + ")";
    }
}

let oSmallBox = document.querySelector(".goods-magnifier-con");
let obigBox = document.querySelector(".magnifier-display");
let mask = document.querySelector(".mask");
let xxbtn = document.querySelectorAll(".magnifier-center-list li img")
let mf = new Magnifier(oSmallBox, obigBox, mask, xxbtn);

mf.onmouseover();
mf.onmouseout();
mf.onmousemove();
mf.addEvent();
// 放大镜下的选项卡
// 放大镜页中的分页效果
class paging {
    constructor(newli) {
        this.oli = newli;
        this.index = 0;
        this.arr = [];
    }
    getdata() {
        let that = this;
        let xhr = new XMLHttpRequest();
        xhr.open("get", "list.json", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                that.load(xhr.responseText);
            }
        }
        xhr.send();
    }
    //解析数据
    load(str) {
        this.arr = JSON.parse(str);//[.........]
    }
    //设置背景
    setbgd() {
        for (let i = this.index * 4, j = 0; i <= this.index * 4 + 3; i++, j++) {
            this.oli[j].firstElementChild.src = this.arr[i].img;
            this.oli[j].firstElementChild.nextElementSibling.innerHTML= this.arr[i].info;
            this.oli[j].lastElementChild.innerHTML = this.arr[i].price;
           
            
        }
    }
    //prev事件
    prev() {
        this.index--;
        if (this.index == -1) {//如数组中共24个数据，每组4个共6组，小于0时要让索引等于最后一组
            this.index = (this.arr.length / 4) - 1;
        }
        this.setbgd();
    }
    //next事件
    next() {
        this.index++;
        if (this.index == this.arr.length / 4) {
            this.index = 0;
        }
        this.setbgd();
    }
    //点击事件
    event() {
        let oprev = document.querySelector("#fybtn-previous");
        let onext = document.querySelector("#fybtn-next");
        let that = this;
        oprev.onclick = function () {
            that.prev();
        }
        onext.onclick = function () {
            that.next();
        }
    }
}
let oli = document.querySelectorAll(".fenye-con li");
let pag = new paging(oli);
pag.getdata();
pag.event();

