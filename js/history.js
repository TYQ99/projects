var video = $("video").get(0)

//实现暂停与播放的功能和图标的切换
$(".switch").on("click",function(){
    if($(this).hasClass("fa-play")){
        video.play();
        $(this).addClass("fa-pause").removeClass("fa-play");
    }else{
        video.pause();
        $(this).addClass("fa-play").removeClass("fa-pause");
    }
})

//得到总时长
function formatTime(time){
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);

    return (h < 10 ? "0" + h : h) + ":" +(m < 10 ? "0" + m : m)+ ":" + (s < 10 ? "0" + s : s)
}

//得到当前进度
video.oncanplay = function(){
    $("video").show();
    var totalTime = formatTime(video.duration);
    $(".total").html(totalTime)
}

video.ontimeupdate = function(){
    var w = video.currentTime / video.duration * 100 + "%";
        $(".progress-bar").css("width",w);
        $(".current").html(formatTime(video.currentTime));
}

//实现全屏效果
$(".expand").on("click",function(){
    if($(this).hasClass("fa-arrows-alt")){
        video.webkitRequestFullScreen();
        $(this).addClass("fa-compress").removeClass("fa-arrows-alt");
    }else{
        document.webkitRequestFullScreen();
        $(this).addClass("fa-arrows-alt").removeClass("fa-compress");
    }
})

function checkFull(){
    var isFull = document.webkitRequestFullScreen;
    if(isFull == undefined){
        isFull = false;
    }
    return isFull;
}

$(window).resize(function(){
    if(!checkFull()){
        $(".expand").addClass("fa-arrows-alt").removeClass("fa-compress")
    }
})

//点击跳转
$(".progress").on("click",function(event){
    var offset = event.offsetX; 
    var current = offset / $(this).width() * video.duration;
    video.currentTime = current;
})

