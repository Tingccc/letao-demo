/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){


    if(localStorage.getItem('editAdd')){
        var address = JSON.parse(localStorage.getItem('editAdd'));
        var html = template('editTpl',address);
        $('#editBox').html(html);
    }

    var picker = new mui.PopPicker({layer:3});
    picker.setData(cityData);
    $('#city').on('tap',function(){
        picker.show(function(cityItems){
            $('#city').val(cityItems[0].text+cityItems[1].text+(cityItems[2].text||''));
        });
    });

    var id = address.id;
    $('#editBox').on('tap','#confirmBtn',function(){
        var recipients = $('[name="recipients"]').val().trim();
        var postCode = $('[name="postCode"]').val().trim();
        var address = $('[name="address"]').val().trim();
        var addressDetail = $('[name="addressDetail"]').val().trim();
        if (!recipients || !postCode || !address || !addressDetail) {
            mui.toast('填写信息不能为空');
            return;
        }
        $.ajax({
            url:'/address/updateAddress',
            type:'post',
            data:{
                id:id,
                recipients:recipients,
                postcode:postCode,
                address:address,
                addressDetail:addressDetail
            },
            success:function(res){
                if(res.success){
                    mui.toast('修改成功');
                    setInterval(function(){
                        location.href = 'address.html';
                    })
                }
            }
        })
    })
});