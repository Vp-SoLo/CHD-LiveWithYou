// pages/personal/personal.js
const db = wx.cloud.database()
Page({
  _handleToInfo:function(){
    wx.navigateTo({
      url: '/pages/personalInfo/personalInfo',
    })
  },
  _handleOnGotUserInfo:function(evt){
    this.setData({
      userInfo:evt.detail.userInfo
    })
    wx.cloud.callFunction({
      name:"login",
      success:res=>{
        this.setData({
          openid:res.result.openid
        })
        this.data.userInfo.openid = this.data.openid
        wx.setStorageSync("userInfo",this.data.userInfo)
        const user = db.collection("user")
        user.add({
          data:{
            openid:this.openid,
            nickName:this.data.userInfo.nickName,
            studentID:"",
            major:"",
            academy:"",
            realName:"",
            tagIndex:[]
            }
          })
          user.get().then(res=>{
            this.setData({
              id:res.data[0]._id,
            })
            wx.setStorageSync('databaseID', this.data.id)
            // wx.setStorageSync('student', this.data.studentInfo)
          })
        },
        fail:res=>{
        wx.showToast({
          title: '登陆失败',
        })
      }
      })
  },
  _handleAddTags:function(evt){
    if(this.data.choosenIndex.includes(evt.currentTarget.id)){
      wx.showToast({
        icon:"error",
        title: '已包含该标签！',
      })
    }
    else{
      this.data.choosenTags.push(this.data.showTags[evt.currentTarget.id])
      this.data.choosenIndex.push(this.data.showIndex[evt.currentTarget.id])
      this.data.showTags.splice(evt.currentTarget.id,1)
      this.data.showIndex.splice(evt.currentTarget.id,1)
      this.setData({
        choosenTags:this.data.choosenTags,
        showTags:this.data.showTags
      })
    }
  },
  _handleShowAnother:function(){
    let tIndex=[]
    let tTry=0
    let tShowTags=[]
    this.setData({
      showTags:[],
      showIndex:[]
    })
    while(tIndex.length<6){
      let t = Math.floor((Math.random()*this.data.tags.length)+0)
      if(!(tIndex.includes(t))&&!(this.data.choosenIndex.includes(t))&&!(this.data.showIndex.includes(t))){
        tIndex.push(t)
      }
      ++tTry
      if(tTry>=200){
        break
      }
    }
    for(let i = 0;i<tIndex.length;++i){
        tShowTags.push(this.data.tags[tIndex[i]])
    }
    this.setData({
      showTags:tShowTags,
      showIndex:tIndex
    })
  },
  _handleDeleteTags:function(evt){
    this.data.choosenTags.splice(evt.currentTarget.id,1)
    this.data.choosenIndex.splice(evt.currentTarget.id,1)
    this.setData({
      choosenTags:this.data.choosenTags
    })
  },
  _handleSubmitTags:function(){
    const user = db.collection("user")
    user.doc(this.data.id).update({
      data:{
        tagIndex:this.data.choosenIndex
      }
    })
    wx.showToast({
      title: '提交成功！',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    openid:"",
    id:"",
    tags:['二次元','宅男','吃货','健身','绘画','唱歌','技术宅','单身','恋爱中','学霸','竞赛','考研','找工作','舞蹈','稻米','篮球','足球','网抑云','王者荣耀','单机游戏','FPS','佛系青年','美妆','盗墓笔记','NBA','LOL','米哈游','科幻','小说','电影','Bilibili','up主','微博','手游'],
    choosenTags:[],
    choosenIndex:[],
    showTags:[],
    showIndex:[],
    studentInfo:{},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('student', this.data.studentInfo)
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      openid:wx.getStorageSync('userInfo').openid,
      id:wx.getStorageSync('databaseID')
    })
    const user = db.collection("user")
    user.get().then(res=>{
      // console.log(res.data[0].tagIndex)
      this.setData({
        choosenIndex:res.data[0].tagIndex,
      })
      for(let j=0;j<this.data.choosenIndex.length;++j){
        this.data.choosenTags.push(this.data.tags[this.data.choosenIndex[j]])
      }
      this.setData({
        choosenTags:this.data.choosenTags
      })
    })
    let tIndex=[]
    let tTry=0
    let tShowTags=[]
    while(tIndex.length<6){
      let t = Math.floor((Math.random()*this.data.tags.length)+0)
      if((!(tIndex.includes(t)))&&(!(this.data.choosenIndex.includes(t)))){
        tIndex.push(t)
      }
      ++tTry
      if(tTry>=200){
        break
      }
    }
    for(let i = 0;i<tIndex.length;++i){
        tShowTags.push(this.data.tags[tIndex[i]])
    }
    this.setData({
      showTags:tShowTags,
      showIndex:tIndex
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