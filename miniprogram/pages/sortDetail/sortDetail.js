// pages/sortDetail/sortDetail.js
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
        title : '',
        viewList : [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this
        // console.log(options)
        console.log(options)
        // var id = options.id;
        // console.log(id)
        db.collection('sortList').where({ id : options.id}).get(
          {
            success : function(res) {
              console.log(res)
              that.setData({
                viewList : res.data,
                title : res.data[0].sort_name
              })
              
            }
          }
        )
        
       },
    fanhui : function(e){
        wx.navigateBack({
          delta: 0,
        })
      },
      sortdetail : function(e){
          wx.navigateTo({
            url: '../play/play',
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