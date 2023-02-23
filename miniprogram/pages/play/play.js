// pages/play/play.js
// 设置弹幕颜色
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data :{
      src : '',
      danmuList:[{
        text:'第 1s 出现的弹幕',
        color:'#ff0000',
        time:1
          },
          {
        text:'第 2s 出现的弹幕',
        color:'#ff00ff',
        time:2
          }],
  },
  inputValue: '', //创建字符串保存弹幕
  fanhui : function(e){
    wx.navigateBack({
      delta: 0,
    })
  },
  onReady : function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  
  bindInputBlur : function (e) { // 获得输入框文本的内容
    this.inputValue = e.detail.value
  },
  bindSendDanmu : function () { 
    this.videoContext.sendDanmu({
      text: this.inputValue, // 将内容赋值给弹幕
      color: getRandomColor() //随机弹幕字体颜色
    })
    
  },
  // 分享视频
  onShareAppMessage: function (res) {
    
    console.log(res)
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },

})