// pages/send/send.js
Page({
  _handleSend:function(evt){
    // console.log(evt.detail.value.content)
    var d = Date.now()
    var t = new Date(d)
    // console.log(t)
    this.setData({
      id:wx.getStorageSync('databaseID'),
      userInfo:wx.getStorageSync('userInfo'),
      content:evt.detail.value.content
    })
    const db = wx.cloud.database()
    const c_post = db.collection("post")
    c_post.add({
      data:{
        userInfo:this.data.userInfo,
        postTime:t,
        content:this.data.content,
        thumb:0,
        thumbUser:[]
      }
    }).then(
      res=>{
        wx.showToast({
          title: '发表成功',
        })
        wx.navigateBack({
          delta: 1,
        })
      }
    )
  },
  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    id:"",
    userInfo:{}
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