/*****************************************
 ***************样式切换部分***************
 *****************************************/
//加载完成，之后隐藏由上一个页面传值判断隐藏哪一个
$(document).ready(function(){
    var falg=sessionStorage.getItem("falg");
    if (0==falg) {
        $("#tex").hide(1,function(){
            console.log("隐藏div");
        })
    } else {
        $("#text").hide(1,function(){
            console.log("隐藏div");
        })
    }
})
/***显示与隐藏****/
// 在注册与登录的内容之间切换
$("#denglu").on("click",function(){
    $("#text").hide(500,function(){
        console.log("隐藏div");
    })
    $("#tex").show(500,function(){
        console.log("显示div");
    })
})
$("#li01").on("click",function(){
    $("#text").hide(500,function(){
        console.log("隐藏div");
    })
    $("#tex").show(500,function(){
        console.log("显示div");
    })
})
$("#zhuc02").on("click",function(){
    $("#tex").hide(500,function(){
        console.log("隐藏div");
    })
    $("#text").show(500,function(){
        console.log("显示div");
    })
})
/*****************************************
 ***************验证输入是否***************
 *****************************************/
// 注册部分
var zhuc=document.getElementById("zhuc");//获取注册内容注册按钮
    //给注册按钮添加点击事件
    zhuc.addEventListener("click",function(){
        var ckbox=document.getElementById("ckbox");//获取复选框对象
        //判断复选框是否勾勒，若没有勾勒则提示勾勒
        if (true==ckbox.checked) {
            //1.获取输入框中注册内容
            var regAccount=document.getElementById("phone").value;
            var regEmail=document.getElementById("email").value;
            var regPassword=document.getElementById("pass").value;
            var regPassword02=document.getElementById("trypass").value;
            var regId=false;
            var regPwd=false;
            var email=false;
            //2.判断并给予提示
            if((isNaN(regAccount))||(11!=regAccount.length)){
                document.getElementById("erry01").innerHTML="输入错误！11位数字"
                document.getElementById("erry01").className="fire"
            }else{
                regId=true;
                document.getElementById("erry01").innerHTML=""
                document.getElementById("erry01").className="fire"
            }
            if ((regEmail.indexOf("@")!=-1)&&(regEmail.indexOf(".")!=-1)
                &&(regEmail.indexOf("@")<regEmail.indexOf("."))) {
                    email=true;
                    document.getElementById("erry02").innerHTML=""
                    document.getElementById("erry02").className="fire"
            } else {
                document.getElementById("erry02").innerHTML="须有 @. "
                document.getElementById("erry02").className="fire"
            }
            if ((regPassword.length<6)||(regPassword.length>16)) {
                document.getElementById("erry03").innerHTML="输入错误！"
                document.getElementById("erry03").className="fire"
            }else{
                regPwd=true;
                document.getElementById("erry03").innerHTML=""
                document.getElementById("erry03").className="fire"
            }
            if((regPwd)&&(regPassword==regPassword02)){
                document.getElementById("erry04").innerHTML=""
                document.getElementById("erry04").className="fire"
                   if (regId&&regPwd&&email) {
                        addRegUser(regAccount,regPassword,regEmail);
                        showUser();//展示已添加
                        //将JSON类型转换为string类型
                        var str=JSON.stringify(json);
                        //储存到 sessionStorage 中
                        sessionStorage.setItem("users",str);
                            //提示注册成功
                            alert("添加第"+json.regAccount.length+
                        "个注册用户成功！请记住您新注册的账号/密码："+regAccount+"/"+regPassword);
                   }
                }else{
                    document.getElementById("erry04").innerHTML="输入错误！"
                    document.getElementById("erry04").className="fire"
                }
        }else{
            alert("小丁同学：要先勾勒《网站服务条款》哦！");
        }
    },false)
// 登录部分
var denglu02=document.getElementById("denglu02");//获取登录内容登录按钮
    // 给登录按钮添加点击事件
    denglu02.addEventListener("click",function(){
        var ckbox=document.getElementById("ckbox02");//获取复选框对象
        // 判断复选框是否勾勒,，若没有勾勒则提示勾勒
        if (true==ckbox.checked) {
            var logAccount=document.getElementById("phone02").value;
            var logPassword=document.getElementById("pass02").value;
            if (showValue()) {
                if(validate(logAccount,logPassword)==true){
                    alert("小丁同学：你真厉害已成功登录哈！");
                    sessionStorage.setItem("regAccount",logAccount);
                    sessionStorage.setItem("regPassword",logPassword);
                    window.location="index.html";
                }else{
                    alert("小丁同学：登录失败，动动你的大脑哈！");
                }
            } else {
                alert("小丁同学：同学需要先注册才能登录哦！");
            }
        }else{
            alert("小丁同学：要先勾勒《网站服务条款》哦！");
        }
    },false)