/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){
    var address = '';
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            var html = template('addTpl',{result:res});
            address = res;
            $('#address').html(html);
        }
    })

    $('#address').on('tap','#delete',function(){
        var id = $(this).data('id');
        var li = $(this).parent().parent()[0];
       mui.confirm('你真要删除吗?',function(message){
           if(message.index==1){
               $.ajax({
                   url:'/address/deleteAddress',
                   type:'post',
                   data:{id:id},
                   success:function(res){
                       if(res.success){
                           location.reload();
                       }
                   }
               })
           }else{
               mui.swipeoutClose(li);
           }
       })
    });

    $('#address').on('tap','#edit',function(){
        var id = $(this).data('id');
        for (var i = 0; i < address.length; i++) {
            if(address[i].id == id) {
                localStorage.setItem('editAdd',JSON.stringify(address[i]));
                break;
            }

        }
    })
});