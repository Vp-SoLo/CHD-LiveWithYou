// components/x-post/x-post.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    postItem:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    localthumb:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleThumb:function(evt){
      // console.log(evt)
      this.triggerEvent("thumb",{pID:evt.currentTarget.id},{})
      var oid = wx.getStorageSync('userInfo').openid
      // console.log(this.data.postItem)
      if(this.data.postItem.thumbUser.includes(oid)){
        this.data.postItem.userThumb=false
        this.data.postItem.thumb-=1
        this.setData({
          postItem:this.data.postItem,
          localthumb:false,
          thumb:this.data.postItem.thumb
        })
      }
      else{
        this.data.postItem.userThumb=true
        this.data.postItem.thumb+=1
        this.setData({
          postItem:this.data.postItem,
          localthumb:true,
          thumb:this.data.postItem.thumb
        })
      }
    },
  }
})
