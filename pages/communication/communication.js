// pages/communication/communication.js
Page({
  _handleTryThumb:function(evt){
    var oid = wx.getStorageSync('userInfo').openid
    // console.log(evt.detail.pID)
    const db = wx.cloud.database()
    const c_post = db.collection("post")
    wx.cloud.callFunction({
      name:'postGet'
    }).then(res=>{
      if(res.result.data[res.result.data.length-evt.currentTarget.id-1].thumbUser.includes(oid)){
        var t_l=res.result.data[res.result.data.length-evt.currentTarget.id-1].thumbUser
        console.log(t_l)
        t_l.splice(t_l.indexOf(oid),1)
        console.log(t_l)
        c_post.doc(evt.detail.pID).update({
          data:{
            thumb:db.command.inc(-1),
            thumbUser:t_l
          }
        })
        this.onLoad()
      }
      else{
        c_post.doc(evt.detail.pID).update({
          data:{
            thumb:db.command.inc(1),
            thumbUser:db.command.push(oid)
          }
        })
        this.onLoad()
      }
    })
  },
  _handleToSend:function(){
    wx.navigateTo({
      url: '/pages/send/send',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    post:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh({
      success: (res) => {
        this.setData({
          post:[]
        })
        wx.cloud.callFunction({
          name:'postGet'
        }).then(res=>{
          var oid = wx.getStorageSync('userInfo').openid
          var l=res.result.data.length
          var j=0
          for(var i=l-1;i>=0;--i){
            this.data.post.push(res.result.data[i])
            if(res.result.data[i].thumbUser.includes(oid)){
              this.data.post[j].userThumb=true
            }
            j++
          }
          this.setData({
            post:this.data.post
          })
        })
      },
    })
    wx.hideLoading({
      success: (res) => {},
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
    wx.showLoading({
      title: '刷新中',
    })
    this.onLoad()
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