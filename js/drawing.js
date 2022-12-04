/***
 *  第一个
    刮刮乐
 */

/**@type{HTMLCanvasElement}*/
var canvas01=document.getElementById("canvas01");
var cxt01=canvas01.getContext("2d");
/***1,画一个与画布一样大小的矩形，并填充颜色，使图片看不见*****/

    canvas01.width = 350;
    canvas01.height= 350;

    cxt01.beginPath();//开启路径
    cxt01.fillStyle="#ccc";
    cxt01.fillRect(0,0,350,350);
    cxt01.closePath();//关闭路径
    
//监听并处理函数，函数可放在内部，true:捕获;false:冒泡
canvas01.addEventListener("mousedown",ande,false);//2,鼠标按下执行

//函数体,鼠标按下执行，开启路径
function ande(event){
    var e=event||window.event;
        cxt01.beginPath();//开启路径
        cxt01.moveTo(e.clientX-canvas01.offsetLeft,e.clientY-canvas01.offsetTop);//画线的起点位置
        cxt01.globalCompositeOperation="destination-out";//只显示旧图形不重合部分，其他透明
        canvas01.addEventListener("mousemove",yide,false);//3,鼠标移动执行
    };
//函数体，鼠标移动执行程序，画线，由于在旧图形上画新图像，线经过是透明的
function yide(event){
    var e=event||window.event;

        cxt01.lineTo(e.clientX-canvas01.offsetLeft,e.clientY-canvas01.offsetTop);//画线的经过点
        cxt01.lineWidth=10;//直线宽度
        cxt01.lineCap="round";//butt:每个末端平直的边缘;round:每个末端添加圆形线帽;square:每个末端添加正方形线帽;后两个比实际长一点
        cxt01.stroke();
        //cxt01.closePath();//不关闭，不与起始点全部连接，会形成扇形

    // 获取画布上所有的像素点，注意跨区域问题
    var imgdata01 = cxt01.getImageData(0,0,canvas01.width,canvas01.height)
     
    var count01 = 0//记录有多少通道变透明
    for(var i = 0;i<imgdata01.data.length;i+=4){
        //筛选出通道的一项属性，并让其透明
        if(imgdata01.data[i+3] == 0){
            count01++
        }
    }
    //判断透明的数量是否站总体的55%，若是的则直接清除画布
    if(count01 >= imgdata01.data.length/4*0.30){
        cxt01.clearRect(0,0,canvas01.width,canvas01.height)
    }
}
//鼠标抬起
canvas01.addEventListener("mouseup",function(){
    //移除添加的鼠标移动事件
    canvas01.removeEventListener("mousemove",yide);
},false)


/***
 *  第二个
    刮刮乐
 */

/**@type{HTMLCanvasElement}*/
var canvas02=document.getElementById("canvas02");
var cxt02=canvas02.getContext("2d");
/***1,画一个与画布一样大小的矩形，并填充颜色，使图片看不见*****/

    canvas02.width = 350;
    canvas02.height= 350;

    cxt02.beginPath();//开启路径
    cxt02.fillStyle="#ccc";
    cxt02.fillRect(0,0,350,350);
    cxt02.closePath();//关闭路径
    
//监听并处理函数，函数可放在内部，true:捕获;false:冒泡
canvas02.addEventListener("mousedown",handler_02,false);//2,鼠标按下执行

//函数体,鼠标按下执行，开启路径
function handler_02(event){
    var e=event||window.event;
        cxt02.beginPath();//开启路径
        cxt02.moveTo(e.clientX-canvas02.offsetLeft,e.clientY-canvas02.offsetTop);//画线的起点位置
        cxt02.globalCompositeOperation="destination-out";//只显示旧图形不重合部分，其他透明
        canvas02.addEventListener("mousemove",handler2_02,false);//3,鼠标移动执行
    };
//函数体，鼠标移动执行程序，画线，由于在旧图形上画新图像，线经过是透明的
function handler2_02(event){
    var e=event||window.event;

        cxt02.lineTo(e.clientX-canvas02.offsetLeft,e.clientY-canvas02.offsetTop);//画线的经过点
        cxt02.lineWidth=10;//直线宽度
        cxt02.lineCap="round";//butt:每个末端平直的边缘;round:每个末端添加圆形线帽;square:每个末端添加正方形线帽;后两个比实际长一点
        cxt02.stroke();
        //cxt02.closePath();//不关闭，不与起始点全部连接，会形成扇形

    // 获取画布上所有的像素点，注意跨区域问题
    var imgdata02 = cxt02.getImageData(0,0,canvas02.width,canvas02.height)
     
    var icount02 = 0//记录有多少通道变透明
    for(var i = 0;i<imgdata02.data.length;i+=4){
        //筛选出通道的一项属性，并让其透明
        if(imgdata02.data[i+3] == 0){
            icount02++
        }
    }
    //判断透明的数量是否站总体的55%，若是的则直接清除画布
    if(icount02 >= imgdata02.data.length/4*0.30){
        cxt02.clearRect(0,0,canvas02.width,canvas02.height)
    }
}
//鼠标抬起
canvas02.addEventListener("mouseup",function(){
    //移除添加的鼠标移动事件
    canvas02.removeEventListener("mousemove",handler2_02);
},false)


