/**
 * Created by Administrator on 2018/9/18.
 */
$(function(){
    var page = 1;
    var pageSize = 5;
    var totalPage = 0;
    getData();

    function getData(){
        $.ajax({
            url:'/category/querySecondCategoryPaging',
            type:'get',
            data:{page:page,pageSize:pageSize},
            success:function(res){
                console.log(res);
                var html = template('secondCategoryTpl',res);
                $('tbody').html(html);
                totalPage = Math.ceil(res.total/pageSize);
            }
        })
    }

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
    $.ajax({
        url:'/category/queryTopCategoryPaging',
        type:'get',
        data:{page:1,pageSize:100},
        success:function(res){
            var html = template('firstCategoryTpl',res);
            $('#categoryFirst').html(html);
        }
    });
    var previewImg;
    $('#fileUpload').fileupload({
        dataType:'json',
        done:function(e,data){
            $('#previewImg').attr('src',data.result.picAddr);
            previewImg = data.result.picAddr;
        }
    });
    $('#save').on('click',function(){
        var categoryId = $('[name="categoryId"]').val();
        var brandName = $('[name="brandName"]').val().trim();
        $.ajax({
            url:'/category/addSecondCategory',
            type:'post',
            data:{brandName:brandName,
                categoryId:categoryId,
                brandLogo:previewImg,
                hot:0},
            success:function(res){
                if(res.success){
                    location.reload();
                }
            }
        });
    });
});