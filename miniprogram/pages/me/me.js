// pages/detail/detail.js
const app = getApp();

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
        nickName : '游客',
        avatarUrl : '/images/touxiang/avatar.png',
        message : '登陆后可以同步播放记录',
        message2 : '没有账号可以注册哟~',
        yingbiNum : '-',
        condition : '1',
        
    },
   //微信授权登录
  login : function() {
      var that = this
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
            // 将授权信息传值给页面
            nickName :res.userInfo.nickName,
            avatarUrl : res.userInfo.avatarUrl,
            // message2 : '',
            message : '',
            yingbiNum : '100',
            condition : '0',
            })
      }
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