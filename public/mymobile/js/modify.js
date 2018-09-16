/**
 * Created by Administrator on 2018/9/16.
 */

$(function(){
    $("#modifyBtn").on("tap",function() {

        var oldPassword = $('[name="oldPassword"]').val().trim();
        var newPassword = $('[name="newPassword"]').val().trim();
        var confirmPass = $('[name="confirmPass"]').val().trim();
        var vCode = $('[name="vCode"]').val().trim();

        if (oldPassword == newPassword) {
            mui.toast("新密码与旧密码不能一致");
            return;
        }
        if (newPassword !== confirmPass) {
            mui.toast("两次密码不匹配");
            return;
        }

        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:{oldPassword:oldPassword,
                newPassword:newPassword,
                vCode:vCode
            },
            success:function(res){
                if(res.success){
                    mui.toast("修改成功");
                    setInterval(function(){
                        location.href = "login.html";
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })
    });
    $("#getCode").on("tap",function(){
        $.ajax({
            url:"/user/vCodeForUpdatePassword",
            type:"get",
            success:function(res){
                alert(res.vCode);
            }
        })
    })


});