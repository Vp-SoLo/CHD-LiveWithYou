// pages/kaoyan/kaoyan.js
Page({
  _handleToChange:function(){
    wx.navigateTo({
      url: '/pages/changeKaoyan/changeKaoyan',
    })
  },
  _handleBack:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  _handleSubmit:function(evt){
    // console.log(wx.getStorageSync('test').value)
    // console.log(wx.getStorageSync('student').realName)
    if((wx.getStorageSync('student').realName!=undefined)&&((wx.getStorageSync('student').studentID!=undefined))){
      const db = wx.cloud.database()
      const c_kaoyan = db.collection("kaoyan")
      c_kaoyan.add({
        data:{
          realName:wx.getStorageSync('student').realName,
          studentID:wx.getStorageSync('student').studentID,
          targetSchool:evt.detail.value.targetSchool,
          targetMajor:evt.detail.value.targetMajor,
          intro:evt.detail.value.intro,
          databaseID:wx.getStorageSync('databaseID'),
          userInfo:wx.getStorageSync('userInfo')
        }
      })
      this.data.kaoyan.realName=wx.getStorageSync('student').realName
      this.data.kaoyan.studentID=wx.getStorageSync('student').studentID
      this.data.kaoyan.targetSchool=evt.detail.value.targetSchool
      this.data.kaoyan.targetMajor=evt.detail.value.targetMajor
      this.data.kaoyan.intro=evt.detail.value.intro
      this.data.kaoyan.databaseID=wx.getStorageSync('databaseID')
      this.setData({
        kaoyan:this.data.kaoyan
      })
      wx.setStorageSync('kaoyan',this.data.kaoyan)
      wx.showToast({
        title: '提交成功',
      })
      this.setData({
        isLoged:true
      })
    }
    else{
      wx.showModal({
        title:"错误",
        content:"您还没有完善学生信息，点击确定跳转，或者返回主页刷新",
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/personalInfo/personalInfo',
            })
          }
        }
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isLoged:false,
    kaoyan:{},
    user:[],
    well:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh({
      success: (res) => {
        if(wx.getStorageSync('kaoyan').realName!=undefined){
          this.setData({
            isLoged:true
          })
          const db = wx.cloud.database()
          const c_kaoyan = db.collection("kaoyan")
          var lt=wx.getStorageSync('kaoyan').targetSchool
          var ltt=wx.getStorageSync('kaoyan').targetMajor
            wx.cloud.callFunction({
              name:"kaoyanGet"
            }).then(res=>{
                this.setData({
                  user:res.result.data
                })
            })
            // console.log(this.data.user)
            var i=0
            for(i=0;i<this.data.user.length;++i){
              if(this.data.user[i].databaseID==wx.getStorageSync('kaoyan').databaseID){
                this.data.user.splice(i,1)
                break
              }
            }
            this.setData({
              well:[]
            })
            i=0;
            for(;i<this.data.user.length;++i){
              var tt=this.data.user[i].targetMajor
              var t=this.data.user[i].targetSchool
              if(lt==t||ltt==tt){
                this.data.well.push(this.data.user[i])
              }
            }
            this.setData({
              well:this.data.well
            })
            // console.log(this.data.well)
            wx.hideLoading({
              success: (res) => {},
            })
        }
      },
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