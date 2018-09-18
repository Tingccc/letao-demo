/**
 * Created by Administrator on 2018/9/14.
 */

$(function(){
    //mui('.mui-scroll-wrapper').scroll({
    //    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    //});
    var keyword = getParamsUrl(location.href,"keyword");
    var page = 1;
    var html = "";
    var price = 1;
    var num = 1;
    var This;
    var a=1;
    var b=1;



    mui.init({
        pullRefresh : {
            container:"#refreshContainer",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up : {
                height:50,//可选.默认50.触发上拉加载拖动距离
                auto:true,//可选,默认false.自动上拉加载一次
                contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });

    function getData() {
        if(!This){
           This=this;
        }
        $.ajax({
            url:"/product/queryProduct",
            type:"get",
            data:{
                price:price,
                num:num,
                page:page++,
                pageSize:3,
                proName:keyword},
            success: function (res) {
                if(res.data.length>0) {
                    html+= template("tpl",res);
                    $(".list").html(html);
                    This.endPullupToRefresh(false);
                }else {
                    This.endPullupToRefresh(true);
                }
            }
        })
    }
    $('#price').on('tap',function(){
        price = price==1?2:1;
        getData();
        mui('#refreshContainer').pullRefresh().refresh(true);
        html = '';
        page = 1;
        $(this).children('span').css('transform','rotate('+a*180+'deg)');
        a=a==1?0:1;
    });
    $('#sales').on('tap',function(){
        num = num==1?2:1;
        getData();
        mui('#refreshContainer').pullRefresh().refresh(true);
        html = '';
        page = 1;
        $(this).children('span').css('transform','rotate('+b*180+'deg)');
        b=b==1?0:1;
    })
});

