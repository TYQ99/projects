var str = "1.提供公司根据岗位所需相关材料；如：身份证原件（复印件1份），学历证（电子版1份、复印件1份），彩色一寸照片3张等相关材料；填写《员工入职登记表》。\n2.向新员工介绍公司情况及特殊管理制度；如：《员工手册》使其具备基本公司知识。\n3.按要求逐项办理入职手续，发放办公用品。\n4.向新员工介绍管理层；带新员工到部门，介绍给部门负责人。\n5.更新员工通讯录及建立员工个人档案根据正式上岗时间制作考勤记录。\n6.将自行办理的工资卡的银行卡资料（银行卡正反面复印件加上本人确认签字）提交财务部，为发放工资使用。\n7.新员工试用期限最长为三个月，由总经理和就职部门负责人考核确定试用期结束时间，由人事部告知办理相关手续及存档。\n8.试用期员工在入职后的三天内提出辞职者或被劝退者不予结算工资。\n9.在试用期内不符合录用条件的可以经双方协商一致终止劳动关系。\n10.试用期结束后转正的员工（包括提前转正的员工）由公司人事部负责按国家法律规定签订正式《劳动合同》并缴纳五险、社保等其它福利。新员工入职后，人事部根据公司年度培训计划及有关管理制度和实际需要安排制作相关培训资料并组织培训。主要培训内容包括：公司简介、公司文化、管理制度、奖惩制度、发展史、发展方向、岗位流程产品信息等。";
var words = str.split("");
var main = document.getElementsByClassName("main")[0]

function write() {
    if (words.length > 0) {
        var span = document.createElement("span")
        var dele = words.shift()
        var opc = 0
        span.innerHTML = dele
        main.appendChild(span)
        var fade = setInterval(function() {
            opc++
            span.style.opacity = opc / 1
            span.style.color = "transparent"
            // span.style.textShadow = "0 0 5px #57606f,0 0 10px #57606f,0 0 4px #57606f,0 0 12px #ffa502"
            // span.style.filter = "blur(" + (10 / opc - 1) + "px)"
            if (opc >= 1) {
                clearInterval(fade)
                span.style.color = "#2f3542"
            }
        }, 50)
    }
}
setInterval(write, 50)





/**@type{HTMLCanvasElement}*/
var btns=document.getElementsByTagName("button");
var canvas=document.getElementById("canvas");
var cxt=canvas.getContext("2d");
    //点击画笔事件
    btns[0].onclick=function(){
        //鼠标按下事件
        canvas.onmousedown=function(event){
            var e=event||window.event;

            cxt.beginPath();
            //设置起点--e.clientX:事件距离浏览器窗口x距离;canvas.offsetTop:事件距离浏览器窗口头距离
            // cxt.moveTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
            cxt.moveTo(e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop);
            //鼠标移动事件，为经过和结束点
            canvas.onmousemove=function(event){
                var e=event||window.event;
                    cxt.lineTo(e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop);
                    cxt.strokeStyle="blue";
                    cxt.stroke();
            }
            //鼠标抬起事件，
            canvas.onmouseup=function(){
                canvas.onmousedown=null;
                canvas.onmousemove=null;
            }
            cxt.closePath();
        }
    }
    //点击橡皮事件
    btns[1].onclick=function(){
        canvas.onmousedown=function(){//鼠标按下
            canvas.onmousemove=function(event){//鼠标移动
                var e=event||window.event;

                //清除以单个移动点为坐标，宽高为10的矩形
                cxt.clearRect(e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop,10,10);
            }
            canvas.onmouseup=function(){//鼠标抬起
                canvas.onmousedown=null;
                canvas.onmousemove=null;
            }
        }
    }
    //点击重绘事件
    btns[2].onclick=function(){
        cxt.clearRect(0,0,canvas.width,canvas.height)
    }