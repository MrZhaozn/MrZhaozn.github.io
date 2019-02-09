/**
 * Created by Administrator on 2019/2/2.
 */
/*扉页*/
var outInner=document.getElementById("outInner");
var outTop=document.getElementById("outTop");
var outHide=document.getElementById("outHide");
var browserW=document.documentElement.clientWidth;
var browserH=document.documentElement.clientHeight;
var outBox=document.getElementById("outBox");
var mainBox=document.getElementById("main");
outInner.onclick=function () {
    outTop.style.transform="rotateX(180deg)";
    outTop.style.zIndex="1";
    var i=0;
    var topTime=setInterval(function () {
        if (i==1){
            outHide.style.transform="translateY(-100%)";
        }
        if (i==3){
            outHide.style.zIndex="9999";
            outHide.style.transform="translateY(0)";
        }
        if (i==8){
            outInner.style.animation="rotateS 3s";
        }
        if (i==14){
            outBox.remove();
            mainBox.style.display="block";
            clearInterval(topTime);
        }
        i++;
    },300)
};
//点击翻页
/*var tt=0;
var nav = document.getElementById("nav-inner");
var nav_child = nav.getElementsByClassName("nav-item");
var main_child=mainBox.getElementsByClassName("main-item");
for (var i = 0; i < nav_child.length; i++) {
    nav_child[i].index = i;
    nav_child[i].onclick = function(){
        var j = this.index;
        tt=j;
        for (var q = 0; q < nav_child.length; q++) {
            if (q!=j){
                nav_child[q].classList.remove("nav-cur");
                main_child[q].style.opacity="0";
                main_child[q].style.zIndex="0";
            }else{
                nav_child[q].classList.add("nav-cur");
                main_child[q].style.opacity="1";
                main_child[q].style.zIndex="1";
            }
        }
    }
}





var ti=1;
var scrollFunc=function(e){
    ti++;
    e=e || window.event;
    // console.log(tii);
    if(e.wheelDelta){//IE/Opera/Chrome
        if (ti%2==0){
            // console.log(tt+"="+e.wheelDelta);
            if (e.wheelDelta<0){
                if (tt!=0){
                    if (tt>=3){
                        tt=0;
                    }else {
                        tt++;
                    }
                }else {
                    tt=0;
                }

            }else {
                if (tt!=0){
                    if (tt<=0){
                        tt=3;
                    }else {
                        tt--;
                    }
            }
            }
            for (var q = 0; q < nav_child.length; q++) {
                console.log(tt);
                if (q!=tt){
                    // if (tt-1>=0&&tt+1<=3){
                        nav_child[q].classList.remove("nav-cur");
                        main_child[q].style.opacity="0";
                        main_child[q].style.zIndex="0";
                    // }

                }else{
                    // if (tt-1>=0&&tt+1<=3){
                        nav_child[q].classList.add("nav-cur");
                        main_child[q].style.opacity="1";
                        main_child[q].style.zIndex="1";
                    // }
                }
            }
        }

    }else if(e.detail){//Firefox
        console.log("t2="+e.detail);
    }
}
//注册事件
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
// 在非firefox浏览器中，滚轮向上滚动返回的数值是120，向下滚动返回-120
// 而在firefox浏览器中，滚轮向上滚动返回的数值是-3，向下滚动返回3
// 代码部分如下，e.wheelDelta是判断是否为非firefox浏览器，e.detail为firefox浏览器
// if(e.wheelDelta){//IE/Opera/Chrome
//     //t1.value=e.wheelDelta;
// }else if(e.detail){//Firefox
//    // t2.value=e.detail;
// }
*/