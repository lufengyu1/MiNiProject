// pages/1-todolist/1-todolist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mytext:'',
        lists:['stydy','game']
    },
    handleInput(evt){
        this.setData({
            mytext:evt.detail.value
        })
    },
    handleAdd(){
        console.log(this.data.lists+";"+this.data.mytext);
       this.setData({
           lists: [...this.data.lists,this.data.mytext],
           mytext:""
       })
       
    },
    handleDelete(evt){
        console.log('delete',evt.target.dataset.myid);
        this.data.lists.splice(evt.target.dataset.myid,1)
        this.setData({
            lists:this.data.lists
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})