// pages/sort/sort.js
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
          sortList : [],
    },

    /**
     * 生命周期函数--监听页面加载
     */ 
    onLoad: function (options) {
      var that = this;
      //公告的数据
      db.collection("sort").get({
        success : res => {
          that.setData({
            sortList : res.data,
          })
        }
      })
    },
    sortdetail : function(e){
        console.log(e);
        var id = e.currentTarget.id;
        wx.navigateTo({
          url: '../sortDetail/sortDetail?id='+id,
        })
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