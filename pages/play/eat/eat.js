// pages/play/eat/eat.js
var app = getApp();
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置    
    swipperSpot:'0', //初始化轮播的点
    zuosrc:'../images/l1.png',
    yousrc:'../images/r1.png',
    content:'0',
    schoolEat:[{
      id:10001,
      image:"cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/CHD.jpg"
    },{
      id:10002,
      image:"cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/CHD2.jpg"
    },{
      id:10003,
      image:"cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/CHD3.jpg"
    },{
      id:10004,
      image:"cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/play/CHD5.jpg"
    },],
    items:[{
      id:10001,
      image:"cloud://chd-community-1gtwr7tfcd28004c.6368-chd-community-1gtwr7tfcd28004c-1304805216/assets/images/2021.1.25-ad1.jpg",
      des:"长安大学"
    }]
  },
  onLoad: function (option) {
    var that = this;
    // 高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR-80;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
    // 切换到哪个tab
    onShow:function(){
      // 注意： 
      // 这里需要在app.js中配置全局数据 cate_id=0
      console.log(app.globalData.cate_id)
      this.setData({
        currentTab: app.globalData.cate_id,
        content: app.globalData.cate_id,
      })
      this.swichNav(app.globalData.cate_id)
    },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current,
      //轮播初始化
      swipperSpot: '0'
    });
    this.checkCor();
    if (this.data.currentTab == 0) {
      this.setData({
        zuosrc: '../images/l1.png',
        yousrc: '../images/r1.png',
      })
    } else if (this.data.currentTab == 5) {
      this.setData({
        yousrc: '../images/l1.png',
        zuosrc: '../images/r1.png'
        
      })
    } else {
      this.setData({
        zuosrc: '../images/l1.png',
        yousrc: '../images/r1.png'
      })
    }
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    if (e == 0 || e == 1 || e == 2 || e == 3 || e == 4 || e == 5){
      var cur = e
    }else{
      console.log(e)
     var cur = e.target.dataset.current;
    }
    this.setData({
      content: cur,
      swipperSpot: '0'
    })
    if (this.data.currentTab == cur) {
      console.log(this.data.currentTab )
      if (this.data.currentTab == 0) {
        this.setData({
          zuosrc: '../images/l2.png',
          yousrc: '../images/r1.png'   })
      } else if (this.data.currentTab == 5) {
        this.setData({
          zuosrc: '../images/l1.png',
          yousrc: '../images/r2.png'     })
      } else {
        this.setData({
          zuosrc: '../images/l1.png',
          yousrc: '../images/r1.png'      })
      }
       return false;
     }else {
      this.setData({
        currentTab: cur,
        swipperSpot: '0'
      })
      app.globalData.cate_id =cur
      console.log(this.data.currentTab)
      if (this.data.currentTab==0){
        this.setData({
          zuosrc: '../images/l2.png',
          yousrc: '../images/r1.png'
        })
      } else if (this.data.currentTab == 5){
        this.setData({
          zuosrc: '../images/l1.png',
          yousrc: '../images/r2.png'
        })
      }else{
        this.setData({
          zuosrc: '../images/l1.png',
          yousrc: '../images/r1.png'
        })
      }
    }
    this.checkCor()
  },
  //轮播图滚动时轮播点切换
  changeSwiper:function(e){
    console.log(e.detail.current)
    this.setData({
      swipperSpot: e.detail.current
    })
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab >2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  footerTap: app.footerTap,
  // 点左箭头向左移动1
  lefttab:function(){
    if (this.data.content > 0 && this.data.content <= 5){
      var n = this.data.content-1;
      this.swichNav(n);
    }
  },
  // 点右箭头向右移动1
  righttab:function(){
    if (this.data.content >=0&&this.data.content <5) {
      var n = Number(this.data.content) + 1;
      this.swichNav(n);
    }
  },
})