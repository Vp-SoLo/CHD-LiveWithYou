// pages/changeKaoyan/changeKaoyan.js
Page({
  _handleChange:function(evt){
    this.setData({
      realName:evt.detail.value.realName,
      targetSchool:evt.detail.value.targetSchool,
      targetMajor:evt.detail.value.targetMajor,
      intro:evt.detail.value.intro
    })
    const db = wx.cloud.database()
    const c_kaoyan = db.collection("kaoyan")
    c_kaoyan.where({
      databaseID:wx.getStorageSync('databaseID')
    }).update({
      data:{
        realName:this.data.realName,
        targetSchool:this.data.targetSchool,
        targetMajor:this.data.targetMajor,
        intro:this.data.intro
      }
    })
    wx.showToast({
      title: '提交成功',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    realName:"",
    targetSchool:"",
    targetMajor:"",
    intro:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    const c_kaoyan = db.collection("kaoyan")
    c_kaoyan.where({
      databaseID:wx.getStorageSync('databaseID')
    }).get().then(res=>{
      // console.log(res.data[0])
      this.setData({
        realName:res.data[0].realName,
        targetSchool:res.data[0].targetSchool,
        targetMajor:res.data[0].targetMajor,
        intro:res.data[0].intro
      })
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