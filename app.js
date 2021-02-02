// app.js
App({
  onLaunch:function(){
    wx.cloud.init({
      env:'chd-community-1gtwr7tfcd28004c',
      traceUser:true
    })
  },
  globalData: {
    userInfo: null
  }
})
