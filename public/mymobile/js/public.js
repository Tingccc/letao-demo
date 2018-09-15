/**
 * Created by Administrator on 2018/9/15.
 */
$(function(){

        $('body').on("tap",'a',function(){
            mui.openWindow({
                url:$(this).attr("href")
            })
        })

});