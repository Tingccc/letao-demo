/**
 * Created by Administrator on 2018/9/15.
 */
$(function(){
    $("#regBtn").on("tap",function(){
        var username = $('[name="username"]').val().trim();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val().trim();
        var confirmPass = $('[name="confirmPass"]').val().trim();
        var vCode = $('[name="vCode"]').val().trim();

        if(!username) {
            mui.toast("用户名不能为空");
            return;
        }
        var reg = /^1\d{10}$/;
        if(!reg.test(mobile)){
            mui.toast("手机号码不合法");
            return;
        }
        if(!password || password!==confirmPass) {
            mui.toast("两次密码不匹配");
            return;
        }
        if(!/^\d{6}$/.test(vCode)){
            mui.toast('验证码输入的格式不正确');
            return;
        }
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{username:username,
                password:password,
                mobile:mobile,
                vCode:vCode
            },
            success:function(res){
                if(res.success){
                    mui.toast("注册成功");
                    setInterval(function(){
                        location.href = "login.html";
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })

    })

    $("#getCode").on("tap",function(){
        $.ajax({
            url:"/user/vCode",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
});