// pages/personalInfo/personalInfo.js
const db = wx.cloud.database()
Page({
  _handleSubmitInfo:function(evt){
    this.setData({
      academy:evt.detail.value.academy,
      major:evt.detail.value.major,
      realName:evt.detail.value.realName,
      studentID:evt.detail.value.studentID
    })
    const user = db.collection("user")
    user.doc(this.data.id).update({
      data:{
        studentID:this.data.studentID,
        major:this.data.major,
        academy:this.data.academy,
        realName:this.data.realName
      }
    })
    user.get({
      success:res=>{
        // console.log(res.data[0])
        wx.setStorageSync('student', res.data[0])
      }
    })
    wx.showToast({
      title: '提交成功',
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    studentID:"",
    major:"",
    academy:"",
    realName:"",
    id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:wx.getStorageSync('databaseID')
    })
    const user = db.collection("user")
    user.get({
      success:res=>{
        // console.log(res.data[0])
        this.setData({
          studentID:res.data[0].studentID,
          academy:res.data[0].academy,
          major:res.data[0].major,
          realName:res.data[0].realName
        })
      }
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