// pages/detail/detail.js
wx.cloud.init({
    env : 'cloud1-2ggi03t91ce41f43',
    traceUser : true,
  })

  const db = wx.cloud.database()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        noteList : []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        db.collection("note").get({
            success : res =>{
                console.log(res.data)
                this.setData({
                    noteList : res.data,
                })
            }
        })
    },
    closepages : function(e){
        wx.navigateBack({
          delta: 0,
        })
    },
    toastChange: function () {
        this.setData({ toastHidden: true })
        wx.navigateBack()
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