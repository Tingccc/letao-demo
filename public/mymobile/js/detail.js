/**
 * Created by Administrator on 2018/9/18.
 */
$(function(){
    var size;
    var num = 1;
    var rest = 0;
    var id = getParamsUrl(location.href,'id');
    $.ajax({
        url:'/product/queryProductDetail',
        type:'get',
        data:{id:id},
        success:function(res){
            console.log(res);
            var html =  template('detailTpl',res);
            $('#detailBox').html(html);
            rest = res.num;
        }
    });

    $('#detailBox').on('tap','.detail-size span',function(){
        $(this).addClass('active').siblings().removeClass('active');
        size = $(this).html();
    });

    $('#detailBox').on('tap','.reduce',function(){
        num--;
        if(num < 1) {
            num = 1;
        }
        $('.num').val(num);
    });

    $('#detailBox').on('tap','.increase',function(){
        num++;
        if(num > rest) {
            num = rest;
        }
        $('.num').val(num);
    })

    $('#detailBox').on('tap','#addCart',function(){
        if(!$('.detail-size span').hasClass('active')) {
            mui.toast('请选择尺码');
            return;
        }
        $.ajax({
            url:' /cart/addCart',
            type:'post',
            data: {
                productId:id,
                num:num,
                size:size
            },
            success:function(res){
                if(res.success){
                    mui.toast('添加成功');
                    setInterval(function(){
                        location.href = 'index.html';
                    },2000)
                }else if(res.error == 400 ){
                    localStorage.returnUrl = location.href;
                    location.href = 'login.html';
                }
            }
        })
    })

});