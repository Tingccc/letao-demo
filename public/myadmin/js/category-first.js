/**
 * Created by Administrator on 2018/9/18.
 */
$(function(){
    var page = 1;
    var pageSize = 10;
    var totalPage = 0;
    getData();

    $('#prev').on('click',function(){
        if(page>1) {
            page--;
            getData();
        }

    });
    $('#next').on('click',function(){
        if(page<totalPage) {
            page++;
            getData();
        }
    });


    function getData(){
        $.ajax({
            url:'/category/queryTopCategoryPaging',
            type:'get',
            data:{page:page,pageSize:pageSize},
            success:function(res){
                console.log(res);
                var html = template('tpl',res);
                $('tbody').html(html);
                totalPage = Math.ceil(res.total/pageSize);
            }
        })
    }

    $('#save').on('click',function(){
        var categoryName = $('[name="categoryName"]').val().trim();
        if(!categoryName) {
            alert('分类名称不能为空');
        }
        $.ajax({
            url:'/category/addTopCategory',
            type:'post',
            data:{categoryName:categoryName},
            success:function(res){
                if(res.success) {
                    location.reload();
                }else{
                    alert(res.message);
                }
            }
        })
    })
});