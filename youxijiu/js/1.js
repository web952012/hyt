$(".list>a>img").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var $index=$(this).index();
    console.log($index);
    $(".main"+$index).css("display","block").siblings().css("display","none")
});