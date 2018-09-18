/**
 * Created by Administrator on 2018/9/18.
 */
$(function () {
    var page = 1;
    var pageSize = 10;
    $.ajax({
        url: '/user/queryUser',
        type: 'get',
        data: {page: page, pageSize: pageSize},
        success: function (res) {
            var html = template('userTpl', res);
            $('tbody').html(html);
        }
    })

    $('tbody').on('click', '#isDel', function(){
        var id = $(this).data('id');
        var isDelete = $(this).data('isdelete');
        $.ajax({
            url: '/user/updateUser',
            type: 'post',
            data: {
                id: id,
                isDelete: isDelete?0:1
            },
            success:function(res) {
                if(res.success){
                    location.reload();
                }
            }
        })

    })
});