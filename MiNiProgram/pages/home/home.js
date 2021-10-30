// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        msg:'hello world',
        id:['aaa','bbb','ccc'],
        list:['pj','zcy','hzn'],
        flag:false
    },
    handleTap(){
        console.log('click',this.data.flag);
        this.setData({
            msg:'helo'
        })
    }
   
})