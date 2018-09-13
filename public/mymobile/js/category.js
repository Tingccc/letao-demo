/**
 * Created by Administrator on 2018/9/12.
 */
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(res){
            var html = template("tp1",{result:res.rows})
            $(".links").html(html);
            var id = res.rows[0].id;
            getDatas(id);
            $(".links a").eq(0).addClass("active");
        }
    })

    $('.links').on("click","a",function(){
        $(this).addClass('active').siblings().removeClass('active');
        var id = $(this).attr("data-id");
        //var id = $(this).data("id");
        getDatas(id);

    })
})

function getDatas(id){
    $.ajax({
        type:'get',
        url:'/category/querySecondCategory',
        data:{"id":id},
        success:function(res){
            var html = template("tp2",res)
            $(".brand-list").html(html);
        }
    })
}