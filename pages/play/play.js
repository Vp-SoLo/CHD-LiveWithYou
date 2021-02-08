// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entertainment:[{
      id:10001,
      image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3816760156,3534271315&fm=26&gp=0.jpg",
      title:"千年古都"
    },{
      id:10002,
      image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1078749648,4228181189&fm=26&gp=0.jpg",
      title:"不见长安"
    },{
      id:10003,
      image:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00352-2482.jpg",
      title:"钟鼓楼"
    },{
      id:10004,
      image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=239783451,1930344686&fm=26&gp=0.jpg",
      title:"不夜城"
    },{
      id:10005,
      image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1767843075,1115674586&fm=26&gp=0.jpg",
      title:"雁塔"
    },{
      id:10006,
      image:"https://tse1-mm.cn.bing.net/th/id/OIP.T4CSet_G95DCbAp5UkSnkwHaE7?w=292&h=194&c=7&o=5&dpr=1.25&pid=1.7",
      title:"美食-肉夹馍"
    },{
      id:10007,
      image:"https://tse2-mm.cn.bing.net/th/id/OIP.oHilcsdMEp09SJu0f-JIjQHaEK?w=290&h=180&c=7&o=5&dpr=1.25&pid=1.7",
      title:"美食-肉夹馍"
    },{
      id:10008,
      image:"https://tse4-mm.cn.bing.net/th/id/OIP.xqrc1smAjMGnUVfNcKZ8hAHaE7?w=270&h=180&c=7&o=5&dpr=1.25&pid=1.7",
      title:"美食-肉夹馍"
    }],
    kinds:[{
      icon: "cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/吃.png",
      name: "吃",
      url: "/pages/play/eat/eat"
    },
    {
      icon: "cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/喝茶.png",
      name: "喝",
      url: "/pages/play/drink/drink"
    },
    {
      icon: "cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/玩具.png",
      name: "玩",
      url: "/pages/play/games/games"
    },
    {
      icon: "cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/娱乐.png",
      name: "乐",
      url: "/pages/play/fun/fun"
    }
  ]
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