var menu01=document.getElementsByClassName("menu01")[0];
var menu02=document.getElementsByClassName("menu02")[0];
var menu03=document.getElementsByClassName("menu03")[0];
var menu04=document.getElementsByClassName("menu04")[0];
var menu05=document.getElementsByClassName("menu05")[0];
var sp01=document.getElementsByClassName("sp01")[0];
var sp02=document.getElementsByClassName("sp02")[0];
var sp03=document.getElementsByClassName("sp03")[0];
var sp04=document.getElementsByClassName("sp04")[0];
var sp05=document.getElementsByClassName("sp05")[0];
var text01=document.getElementById("text01");
var text02=document.getElementById("text02");
var text03=document.getElementById("text03");
var text04=document.getElementById("text04");
var text05=document.getElementById("text05");
var start=0;
var canvas=$("canvas[id*=canvas]");
//加载完成，之后隐藏
$(document).ready(function(){
    text02.style.display="none";	
    text03.style.display="none";	
    text04.style.display="none";	
    text05.style.display="none";	
    $(".menu01").css("background-color","red");
})
/*********************************************
 ***************获取账号密码传值****************
 *********************************************/
    // 获取登录时的账号和密码，若没有则提示登录
    var seen=sessionStorage.getItem("regAccount");
    var seen02=sessionStorage.getItem("regPassword");
    var seen03=sessionStorage.getItem("long");
    // 判断是否为空值
    if (null==seen) {
        alert("XX同学：由于大部分的静态资源放在服务器上，在2022年12-22号后部分部分静态资源无法查看！！");
        alert("XX同学：你还没有登录，请尽快登录哈！");
    } else {
        // 登录完成提醒密码
        if (null==seen03) {
            alert("XX同学：账号为"+sessionStorage.getItem("regAccount")
                +"的同学欢迎回来，你的密码是"
                +sessionStorage.getItem("regPassword")
                +"不要忘了哈！\n并向你的购物车添加3个商品哈！");
            seen03=3;
        }
    }
    // 将收到的值给购物框
    var goCar=document.getElementsByClassName("head-sou-right")[0];
        goCar.getElementsByTagName("SPAN")[0].firstChild.nodeValue=seen03;
    // 若果没有登录则禁止查看购物车
    goCar.addEventListener("click",function(){
        if (null==seen) {
            alert("XX同学：请先登录才能查看自己的购物车哈！");
        } else {
            window.location="./html/car.html";
        }
    },false)
/*********************************************
 ***************选择菜单特效*******************
 *********************************************/
// 滑上的特效->全部商品分类
    hua(".menu01","#text01","p:not(.sp01)",sp01);
// 滑上的特效->促销
    hua(".menu02","#text02","p:not(.sp02)",sp02);
// 滑上的特效->秒杀
    hua(".menu03","#text03","p:not(.sp03)",sp03);
// 滑上的特效->优惠券
    hua(".menu04","#text04","p:not(.sp04)",sp04);
// 滑上的特效->其他作业图
    hua(".menu05","#text05","p:not(.sp05)",sp05);
/*********************************************
 ***************进入登录注册*******************
 *********************************************/
var login=document.getElementsByClassName("text01-top01-right-top0301")[0];
var logon=document.getElementsByClassName("text01-top01-right-top0302")[0];
var login02=document.getElementsByClassName("li01")[0];
var register=document.getElementsByClassName("li02")[0];
var bookStore=document.getElementsByClassName("li03")[0];
var drawing=document.getElementsByClassName("li04")[0];
var company=document.getElementsByClassName("li05")[0];
    login.addEventListener("click",function(){
        sessionStorage.setItem("falg",1);
        window.location="./html/login.html";
    },false)
    login02.addEventListener("click",function(){
        sessionStorage.setItem("falg",1);
        window.location="./html/login.html";
    },false)
    register.addEventListener("click",function(){
        sessionStorage.setItem("falg",1);
        window.location="./html/login.html";
    },false)
    bookStore.addEventListener("click",function(){
        window.location="./html/bookStore.html";
    },false)
    drawing.addEventListener("click",function(){
        window.location="./html/drawing.html";
    },false)
    company.addEventListener("click",function(){
        window.location="./html/company.html";
    },false)
    logon.addEventListener("click",function(){
        sessionStorage.setItem("falg",0);
        window.location="./html/login.html";
    },false)
/*********************************************
 ***************自定义函数部分*****************
 *********************************************/
/**
 * 自定义滑下函数
 * @param {*} id 点击的地方
 * @param {*} cla 控制的地方
 * @sp {*} 子元素，控制背景图片
 */
function hua(id,cla,sp,objj){
    if(0==start){
        text02.style.display="block";	
        text03.style.display="block";	
        text04.style.display="block";	
        text05.style.display="block";
        start++;
    }
    $(id).click(function(){
        // 获取到除点击对象的其他对象数组
        var obj=$(sp);
        // 输入哪一个需要滑下
        $(cla).slideDown("slow",function(){
            // objj.style.backgroundImage="url('./images/huaXia.png')";
            objj.style.backgroundImage="url('http://rlqzlo97m.hd-bkt.clouddn.com/index/huaXia.png')";
            // console.log("滑下");
        })
        // 定义一个字符串数组，是对应五个内容div的Id
        var ch=["#text01","#text02","#text03","#text04","#text05"];
        // 通过循环对比，判断是那一个不需要滑上，其他全部滑上
        for (let j = 0; j < ch.length; j++) {
            if (ch[j]==cla) {
                // console.log(ch[j]);
            }else{
                $(ch[j]).slideUp("slow",function(){
                    // console.log("滑上");
                })
            }
        }
        // 让除此对象的全部对象下面属性的图片与背景颜色改变
        for(let i=0;i<$(sp).length;i++){
            obj[i].style.backgroundImage="url('http://rlqzlo97m.hd-bkt.clouddn.com/index/huashang.png')";
            obj[i].parentNode.style.backgroundColor="#FFFFFF";
        }
        // 让此对象的背景颜色为红色
        this.style.backgroundColor="red";
    })
}