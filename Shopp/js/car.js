// 获取input中value的属性值为+的对象集合
var add=$("input[value='+']");
// 获取input中value的属性值为-的对象集合
var reduce=$("input[value='-']");
// 获取mane的值为id的对象集合->每一个商品的复选框对象
var check=$("input[name='id']");
// 获取input中的type的值为text的对象集合
var writer=$("input[type='text']");
// 获取单价集合
var prices=$("div[id*=price]");
// 获取单个商品总金额
var amounts=$("div[id*=money]");
// 记录被勾勒的复选框个数
var fire=0;
/****************************************************
 ***根据复选框的个数来决定循环的次数，依次寻找事件源*****
 ****************************************************/
for (let i = 0; i < check.length; i++) {
    // 加
    add[i].onclick=function(){
        writer[i].value++;
        sumPorice(i);
    }
    // 减
    reduce[i].onclick=function(){
        // 判断能否继续减
        if (writer[i].value>=2) {
            writer[i].value--;
            sumPorice(i);
        } else {
            writer[i].value=1;
            lastPorice();
        }
    }
    // 直接写入、当光标离开，判断输入是否真确
    writer[i].onblur=function(){
        if ((!isNaN(writer[i].value))&&(writer[i].value>1)) {
            writer[i].value=parseInt(writer[i].value);
            sumPorice(i);
        } else {
            writer[i].value=1;
            lastPorice();
        }
    }
    // 单个商品的复选框的点击事件
    check[i].addEventListener("click",function(){
        if (true==check[i].checked) {
            fire++;
            lastPorice();
        } else {
            fire--;
            lastPorice();
        }
        // 当商品复选框被全部勾勒时，全选框自动被勾勒
        if (fire==check.length) {
            document.getElementById("all").checked=true;
        } else {
            document.getElementById("all").checked=false;
        }
    },false)
}
// 全选框的复选框的点击事件
$("#all").on("click",function(){
    if (true==this.checked) {
        for (let i = 0; i < check.length; i++) {
            check[i].checked=true;
        }
        fire=check.length;
        lastPorice();
    } else {
        for (let i = 0; i < check.length; i++) {
            check[i].checked=false;
        }
        fire=0;
        lastPorice();
    }
})
/****************************************************
 *********************商品的删除**********************
 ****************************************************/
function del(){
    let check=$("input[name='id']");
    var arr=[];
        for(let i=1;i<check.length;i++){
            if(check[i].checked){
                var delNode=check[i].parentNode.parentNode;
                arr.push(delNode);
            }
        }
    for (let i = 0; i < arr.length; i++) {
        let boxFather=document.getElementById("box02");
            boxFather.removeChild(arr[i]);
    }
    if (check[0].checked) {
        alert("小丁同学：这个是我最喜欢的，留下它吧！");
    }

    $("#all").checked=false;
    fire=0;
    for (let i = 0; i < check.length; i++) {
        check[i].checked=false;
    }
    document.getElementById("buttRight").getElementsByTagName("SPAN")[0].getElementsByTagName("em")[0].firstChild.nodeValue=0+".00";
}
/****************************************************
 *********************返回与传值**********************
 ****************************************************/
$("#li01").on("click",function(){
    let check=$("input[name='id']");
    let long=check.length;
        sessionStorage.setItem("long",long);
        window.location="index.html";
})
/****************************************************
 *********************自定义函数**********************
 ****************************************************/
/**
 * 
 * @param {*} j 传入是第几个商品对象
 */
function sumPorice(j){
    var price;//声明单价
    var amount;//定义商品金额
    var num;//商品数量
    // 获取数量
    num=parseInt(writer[j].value);
    // 获取单价
    price=prices[j].getElementsByTagName("SPAN")[0].getElementsByTagName("em")[0].firstChild.nodeValue
    // 计算金额
    amount=(num*price).toFixed(2);
    // 将金额设置到指定地方
    amounts[j].getElementsByTagName("SPAN")[0].getElementsByTagName("em")[0].firstChild.nodeValue=amount;
    // 调用计算总金额函数
    lastPorice();
}
/**
 * 自定义函数，用于找到全部被勾勒的复选框，将其对应的金额显示在总金额中
 */
function lastPorice(){
    var sum=0.00;
    for (let i = 0; i < check.length; i++) {
        if (true==check[i].checked){
            sum+=parseInt(amounts[i].getElementsByTagName("SPAN")[0].getElementsByTagName("em")[0].firstChild.nodeValue);
            console.log(sum);
        }
        document.getElementById("buttRight").getElementsByTagName("SPAN")[0].getElementsByTagName("em")[0].firstChild.nodeValue=sum+".00";
    }
}