/**
 * Created by Administrator on 2018/9/15.
 */
var result;
$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        if(res.error){
            location.href = "login.html";
        }
        result = res;
    }
});
$(function(){

    var html = template('userTpl',result);
    $('.userInfo').html(html);

    $('#logout').on('tap',function(){
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                if(res.success){
                    mui.toast('退出成功');
                    setInterval(function(){
                        location.href = 'index.html'
                    },2000)
                }else{
                    mui.toast(res.message)
                }
            }
        })
    })
});