/***
 *  第三个
    刮刮乐
 */

/**@type{HTMLCanvasElement}*/
var canvas03=document.getElementById("canvas03");
var cxt03=canvas03.getContext("2d");
/***1,画一个与画布一样大小的矩形，并填充颜色，使图片看不见*****/

    canvas03.width = 350;
    canvas03.height= 350;

    cxt03.beginPath();//开启路径
    cxt03.fillStyle="#ccc";
    cxt03.fillRect(0,0,350,350);
    cxt03.closePath();//关闭路径
    
//监听并处理函数，函数可放在内部，true:捕获;false:冒泡
canvas03.addEventListener("mousedown",handler_03,false);//2,鼠标按下执行

//函数体,鼠标按下执行，开启路径
function handler_03(event){
    var e=event||window.event;
        cxt03.beginPath();//开启路径
        cxt03.moveTo(e.clientX-canvas03.offsetLeft,e.clientY-canvas03.offsetTop + 300);//画线的起点位置
        cxt03.globalCompositeOperation="destination-out";//只显示旧图形不重合部分，其他透明
        canvas03.addEventListener("mousemove",handler2_03,false);//3,鼠标移动执行
    };
//函数体，鼠标移动执行程序，画线，由于在旧图形上画新图像，线经过是透明的
function handler2_03(event){
    var e=event||window.event;

        cxt03.lineTo(e.clientX-canvas03.offsetLeft,e.clientY-canvas03.offsetTop + 300);//画线的经过点
        cxt03.lineWidth=10;//直线宽度
        cxt03.lineCap="round";//butt:每个末端平直的边缘;round:每个末端添加圆形线帽;square:每个末端添加正方形线帽;后两个比实际长一点
        cxt03.stroke();
        //cxt03.closePath();//不关闭，不与起始点全部连接，会形成扇形

    // 获取画布上所有的像素点，注意跨区域问题
    var imgdata03 = cxt03.getImageData(0,0,canvas03.width,canvas03.height)
     
    var count03 = 0//记录有多少通道变透明
    for(var i = 0;i<imgdata03.data.length;i+=4){
        //筛选出通道的一项属性，并让其透明
        if(imgdata03.data[i+3] == 0){
            count03++
        }
    }
    //判断透明的数量是否站总体的55%，若是的则直接清除画布
    if(count03 >= imgdata03.data.length/4*0.30){
        cxt03.clearRect(0,0,canvas03.width,canvas03.height)
    }
}
//鼠标抬起
canvas03.addEventListener("mouseup",function(){
    //移除添加的鼠标移动事件
    canvas03.removeEventListener("mousemove",handler2_03);
},false)

/***
 *  第四个
    刮刮乐
 */

/**@type{HTMLCanvasElement}*/
var canvas04=document.getElementById("canvas04");
var cxt04=canvas04.getContext("2d");
/***1,画一个与画布一样大小的矩形，并填充颜色，使图片看不见*****/

    canvas04.width = 350;
    canvas04.height= 350;

    cxt04.beginPath();//开启路径
    cxt04.fillStyle="#ccc";
    cxt04.fillRect(0,0,350,350);
    cxt04.closePath();//关闭路径
    
//监听并处理函数，函数可放在内部，true:捕获;false:冒泡
canvas04.addEventListener("mousedown",handler_04,false);//2,鼠标按下执行

//函数体,鼠标按下执行，开启路径
function handler_04(event){
    var e=event||window.event;
        cxt04.beginPath();//开启路径
        cxt04.moveTo(e.clientX-canvas04.offsetLeft,e.clientY-canvas04.offsetTop + 300);//画线的起点位置
        cxt04.globalCompositeOperation="destination-out";//只显示旧图形不重合部分，其他透明
        canvas04.addEventListener("mousemove",handler2_04,false);//3,鼠标移动执行
    };
//函数体，鼠标移动执行程序，画线，由于在旧图形上画新图像，线经过是透明的
function handler2_04(event){
    var e=event||window.event;

        cxt04.lineTo(e.clientX-canvas04.offsetLeft,e.clientY-canvas04.offsetTop + 300);//画线的经过点
        cxt04.lineWidth=10;//直线宽度
        cxt04.lineCap="round";//butt:每个末端平直的边缘;round:每个末端添加圆形线帽;square:每个末端添加正方形线帽;后两个比实际长一点
        cxt04.stroke();
        //cxt04.closePath();//不关闭，不与起始点全部连接，会形成扇形

    // 获取画布上所有的像素点，注意跨区域问题
    var imgdata04 = cxt04.getImageData(0,0,canvas04.width,canvas04.height)
     
    var count04 = 0//记录有多少通道变透明
    for(var i = 0;i<imgdata04.data.length;i+=4){
        //筛选出通道的一项属性，并让其透明
        if(imgdata04.data[i+3] == 0){
            count04++
        }
    }
    //判断透明的数量是否站总体的55%，若是的则直接清除画布
    if(count04 >= imgdata04.data.length/4*0.30){
        cxt04.clearRect(0,0,canvas04.width,canvas04.height)
    }
}
//鼠标抬起
canvas04.addEventListener("mouseup",function(){
    //移除添加的鼠标移动事件
    canvas04.removeEventListener("mousemove",handler2_04);
},false)