// pages/index/index.js
Page({
  _handleActivity:function(evt){
    if(this.data.id){
      wx.navigateTo({
        url: this.data.activityLink[evt.currentTarget.id],
      })
    }
    else{
      wx.showModal({
        title:"错误",
        content:"您还没有登录，请前往用户中心登录",
        success(res){
          if(res.confirm){
            wx.switchTab({
              url: '/pages/personal/personal',
            })
          }
        }
      })
    }
  },
  _handleTest:function(){
    wx.showModal({
      title: '提示',
      content: '即将删除所有缓存信息！是否删除？',
      success (res) {
        if (res.confirm) {
          wx.clearStorage()
          wx.showToast({
            title: '清除缓存成功！',
          })
          this.onLoad()
        } else if (res.cancel) {
          wx.showToast({
            title: '取消操作！',
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    activity:[],
    adPic:[],
    userInfo:{},
    openid:"",
    id:"",
    activityLink:[
      "/pages/kaoyan/kaoyan",
      "/pages/daily/daily",
      "/pages/studyalone/studyalone",
      "/pages/competition/competition",
      "/pages/exercise/exercise",
      "/pages/play/play"
    ],
    isLogin:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection("activity").get({
      success:res=>{
        this.setData({
          activity:res.data
        })
      }
    })
    db.collection("ad").get({
      success:res=>{
        this.setData({
          adPic:res.data
        })
      }
    })
    this.setData({
      id:wx.getStorageSync('databaseID')
    })
    if(this.data.id){
      this.setData({
        isLogin:true
      })
    }
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
    this.setData({
      id:wx.getStorageSync('databaseID')
    })
    if(this.data.id){
      this.setData({
        isLogin:true
      })
    }
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