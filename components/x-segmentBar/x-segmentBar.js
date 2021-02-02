// components/x-segmentBar/x-segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setCurrent:function(index){
      this.setData({
        currentIndex:index
      })
    },
    _handleTap:function(evt){
      // console.log(evt.currentTarget.id)
      this.setData({
        currentIndex:evt.currentTarget.id
      })
      this.triggerEvent("selectChange",{cIdx:evt.currentTarget.id},{})
    }
  }
})
