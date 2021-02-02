// components/x-segmentPage/x-segmentPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sItem:[
      {
        title:"热搜榜",
        subTitle:"本周最热"
      },
      {
        title:"新晋榜",
        subTitle:"本周最新"
      },
      {
        title:"收藏榜",
        subTitle:"本周最多"
      },
      {
        title:"主页",
        subTitle:"本周综合"
      }
    ],
    ci:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlePagesChange:function(evt){
      let bar=this.selectComponent("#x-sp-sb")
      bar._setCurrent(evt.detail.current)
    },
    _handleChange:function(evt){
      // console.log(evt.detail.cIdx)
      this.setData({
        ci:parseInt(evt.detail.cIdx)
      })
    },
    _handlePageChange:function(evt){
      // console.log(evt.detail.current)
      this.triggerEvent("pageChange",{cci:evt.detail.current},{})
    },
  }
})
