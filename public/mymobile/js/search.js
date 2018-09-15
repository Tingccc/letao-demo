/**
 * Created by Administrator on 2018/9/13.
 */
$(function(){

    var keyArr = [];
    $("#search-btn").on("click",function(){
        var keyword = $("#keyword").val();
        if(keyword.trim()){
            keyArr.unshift(keyword);
            localStorage.setItem("keyArr",JSON.stringify(keyArr));
            location.href = "search-result.html?keyword="+keyword;
        } else {
            alert("搜索不能为空!");
            return;
        }
    })

    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        //console.log(keyArr)
        var html = template("historyTpl",{res:keyArr});
        //console.log(html);
        $(".history-box").html(html);
    }
    $('#clear').on('click',function(){
        $(".history-box").html("");
        localStorage.removeItem('keyArr');
        keyArr=[];
    })

    $(".history-box").on("click",'li',function(){
        var keyword = $(this).text();
        location.href = "search-result.html?keyword="+keyword;
    })
})