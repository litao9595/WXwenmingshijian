// compoments/myselct/myselct.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selctval:{
      type:Array,
      value:[]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
      myval:'',
      array: ['美国', '中国', '巴西', '日本'],
  },
    /**
   * 组件挂载后执行
   */
  ready:function(){
    this.setData({
      myval:this.data.selctval
    })
    console.log(this.data.selctval)
    console.log(this.data.myval)
    
  },
 

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function(e) {
      console.log(e)
      this.setData({
        index: e.detail.value
      })
    },
  }
})
