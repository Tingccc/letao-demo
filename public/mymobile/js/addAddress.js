/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){
    var picker = new mui.PopPicker({layer:3});
    picker.setData(cityData);
    $('#city').on('tap',function(){
        picker.show(function(cityItems){
            $('#city').val(cityItems[0].text+cityItems[1].text+(cityItems[2].text||''));
        });
    });
    $('#confirmBtn').on('tap',function(){
        var recipients = $('[name="recipients"]').val().trim();
        var postCode = $('[name="postCode"]').val().trim();
        var address = $('[name="address"]').val().trim();
        var addressDetail = $('[name="addressDetail"]').val().trim();
        if (!recipients || !postCode || !address || !addressDetail) {
            mui.toast('填写信息不能为空');
            return;
        }
        $.ajax({
            url:'/address/addAddress',
            type:'post',
            data:{
                recipients:recipients,
                postcode:postCode,
                address:address,
                addressDetail:addressDetail
            },
            success:function(res){
                if(res.success){
                    mui.toast('添加成功');
                    setInterval(function(){
                        location.href = 'address.html';
                    })
                }
            }
        })
    })

});