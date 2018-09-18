/**
 * Created by Administrator on 2018/9/18.
 */
$(function(){
    var page = 1;
    var pageSize = 6;
    $.ajax({
        url:'/product/queryProductDetailList',
        type:'get',
        data:{page:page,pageSize:pageSize},
        success:function(res){
            var html = template('tpl',res);
            $('tbody').html(html);
        }
    })
});