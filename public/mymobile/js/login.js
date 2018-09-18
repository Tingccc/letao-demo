/**
 * Created by Administrator on 2018/9/15.
 */
$(function(){
    $("#loginBtn").on("click",function(){
        var username = $('[name="username"]').val().trim();
        var password = $('[name="password"]').val().trim();

        if(!username) {
            mui.toast("用户名不能为空");
            return;
        }
        if(!password) {
            mui.toast("密码不能为空");
            return;
        }

        $.ajax({
            url:"/user/login",
            type:"post",
            data:{username:username,
                password:password
            },
            success:function(res){
                if(res.success){
                    mui.toast("登录成功");
                    setInterval(function(){
                        if(localStorage.getItem('returnUrl')){
                            location.href = localStorage.getItem('returnUrl');
                        } else {
                            location.href = "user.html";
                        }
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })
    })
});
