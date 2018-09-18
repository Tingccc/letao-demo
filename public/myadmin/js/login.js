/**
 * Created by Administrator on 2018/9/18.
 */
$(function(){
  $('#loginBtn').on('click',function(){
      var username = $('[name = "username"]').val().trim();
      var password = $('[name = "password"]').val().trim();
      if(!username || !password) {
          alert('填写信息不能为空');
          return;
      }
      $.ajax({
          url:' /employee/employeeLogin',
          type:'post',
          data:{username:username,password:password},
          success:function(res){
              if(res.success) {
                  location.href = 'user.html';
              }else {
                  alert(res.message);
              }
          }
      })
  })
});