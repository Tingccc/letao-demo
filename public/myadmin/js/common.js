$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	$('.login_out_bot').on('click',function(){
		$.ajax({
			url:'/employee/employeeLogout',
			type:'get',
			success:function(res){
				if(res.success) {
					location.href = 'login.html';
				}
			}
		})
	})
});