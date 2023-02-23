wx.cloud.init({
  env : 'cloud1-2ggi03t91ce41f43',
  traceUser : true,
})
const db = wx.cloud.database()
Page({

  // 页面初始数据
  data :{
    id : 1,
    imgList : [],
    textList : [],
    gaoxiaoList : [],
    hotList : [
      {
        coverImg: 'https://i0.hdslb.com/bfs/archive/bf578de7d81c5d2367ff533fc8fd0ec2a32c30a1.jpg@672w_378h_1c.webp',
        title: '千万不能问男友和闺蜜这些问题！！',
        playNum: '21.3万',
        commentNum: '8638',
        avid: 'av1'
      },
      {
        coverImg: 'https://i2.hdslb.com/bfs/archive/9cb3410721051ca0bec88726cc512d9036d92e9c.jpg@672w_378h_1c.webp',
        title: '我终于向交往5年的南非女友求婚了！',
        playNum: '21.3万',
        commentNum: '8638',
        avid: 'av1'
      },
      {
        coverImg: 'https://i0.hdslb.com/bfs/archive/90b2825f8dcf479795a11c6096414d2fe515166a.jpg@672w_378h_1c.webp',
        title: '带着日本妹子去吃爆辣担担面！她的反应是？！',
        playNum: '21.3万',
        commentNum: '8638',
        avid: 'av1'
      },
      {
        coverImg: 'https://i2.hdslb.com/bfs/archive/656f98c72db560c402f2d9513ef1f77d87fb7d16.jpg@672w_378h_1c.webp',
        title: '小小提瓦特竟同时拥有卧龙凤雏两位人才【原神演义 # 02】',
        playNum: '21.3万',
        commentNum: '8638',
        avid: 'av1'
      }
    ],
    rexueList : [] 
  },
  onLoad:function(option){
    var that = this;
    //公告的数据
    db.collection("tz_title").get({
      success : res => {
        that.setData({
          textList : res.data,
        })
      }
    })
    // 轮播图的数据
   db.collection("photo").get({
      success : function(res){
        that.setData({
          imgList : res.data
        })
      }
   })
   //视频的数据
   db.collection("rexueList").get({
     success : function(res){
       that.setData({
         rexueList : res.data
       })
     }
   }),
    //搞笑动漫的数据从数据库调用
  db.collection("gaoxiaoList").get({
      success : res =>{
        that.setData({
          gaoxiaoList : res.data
        })
      }
  })
  },

  guankan : function(e){
      console.log(e);
      wx.navigateTo({
        url: '/pages/play/play',
      })
  },
})
